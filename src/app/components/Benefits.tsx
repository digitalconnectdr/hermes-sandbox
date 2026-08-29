import { motion } from 'framer-motion';

export default function Benefits() {
  return (
    <section className="py-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Why Choose Velora?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Benefit 1 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 bg-[#111] rounded-xl hover:bg-[#1a1a1a] transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="mb-6">
              <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Luxury Fleet</h3>
            <p className="text-gray-300">
              Our meticulously maintained vehicles offer the pinnacle of comfort and style, featuring premium leather interiors, climate control, and state-of-the-art entertainment systems.
            </p>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center text-center p-8 bg-[#111] rounded-xl hover:bg-[#1a1a1a] transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="mb-6">
              <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Professional Chauffeurs</h3>
            <p className="text-gray-300">
              Our highly trained chauffeurs prioritize your safety, privacy, and comfort, providing discreet and courteous service tailored to your specific needs.
            </p>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center text-center p-8 bg-[#111] rounded-xl hover:bg-[#1a1a1a] transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="mb-6">
              <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Personalized Experience</h3>
            <p className="text-gray-300">
              From preferred temperature settings to specific route preferences, we tailor every detail of your journey to create a truly bespoke transportation experience.
            </p>
          </motion.div>

          {/* Benefit 4 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center text-center p-8 bg-[#111] rounded-xl hover:bg-[#1a1a1a] transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="mb-6">
              <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2s0 2 1.1 2m0 4c1.1 0 2-.9 2-2s-.9-2-2-2m0-4V9m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Uncompromising Safety</h3>
            <p className="text-gray-300">
              Your safety is our top priority. We implement rigorous maintenance protocols, real-time GPS tracking, and comprehensive insurance coverage for complete peace of mind.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}