import { CircleCheckBig } from 'lucide-react';
import FoodImage from "../../assets/food_2.png"

export default function FoodFeatures() {
  const features = [
    "Fresh Ingredients",
    "Light and Healthy",
    "Rice and Noodles",
    "Aromatic Herbs and Spices",
    "Street Food Culture",
  ]

  return (
    <div className="py-12" id='features'>
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Key Features of <br /> Fresh Food
          </h1>

          <p className="text-gray-600">
            Fresh food is all about natural ingredients, rich flavors, and wholesome nutrition. Our dishes are crafted with
            farm-fresh produce, ensuring a healthy and delicious dining experience.
          </p>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-700 text-white">
                  <CircleCheckBig className='bg-green-400 text-xl rounded-full' />
                </span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="px-6 py-2.5 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition-colors">
            Read more
          </button>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden h-full w-full object-cover" style={{ backgroundImage: `url(${FoodImage})` }}>

          </div>
          <div className="rounded-2xl overflow-hidden h-full w-full object-cover" style={{ backgroundImage: `url(${FoodImage})` }}>

          </div>
        </div>
      </div>
    </div>
  )
}

