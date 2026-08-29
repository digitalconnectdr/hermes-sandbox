import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-[#111827] p-8 rounded-xl border border-[#1e293b]"
          >
            <p className="text-lg text-gray-300 mb-6 italic">
              "Velora transformed our executive travel experience. From the 
              immaculate vehicles to the professional chauffeurs, every detail 
              exudes excellence. We've tried other premium services, but none 
              match the consistency and sophistication of Velora."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                JS
              </div>
              <div>
                <h3 className="font-semibold text-white">James Smith</h3>
                <p className="text-sm text-gray-400">CEO, TechInnovate</p>
              </div>
            </div>
          </motion.div>
          
          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-[#111827] p-8 rounded-xl border border-[#1e293b]"
          >
            <p className="text-lg text-gray-300 mb-6 italic">
              "For our annual gala, Velora provided seamless transportation 
              for 200 VIP guests. The coordination was flawless, the vehicles 
              were pristine, and our guests were consistently impressed. 
              They made our event truly memorable."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                MW
              </div>
              <div>
                <h3 className="font-semibold text-white">Maria Wilson</h3>
                <p className="text-sm text-gray-400">Event Director, Prestige Events</p>
              </div>
            </div>
          </motion.div>
          
          {/* Testimonial 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-[#111827] p-8 rounded-xl border border-[#1e293b]"
          >
            <p className="text-lg text-gray-300 mb-6 italic">
              "As a frequent international traveler, I rely on Velora for 
              airport transfers. Their punctuality is impeccable, the vehicles 
              are always immaculate, and the chauffeurs anticipate my needs 
              before I even express them. Simply the best."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                DL
              </div>
              <div>
                <h3 className="font-semibold text-white">David Lee</h3>
                <p className="text-sm text-gray-400">International Business Consultant</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}