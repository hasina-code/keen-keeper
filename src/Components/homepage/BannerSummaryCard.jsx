import React from 'react';

const BannerSummaryCards = () => {
  
  const summaryCards = [
    { id: 1, label: "Total Friends", value: "10" },
    { id: 2, label: "On Track", value: "3" },
    { id: 3, label: "Need Attention", value: "6" },
    { id: 4, label: "Interactions This Month", value: "12" },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto px-6 lg:px-20 -mt-10 relative z-10">
        
        {/* ৪টি কার্ডের গ্রিড */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {summaryCards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-all duration-300"
            >
              <h2 className="text-4xl font-black text-[#1A3C34] mb-2">
                {card.value}
              </h2>
              <p className="text-[#64748B] text-[11px] uppercase font-bold tracking-widest text-center">
                {card.label}
              </p>
            </div>
          ))}
        </div>

       
        <div className="max-w-7xl mx-auto pt-16">
           <hr className="border-t border-gray-200" />
        </div>

      </div>
    </div>
  );
};

export default BannerSummaryCards;