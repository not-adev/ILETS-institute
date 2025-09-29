import gsap from "gsap";
import { use, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function FeatureCard({ icon, title, text, bg }) {
  const cardOverlayRef = useRef(null);

  useEffect(() => {

    gsap.to(cardOverlayRef.current, {
      xPercent: 100,
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardOverlayRef.current,
        start: 'top 40%',
        toggleActions: 'play none none reverse',
       
      
      },
    });


  }, [])


  return (
    <div
      className="relative rounded-xl shadow flex flex-col items-center text-center overflow-hidden min-h-[340px] h-[370px] group transition-all duration-300 hover:shadow-2xl hover:-translate-y-3"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/10 group-hover:bg-black/20 transition-all duration-300"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
        <h3 className="font-bold text-xl mb-3 text-white">{title}</h3>
        <p className="text-gray-200 font-medium">{text}</p>
      </div>
      <div ref={cardOverlayRef} className="absolute inset-0  bg-gray-50 z-10"></div>

    </div>
  );
}

export default FeatureCard;