import { MapPin, Calendar } from "lucide-react";

interface Deal {
  title: string;
  type: string;        // "MARINE" | "ACTIVE" etc.
  days: number;
  route: string;
  oldPrice: number;
  newPrice: number;
  date: string;
  image: string;
}

export default function DealCard({ deal }: { deal: Deal }) {
  const formatPrice = (price?: number | string | null): string | null => {
    if (!price) return null;

    // If it's already a number
    if (typeof price === "number") {
      return price.toLocaleString("en-US");
    }

    // If it's a string like "$17,999" or "17999"
    const num = parseFloat(price.toString().replace(/[^0-9.-]/g, ""));
    if (isNaN(num)) return null;

    return num.toLocaleString("en-US");
  };
  const oldPrice = formatPrice(deal.oldPrice);
  const newPrice = formatPrice(deal.newPrice);
  return (
    <div className="group bg-purple-300 rounded-xl overflow-hidden transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-purple-300">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Small type tag in bottom-left (MARINE, ACTIVE, etc.) */}
        <div className="absolute bottom-4 left-4">
          {/* <span className="text-white text-xs font-bold uppercase tracking-wider bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
            {deal.type}
          </span> */}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {deal.title}
        </h3>

        {/* Days + Route */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{deal.days} 13 days</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>Ushuaia to Ushuaia</span>
          </div>
        </div>

        {/* Price Row */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base">
  <span className="text-gray-500">From</span>

  {/* Purani price → choti, cut hui */}
  {
    <span className="text-sm text-gray-500 line-through">
      ${newPrice}
    </span>
  }

  {/* Nayi price → badi, bold, purple */}
  <span className="text-xl font-medium text-black">
    ${oldPrice}
  </span>

 
  <span className="text-purple-700 font-bold">•</span>
  <span className="text-gray-600 text-sm"> {deal.date}</span>
</div>
        {/* View tour link */}
        <div className="pt-2">
          <button className="text-purple-700 font-bold text-base hover:text-purple-800 transition-colors flex items-center gap-1 group">
            View tour
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function formatPrice(oldPrice: number) {
  throw new Error("Function not implemented.");
}
