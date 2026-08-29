import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Airport Transfers",
      description: "Seamless pick-up and drop-off with real-time flight tracking, meet-and-greet service, and luggage assistance.",
      image: "/images/services/service-1.jpg",
      icon: "✈️"
    },
    {
      id: 2,
      title: "Corporate Travel",
      description: "Executive transportation for business meetings, conferences, and corporate events with Wi-Fi and privacy partitions.",
      image: "/images/services/service-2.jpg",
      icon: "💼"
    },
    {
      id: 3,
      title: "Event Transportation",
      description: "Coordinated transport for weddings, galas, concerts, and special events with flexible scheduling and vehicle options.",
      image: "/images/services/service-3.jpg",
      icon: "🎉"
    },
    {
      id: 4,
      title: "Hourly Charter",
      description: "Flexible hourly service for city tours, multiple stops, or as-needed transportation with a dedicated chauffeur.",
      image: "/images/services/service-4.jpg",
      icon: "🕐"
    },
    {
      id: 5,
      title: "City to City",
      description: "Premium intercity travel between major cities with comfort stops, professional drivers, and door-to-door service.",
      image: "/images/services/service-5.jpg",
      icon: "🏙️"
    },
    {
      id: 6,
      title: "Special Occasions",
      description: "Luxury transportation for anniversaries, birthdays, romantic evenings, and milestone celebrations.",
      image: "/images/services/service-6.jpg",
      icon: "💎"
    }
  ];

  return (
    <section className="py-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">
          Our Premium Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: service.id * 0.1, duration: 0.6 }}
              className="bg-[#111827] p-8 rounded-xl border border-[#1e293b] flex flex-col h-full"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
              <div className="mt-auto">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg border border-[#1e293b]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}