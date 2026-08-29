from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder(filename, text, width=400, height=300):
    # Create a new image with dark background
    image = Image.new('RGB', (width, height), color='#09090b')
    draw = ImageDraw.Draw(image)
    
    # Try to use a default font, fallback to default if not available
    try:
        # Try to load a nicer font if available
        font = ImageFont.truetype("arial.ttf", 24)
    except IOError:
        font = ImageFont.load_default()
    
    # Calculate text position to center it
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    position = ((width - text_width) // 2, (height - text_height) // 2)
    
    # Draw text with a subtle glow effect
    draw.text(position, text, fill='#ffffff', font=font, stroke_width=1, stroke_fill='#1e293b')
    
    # Add a subtle border
    draw.rectangle([0, 0, width-1, height-1], outline='#1e293b', width=1)
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    
    # Save the image
    image.save(filename)
    print(f"Created placeholder: {filename}")

if __name__ == "__main__":
    # Create service images
    services = [
        "Airport Transfers",
        "Corporate Travel", 
        "Event Transportation",
        "Hourly Charter",
        "City to City",
        "Special Occasions"
    ]
    
    for i, service in enumerate(services):
        filename = f"public/images/services/service-{i+1}.jpg"
        create_placeholder(filename, service)
    
    print("All placeholder images created!")