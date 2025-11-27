import { Users, Globe, HeartHandshake } from "lucide-react";
import DealCard from '@/app/components/DealCard';
import DestinationGrid from '@/app/components/DestinationGrid';
import ReasonsSection from '@/app/components/ReasonsSection';
export default async function Home() {
  const dealsRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/deals`,
    { cache: 'no-store' }
  );
  const deals = await dealsRes.json();

  return (
    <div className="bg-purple-300 min-h-screen">
      {/* HERO SECTION - EXACT MATCH */}
      <section className="bg-purple-300 py-2 md:py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-3">
            {/* Left Side - Text */}
            <div className="max-w-9xl ">
              <p className="text-purple-700 text-3xl font-extrabold tracking-wider mb-4 uppercase">
                Black Friday travel deals
              </p>
              <h2 className="text-6xl md:text-3xl lg:text-6xl font-black text-purple-900 leading-tight">
                Our biggest sale of the year
               </h2>
            </div>

            {/* Right Side - Button */}
            <div className="absolute right-6 md:right-12 top-15 ">
              <button className="bg-transparent border-2 border-purple-700 text-purple-700  px-10  py-5 rounded-full text-xl font-bold hover:bg-purple-700 hover:text-white transition-all duration-300 whitespace-nowrap shadow-lg">
                Shop the deals →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 bg-purple-300">
        <div className="w-9xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8grid xl:grid-cols-5 gap-6">
            {deals.map((deal: any) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
            
          </div>
        </div>
      </section>
      

  
      <section className="py-12 items-start bg-linear-to-b bg-orange-50">
  <div className="max-w-7xl mx-auto px-6 ">
    {/* Main Heading */}
    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-purple-900 leading-tight mb-20">
      Small group adventures that<br className="hidden lg:block" />
      bring the world closer
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 max-w-6xl mx-auto">
      {/* Item 1 */}
      <div className="flex items-center justify-center md:justify-start gap-4">
        <Users className="w-15 h-15 text-black" />
        <p className="text-gray-700 text-lg leading-relaxed">
          Building community and redefining travel since <strong className="font-bold">1990</strong>.
        </p>
      </div>

      {/* Item 2 */}
      <div className="flex items-center justify-center md:justify-start gap-4">
        <Globe className="w-15 h-15 text-black" />
        <p className="text-gray-700 text-lg leading-relaxed">
          For every traveller. On every continent. Yup, even <strong className="font-bold">Antarctica</strong>.
        </p>
      </div>

      {/* Item 3 */}
      <div className="flex items-center justify-center md:justify-start gap-4">
        <HeartHandshake className="w-15 h-15 text-black" />
        <p className="text-gray-700 text-lg leading-relaxed">
          Uplifting communities everywhere we go. <strong className="font-bold">Period.</strong>
        </p>
      </div>
    </div>
  </div>
</section>
      <DestinationGrid />
      <ReasonsSection />
    </div>
  );
}