import { motion } from 'framer-motion';

export default function FAQ() {
  const faqItems = [
    {
      id: 1,
      question: "What areas do you serve?",
      answer: "We provide premium transportation services in major metropolitan areas and between key cities. Our service includes airport transfers, corporate travel, event transportation, and hourly charters. Please contact us for specific route availability."
    },
    {
      id: 2,
      question: "How do I make a reservation?",
      answer: "Reservations can be made through our website, mobile app, or by contacting our 24/7 customer service line. We recommend booking at least 24 hours in advance for guaranteed availability, especially for airport transfers and special events."
    },
    {
      id: 3,
      question: "What safety measures do you have in place?",
      answer: "All our vehicles undergo regular maintenance and safety inspections. Our chauffeurs are professionally trained, background-checked, and participate in ongoing safety programs. We also provide real-time trip tracking and 24/7 support during your journey."
    },
    {
      id: 4,
      question: "Can I request specific amenities?",
      answer: "Yes, we can accommodate special requests such as child seats, accessibility needs, preferred beverages, newspapers, or specific temperature settings. Please mention any requirements when making your reservation so we can prepare accordingly."
    },
    {
      id: 5,
      question: "What is your cancellation policy?",
      answer: "We offer free cancellation up to 2 hours before your scheduled pickup time. For cancellations made less than 2 hours in advance, a 50% fee applies. No-shows are charged at 100% of the service rate."
    }
  ];

  return (
    <section className="py-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.id * 0.05, duration: 0.5 }}
              className="border border-[#1e293b] rounded-xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 bg-[#111827] cursor-pointer hover:bg-[#1e293b] transition-colors"
                onClick={() => {
                  // Toggle logic would be handled by state in a real app
                  // For this static demo, we'll keep it simple without interactivity
                }}
              >
                <h3 className="font-semibold text-white">{item.question}</h3>
                <svg className="w-5 h-5 text-gray-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
              <div className="bg-[#09090b] px-6 pb-4">
                <p className="text-gray-400">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}