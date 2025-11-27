import { UserCheck, Users, Binoculars, HeartHandshake, Home, Leaf } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-16 h-16 mx-auto text-purple-600" />,
  Users: <Users className="w-16 h-16 mx-auto text-purple-600" />,
  Binoculars: <Binoculars className="w-16 h-16 mx-auto text-purple-600" />,
  HeartHandshake: <HeartHandshake className="w-16 h-16 mx-auto text-purple-600" />,
  Home: <Home className="w-16 h-16 mx-auto text-purple-600" />,
  Leaf: <Leaf className="w-16 h-16 mx-auto text-purple-600" />
};

interface Reason {
  title: string;
  desc: string;
  icon: string;
}

export default async function ReasonsSection() {
  const res = await fetch('http://localhost:3000/api/reasons', { 
    cache: 'no-store' 
  });
  const reasons: Reason[] = await res.json();

  return (
    <section className="py-24 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-left mb-10">
          <p className="text-purple-700 text-lg font-extrabold mb-2">Why travel with G Adventures</p>
          <h2 className="text-5xl font-black text-purple-900 leading-tight">
            Six reasons you’ll love us
          </h2>
        </div>

        {/* 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-purple-200 rounded-2xl p-8 text-center  transition-all duration-300 border border-purple-100"
            >
              <div className="mb-6">
                {iconMap[reason.icon] || <UserCheck className="w-16 h-16 mx-auto text-purple-600" />}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-purple-900 mb-4 leading-tight">
                {reason.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-right mt-12">
          <button className="inline-flex items-center gap-2 bg-white border-2 border-purple-700 text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-purple-700 hover:text-white transition-all shadow-lg">
            Learn more →
          </button>
        </div>
      </div>
    </section>
  );
}