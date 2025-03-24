
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "I cannot thank Ramjanum C Attorney enough for their incredible support in helping my mom secure her Spousal Visa. The process was incredibly hectic, as her Spousal Visa expired during COVID, and due to a lack of knowledge, we mistakenly applied for permanent residency before the 5-year requirement was met. As a result, my mom was banned from entering South Africa. But Ramjanum C Attorney came to our rescue, guiding us through the legal complexities and helping us fight against Home Affairs in court. She also worked tirelessly to have the border ban at Bait Bridge South African side lifted. Thanks to her expertise and dedication, everything was handled seamlessly, and my mom has now received a two-year Spousal Visa. We are now in the process of gathering the necessary documents to apply for her permanent residency in time. Ramjanum C Attorney Associates truly are the best, and I would highly recommend them to anyone in need of immigration assistance. Their professionalism and care made all the difference!",
    rating: 5
  },
  {
    id: 2,
    name: "Sijabulison Komo",
    text: "She provided exceptional assistance with my visa application process, helping me change my status seamlessly. Thanks to her expertise, my visa was approved within just seven days, and I collected it in three weeks. Her kindness, professionalism, and well-organized approach made the entire experience stress-free. She ensured I understood every step of the process, leaving me feeling confident and at ease. I highly recommend her services to anyone seeking efficient and reliable legal assistance.",
    rating: 5
  },
  {
    id: 3,
    name: "David Smith",
    text: "Great experience working with this firm. They really know their stuff!",
    rating: 4
  }
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-primary fill-primary" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="min-h-[300px] flex items-center justify-center">
          <div className="text-center px-8 md:px-16">
            <p className="text-lg md:text-xl mb-4">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex justify-center mb-2">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
            <p className="font-semibold text-gray-800">
              {testimonials[currentIndex].name}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
