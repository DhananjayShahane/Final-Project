import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: "Emily Johnson",
    position: "Food Critic",
    text: "An unforgettable dining experience! The flavors were exceptional, and the ambiance was perfect. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
  },
  {
    name: "David Thompson",
    position: "Chef & Food Blogger",
    text: "A must-visit place for food lovers! The presentation, taste, and hospitality were beyond expectations.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    position: "Local Guide",
    text: "Absolutely delicious! The staff was friendly, and every dish was cooked to perfection. Will be coming back soon!",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
  },
];


const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionStyle = {
    backgroundImage: 'url(https://restaurant-io-eta.vercel.app/assets/imgs/BgImg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '500px',
  };

  return (
    <section className="relative my-10" style={sectionStyle}>
      <div className={`absolute inset-0 bg-black/60 flex items-center justify-center`}>
        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl font-semibold text-center mb-4 text-white">What Our Guests Say</h2>
          <p className="text-center text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover what our customers love about their dining experience! From mouth-watering dishes to exceptional service, hear their stories firsthand.
          </p>

          <div className="grid md:grid-cols-3 gap-8 px-4 py-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}  // Start off-screen
                animate={{ opacity: 1, x: 0 }}  // Slide into view
                exit={{ opacity: 0, x: 100 }}   // Exit animation
                transition={{ duration: 0.5, delay: index * 0.2 }} // Delay for sequential animations
                className={`flex flex-col bg-white relative rounded-2xl shadow-2xl p-6 ${index === activeIndex ? "block" : "hidden"}`} 
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full  absolute left-0 right-0 -top-10 mx-auto border-4 border-orange-500"
                />
                <h3 className="text-xl font-medium text-center text-gray-800 mt-6">{testimonial.name}</h3>
                <p className="text-sm text-center text-gray-500">{testimonial.position}</p>
                <div className="flex justify-center mt-2">
                  {/* Display rating stars */}
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-500 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-gray-600 text-center">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
