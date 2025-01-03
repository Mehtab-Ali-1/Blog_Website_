import React from "react";

export default function WellComeHome() {
  return (
    <main>
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-[bounce-fade-in_1.5s_ease-out] motion-reduce:animate-none drop-shadow-2xl">
              Welcome to My Website
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-[slide-up-fade_1s_ease-out_0.5s] motion-reduce:animate-none opacity-0 [animation-fill-mode:forwards]">
              Creating amazing digital experiences
            </p>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl animate-[pop-up_0.8s_cubic-bezier(0.18,0.89,0.32,1.28)_0.8s] motion-reduce:animate-none opacity-0 [animation-fill-mode:forwards]">
              Get Started
            </button>
          </div>

          <div className="absolute -bottom-4 left-0 w-full">
            <svg
              className="animate-[float_3s_ease-in-out_infinite]"
              viewBox="0 0 1440 320"
            >
              <path
                fill="url(#gradient)"
                fillOpacity="0.6"
                d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,154.7C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              >
                <animate
                  attributeName="d"
                  dur="5s"
                  repeatCount="indefinite"
                  values="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,154.7C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                         M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,80C672,75,768,117,864,122.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </path>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <style jsx>{`
          @keyframes bounce-fade-in {
            0% {
              opacity: 0;
              transform: translateY(-50px);
            }
            50% {
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slide-up-fade {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pop-up {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            80% {
              transform: scale(1.1);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </section>
    </main>
  );
}
