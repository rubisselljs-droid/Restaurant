import React from 'react';

export default function CartAtent({
  name = "Risotto al Tartufo",
  image = "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop",
  price = "$28.00",
  description = "Creamy Arborio rice with black truffle, parmesan crisp, and wild mushroom glaze."
}) {
  return (
    <div className="group relative w-80 rounded-2xl bg-[#1a1a1a] shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/20 hover:-translate-y-1 mx-auto border border-white/5">
      {/* Image Section with Overlay */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] via-transparent to-transparent opacity-90" />
        
        {/* Floating Price Badge */}
        <div className="absolute top-4 right-4 overflow-hidden rounded-full bg-white/10 px-3 py-1 backdrop-blur-md border border-white/20 shadow-lg">
           <span className="text-amber-400 font-serif font-bold tracking-wider">{price}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative px-6 pb-6 mt-[-20px]">
        <div className="mb-4">
            <h3 className="text-xl font-medium text-white font-serif tracking-wide mb-2 group-hover:text-amber-400 transition-colors">
            {name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {description}
            </p>
        </div>

        {/* Animated Button & Actions */}
        <div className="flex items-center justify-between pt-2">
            <button className="relative w-full overflow-hidden rounded-lg bg-white text-black px-4 py-3 transition-all duration-300 hover:bg-amber-400 hover:text-black group-hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] active:scale-95">
                <div className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide text-sm uppercase">
                    <span>Add to Cart</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>
            </button>
        </div>
      </div>
    </div>
  );
}
