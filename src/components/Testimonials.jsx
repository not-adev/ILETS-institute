function Testimonials() {
  const images = [
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
  ];

  const testimonials = [
    {
      text: '"The AI feedback was spot on! I improved my speaking score in just weeks."',
      name: "- Priya S.",
      img: images[0],
    },
    {
      text: '"Mock tests felt just like the real exam. Highly recommended!"',
      name: "- Ahmed K.",
      img: images[1],
    },
    {
      text: '"Great materials and supportive teachers. I got Band 8!"',
      name: "- Lin W.",
      img: images[2],
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-blue-50 to-blue-100">
      <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-12">What Our Students Say</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl shadow-xl w-[350px] min-h-[260px] flex flex-col items-center bg-white p-8 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-16 h-16 rounded-full border-4 border-blue-100 shadow-lg object-cover mb-4"
            />
            <p className="text-lg text-blue-900 font-semibold mb-4 text-center leading-relaxed">{t.text}</p>
            <span className="font-bold text-blue-700 text-base">{t.name}</span>
            <div className="absolute top-4 right-4 text-blue-200 text-4xl opacity-30 pointer-events-none select-none">“</div>
            <div className="absolute bottom-4 left-4 text-blue-200 text-4xl opacity-30 pointer-events-none select-none">”</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;