import { useLocation, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumb from './Breadcrumb';
import { ChevronLast, ChevronLeft } from 'lucide-react';

export default function Result() {
  const location = useLocation();
  const { cycles = 1 } = location.state || {};

  return (
    <div className="min-h-screen bg-[#303030] w-full overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <div className="max-w-[1280px] mx-auto px-4 py-8">
          <div className="hidden md:block text-white">
            <Breadcrumb />
          </div>

          <div className="md:hidden mb-6">
            <Link to="/calculator" className="flex items-center gap-2 text-white">
              <ChevronLeft className="w-4 h-4" />
              <span>IVF Success Rate Calculator</span>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Section */}
            <div className="w-full lg:w-[500px] flex flex-col items-center lg:items-start space-y-12">
              {/* Title with Line */}
              <div className="relative flex items-center">
                <div className="absolute left-[-130px] top-[10px]">
                  <div className="relative lg:mt-2 mt-1">
                    <div className="w-[95px] border-b-2 border-[#F48265] ml-[-15px] pt-1"></div>
                    <div className="absolute right-[-10px] top-[-8px] w-[25px] h-[25px] rounded-full bg-[#F48265]"></div>
                  </div>
                </div>
                <h1 className="lg:text-3xl ml-[-20px] pt-1 text-white font-medium">
                  Your estimated IVF Success Rate is
                </h1>
              </div>

              {/* Progress Circle */}
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 264 264">
                  <circle
                    cx="132"
                    cy="132"
                    r="120"
                    className="stroke-green-400/20"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="132"
                    cy="132"
                    r="120"
                    className="stroke-green-400"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 120}
                    strokeDashoffset={(2 * Math.PI * 120) * (1 - 0.64)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-bold text-white">64%</span>
                </div>
              </div>

              <p className="text-white text-xl">
                With {cycles} IVF Cycle{cycles > 1 ? 's' : ''}
              </p>
            </div>

            {/* Right Section */}
            <div className="relative w-full lg:w-[650px] h-[400px] md:h-[600px]">
              {/* Green Glow Effect */}
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px]"
                style={{
                  background: 'radial-gradient(50% 50% at 50% 50%, rgba(34, 197, 94, 0.35) 0%, rgba(34, 197, 94, 0) 100%)',
                  filter: 'blur(60px)',
                  transform: 'translate(5%, -50%)',
                }}
              ></div>

              {/* Image */}
              <div className="relative z-10 w-full h-full rounded-lg overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3083/cfdf/a3342bdeb14d22fce3f84a7131648fe0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m3rcPSzyYXFQ3av1UzjVwX~ywz9ut1Jmpzmx6Z~RWwUd~~r9UxNnyNl4R9JldCD4zDCW7Q2IeQvOvnDs6u4pyH3CTfoUnO5v492UL1iuyJt3I3zHG387QUApgjGytHwEVS51em2fW5HQXigaiOLgI6ldEf-XgFWD-AZPB6squ7fJ1sPU5SEgs04SJJgSlkJzl1Ka-Ed1OsDBqFXjBxAf7zZ~60XEh1fn~sDWw58OaB~z-10gRcakHkeVapNSDVELmye3t0JjF7zlsu5d9JV7LvBxi6ry6D-l1bYi0r8uWHVFccwd~tuvdXccvuZZNeoqnR6oiSRnQkxLHAzIzIkmVQ__"
                  alt="Success Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile Consultation Button with Glass Effect */}
          <div className="md:hidden mt-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white opacity-30 rounded-lg"></div> {/* Glass effect */}
              <button className="relative z-10 bg-[#E45D61] text-white px-6 py-3 rounded-md flex items-center gap-2">
                Start private consultation
                <ChevronLast className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
