import React from 'react';

const BannerSummaryCards = () => {
  
 const summaryCards = [
    { id: 1, label: "Total Friends", value: "10" },
    { id: 2, label: "On Track", value: "3" },
    { id: 3, label: "Need Attention", value: "6" },
    { id: 4, label: "Interactions This Month", value: "12" },
  ];

  return (
    <div className="bg-[#F8FAFC] pb-10">
     
      
      <div className="container mx-auto px-6 lg:px-20 -mt-10 relative z-10">
   
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto mb-16">
          {summaryCards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white p-8 rounded-[32px] border border-gray-50 shadow-sm flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-4xl font-black text-[#1A3C34] mb-1">
                {card.value}
              </h2>
              <p className="text-gray-400 text-[10px] uppercase font-black tracking-[0.1em] text-center">
                {card.label}
              </p>
            </div>
          ))}
        </div>

    
     
      </div>
    </div>
  );
};

export default BannerSummaryCards;