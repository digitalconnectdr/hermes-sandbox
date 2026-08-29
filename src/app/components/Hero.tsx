import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-[#09090b] to-[#111] overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="rounded-full bg-purple-500/10"
          style={{
            width: '400px',
            height: '400px',
            top: '-20%',
            left: '-20%',
            filter: 'blur(80px)',
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="rounded-full bg-pink-500/10"
          style={{
            width: '300px',
            height: '300px',
            bottom: '-10%',
            right: '-10%',
            filter: 'blur(60px)',
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 text-center space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Velora
          </motion.span>
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Private Transport
          </motion.span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience luxury redefined. Our premium fleet offers comfort, safety,
            and style for discerning travelers who demand nothing less than
            excellence.
          </motion.sspan>
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            asChild
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#services"
              className="flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover-shadow-xl"
            >
              Explore Services
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.button>

          <motion.button
            asChild
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <a
              href="#fleet"
              className="flex items-center px-8 py-4 border border-gray-600 hover:border-gray-400 text-gray-200 hover:text-white font-medium rounded-lg transition-all duration-300 hover:-translate-y-1"
            >
              View Fleet
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.button>
        </div>
      </div>
    </section>
  );
}