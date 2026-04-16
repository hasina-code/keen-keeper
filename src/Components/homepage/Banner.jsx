import { Plus } from "lucide-react";

const Banner = () => {


  return (
    <section className="bg-gray-50 pt-16 pb-12">
      <div className="container mx-auto px-6 lg:px-10 text-center">
     
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A3C34] mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Add Friend Button */}
        <button className="bg-[#244D3F] hover:bg-[#2D5A4E] text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 mx-auto transition-all shadow-md active:scale-95 mb-16">
          <Plus size={20} />
          Add a Friend
        </button>
      </div>
    </section>
  );
};

export default Banner;