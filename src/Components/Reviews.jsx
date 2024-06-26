import React, { useState, useEffect } from 'react';


const reviews = [
  {
    id: 1,
    name: 'John Doe',
    location: 'New York, NY',
    rating: 5,
    title: 'Excellent Service',
    content: 'Dr. Smith and his team provided excellent care during my visit. The clinic is clean, and the staff is very friendly. Highly recommended!',
  },
  {
    id: 2,
    name: 'Jane Roe',
    location: 'Los Angeles, CA',
    rating: 5,
    title: 'Highly Professional',
    content: 'I had a great experience at this dental clinic. The staff was professional and the treatment was painless. Will definitely come back!',
  },
  {
    id: 3,
    name: 'Sam Wilson',
    location: 'Chicago, IL',
    rating: 4,
    title: 'Good Experience',
    content: 'Overall, a good experience. The waiting time was a bit long, but the quality of care made up for it. Dr. Smith is very knowledgeable.',
  },
  {
    id: 4,
    name: 'Lisa Brown',
    location: 'Houston, TX',
    rating: 5,
    title: 'Best Dental Clinic',
    content: 'This is the best dental clinic I have ever visited. The technology is up-to-date and the staff is incredibly caring.',
  },
  {
    id: 5,
    name: 'Mark Green',
    location: 'Phoenix, AZ',
    rating: 4,
    title: 'Great Care',
    content: 'The care provided was great. The clinic environment is calming and the staff made me feel comfortable throughout the visit.',
  },
  {
    id: 6,
    name: 'Anna Black',
    location: 'Miami, FL',
    rating: 5,
    title: 'Fantastic Service',
    content: 'Dr. Smith is the best dentist I have ever been to. The service was fantastic and the clinic was very clean.',
  },
];

const Reviews = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleReviews(1);
      } else if (window.innerWidth < 1024) {
        setVisibleReviews(2);
      } else {
        setVisibleReviews(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + visibleReviews) % reviews.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - visibleReviews + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='p-8 '>
      <h1 className="text-center font-semibold text-3xl lg:text-5xl text-white mb-10 mt-10">What our patients tell about us?</h1>
      <div className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-4 py-10">
            <button onClick={handlePrev} className="text-2xl text-white font-bold">&#8592;</button>
            <div className="flex space-x-4 overflow-hidden">
              {reviews.slice(startIndex, startIndex + visibleReviews).map((review) => (
                <div key={review.id} className="p-4 border rounded-lg shadow-md w-64 sm:w-80">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                        <span className="text-xl font-bold">{review.name[0]}</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{review.name}</div>
                      <div className="text-sm text-gray-200">{review.location}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {Array(review.rating).fill().map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.906c.969 0 1.371 1.24.588 1.81l-3.977 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.977-2.89a1 1 0 00-1.176 0l-3.977 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.084 10.1c-.783-.57-.381-1.81.588-1.81h4.906a1 1 0 00.95-.69L9.049 2.927z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 font-semibold text-white">{review.title}</div>
                    <div className="text-white">{review.content}</div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleNext} className="text-2xl text-white font-bold">&#8594;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
