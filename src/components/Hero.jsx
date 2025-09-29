import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP)

const header = "Achieve Your Dream IELTS Band";

function Hero() {
    const headerRef = useRef(null);
    const subTextRef = useRef(null);
    
    

    useGSAP(() => {
        // Water effect CSS
        const style = document.createElement("style");
        style.innerHTML = `
      .water-effect {
        display: inline-block;
        position: relative;
        transition: transform 0.2s;
      }
      .water-effect:hover {
        animation: wave 0.6s linear;
      }
      @keyframes wave {
        0% { transform: scale(1) translateY(0); }
        20% { transform: scale(1.2,0.8) translateY(-4px); }
        40% { transform: scale(0.8,1.2) translateY(4px); }
        60% { transform: scale(1.1,0.9) translateY(-2px);}
        80% { transform: scale(0.9,1.1) translateY(2px);}
        100% { transform: scale(1) translateY(0);}
      }
    `;
        document.head.appendChild(style);

        gsap.from(headerRef.current, {
            x: -200,
            opacity: 0,
            duration: 2,
            delay: 1,
            ease: "power3.out",
        });
        gsap.from(subTextRef.current, {
           
            opacity: 0,
            duration: 2,
            delay: 1.5,
          
            ease: "power3.out",
        });

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center bg-black/10"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="relative z-10 text-center sm:w-[60%] mx-2 py-16">
                <h1
                    className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg"
                    ref={headerRef}
                >
                    {header.split("").map((char, idx) => (
                        <span key={idx} className="water-effect">
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>
                <p
                    className="text-xl md:text-2xl text-gray-100 mb-8 font-medium drop-shadow transition-transform duration-300 h"
                    ref={subTextRef}
                >
                    Expert guidance, AI-powered tools, and real practice for your IELTS
                    success.
                </p>
                <button className="bg-blue-900 text-white px-8 py-3 rounded hover:bg-blue-700  font-semibold text-lg shadow transition-transform duration-300 hover:scale-110">
                    Get Started
                </button>
            </div>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/45"></div>
        </section>
    );
}

export default Hero;