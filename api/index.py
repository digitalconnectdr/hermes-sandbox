import sqlite3
from flask import Flask, request, jsonify, g
import os

app = Flask(__name__)

if os.environ.get('VERCEL'):
    DATABASE = '/tmp/leads.db'
else:
    DATABASE = os.path.join(os.path.dirname(__file__), 'leads.db')

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def init_db():
    with app.app_context():
        db = get_db()
        cursor = db.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS leads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                origen TEXT NOT NULL
            )
        ''')
        db.commit()

# Initialize the database (creates table if not exists)
init_db()

@app.errorhandler(404)
def handle_404(e):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(400)
def handle_400(e):
    return jsonify({'error': 'Bad request'}), 400

@app.errorhandler(405)
def handle_405(e):
    return jsonify({'error': 'Method not allowed'}), 405

@app.route('/leads', methods=['POST'])
def create_lead():
    data = request.get_json()
    if not data or 'name' not in data or 'email' not in data or 'origen' not in data:
        return jsonify({'error': 'Missing required fields: name, email, origen'}), 400

    name = data['name']
    email = data['email']
    origen = data['origen']

    db = get_db()
    try:
        cursor = db.cursor()
        cursor.execute(
            'INSERT INTO leads (name, email, origen) VALUES (?, ?, ?)',
            (name, email, origen)
        )
        db.commit()
        lead_id = cursor.lastrowid
        return jsonify({'id': lead_id, 'name': name, 'email': email, 'origen': origen}), 201
    except sqlite3.IntegrityError as e:
        return jsonify({'error': 'Email already exists'}), 409
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/leads', methods=['GET'])
def list_leads():
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT id, name, email, origen FROM leads')
    rows = cursor.fetchall()
    leads = []
    for row in rows:
        leads.append({
            'id': row['id'],
            'name': row['name'],
            'email': row['email'],
            'origen': row['origen']
        })
    return jsonify(leads), 200

@app.route('/leads/<int:lead_id>', methods=['GET'])
def get_lead(lead_id):
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT id, name, email, origen FROM leads WHERE id = ?', (lead_id,))
    row = cursor.fetchone()
    if row is None:
        return jsonify({'error': 'Lead not found'}), 404
    return jsonify({
        'id': row['id'],
        'name': row['name'],
        'email': row['email'],
        'origen': row['origen']
    }), 200