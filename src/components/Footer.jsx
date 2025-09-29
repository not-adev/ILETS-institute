function Footer() {
  return (
    <footer id="contact" className="bg-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-6">
        {/* Left column: Links */}
        <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <a href="#features" className="underline mb-2 hover:text-blue-200">Features</a>
          <a href="#testimonials" className="underline mb-2 hover:text-blue-200">Testimonials</a>
          <a href="#resources" className="underline mb-2 hover:text-blue-200">Resources</a>
        </div>
        {/* Center: Copyright */}
        <div className="mb-8 md:mb-0 text-center">
          <div className="text-2xl font-bold mb-2">ILETSS Institute</div>
          <div className="mb-2">© 2025 ILETSS Institute</div>
        </div>
        {/* Right column: Contact */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="font-bold text-lg mb-4">Contact</h4>
          <a href="mailto:info@iletss.com" className="underline mb-2 hover:text-blue-200">info@iletss.com</a>
          <div className="mb-2">+1 234 567 890</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;