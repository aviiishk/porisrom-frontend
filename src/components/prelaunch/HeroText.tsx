export default function HeroText() {
  return (
    <div className="animate-fade-up-1 text-center px-6 space-y-1">

      {/* Line 1: Assam (white) + Freelance (yellow) */}
      <h1
        className="font-poppins font-extrabold leading-tight"
        style={{ fontSize: 'clamp(1.6rem, 3.8vw, 3rem)' }}
      >
        <span className="text-white">Assam </span>
        <span style={{ color: '#FFD700' }}>Freelance</span>
      </h1>

      {/* Line 2: Marketplace — bold italic */}
      <p
        className="font-poppins font-bold italic text-white leading-tight"
        style={{ fontSize: 'clamp(1.6rem, 3.8vw, 3rem)' }}
      >
        Marketplace
      </p>

      {/* Line 3: Tagline — light, off-white */}
      <p
        className="animate-fade-up-2 font-poppins font-light text-white/60 tracking-wide pt-2"
        style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)' }}
      >
        Work independently to earn more
      </p>

    </div>
  );
}
