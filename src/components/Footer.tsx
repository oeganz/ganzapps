export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} GanzApps. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-brand transition">Services</a>
          <a href="#about" className="hover:text-brand transition">About</a>
          <a href="#contact" className="hover:text-brand transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
