export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-40 flex items-center px-6 sm:px-10 md:px-16 h-16">
      {/* Logo wordmark */}
      <a
        href="/"
        className="flex items-center select-none"
        aria-label="Porisrom home"
      >
        <span
          className="text-white font-sans font-bold tracking-tight leading-none"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', letterSpacing: '-0.03em' }}
        >
          porisrom
        </span>
      </a>
    </nav>
  );
}
