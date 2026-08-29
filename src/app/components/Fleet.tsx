import { motion } from 'framer-motion';

export default function Fleet() {
  const fleetCategories = [
    {
      id: 1,
      title: "Sedans",
      description: "Luxury sedans for executive travel and airport transfers",
      imageCount: 3,
      features: ["Leather Interior", "Climate Control", "Privacy Tint"],
      badge: "Most Popular"
    },
    {
      id: 2,
      title: "SUVs",
      description: "Spacious SUVs for group travel and luggage capacity",
      imageCount: 2,
      features: ["Third Row Seating", "All-Wheel Drive", "Premium Sound"],
      badge: "Family Friendly"
    },
    {
      id: 3,
      title: "Vans",
      description: "Premium vans for corporate events and group transportation",
      imageCount: 2,
      features: ["Captain Seats", "Entertainment System", "Wi-Fi Hotspot"],
      badge: "Corporate Ready"
    },
    {
      id: 4,
      title: "Limousines",
      description: "Stretch limousines for special occasions and celebrations",
      imageCount: 1,
      features: ["Bar Setup", "Mood Lighting", "Privacy Partition"],
      badge: "Luxury Tier"
    }
  ];

  return (
    <section className="py-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">
          Our Premium Fleet
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {fleetCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: category.id * 0.1, duration: 0.6 }}
              className="bg-[#111827] p-8 rounded-xl border border-[#1e293b] h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                {category.badge && (
                  <span className="px-3 py-1 bg-gradient-to-br from-purple-600 to-pink-600 text-xs font-semibold rounded-full">
                    {category.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-400 mb-6">{category.description}</p>
              <div className="space-y-3 mb-6">
                {category.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-3 h-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="grid gap-2">
                  {[...Array(category.imageCount)].map((_, index) => (
                    <div key={index} className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}