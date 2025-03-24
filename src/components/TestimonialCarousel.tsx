
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
    text: "Excellent service! Made the immigration process smooth and stress-free.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "Very professional and knowledgeable. Highly recommend their services.",
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
