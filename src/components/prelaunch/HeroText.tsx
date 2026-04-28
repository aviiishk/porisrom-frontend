export default function HeroText() {
  return (
    <div className="text-center px-6">
      <h1
        className={[
          'animate-fade-up-1',
          'font-display font-black',
          'text-[clamp(2.8rem,7vw,6rem)]',
          'text-white leading-none tracking-tight',
          'mb-4',
        ].join(' ')}
      >
        Accelerate
      </h1>

      <p
        className={[
          'animate-fade-up-2',
          'text-[clamp(0.95rem,2vw,1.35rem)]',
          'text-white/60 font-light tracking-wide',
          'leading-snug',
        ].join(' ')}
      >
        your work, and earn more
        <br />
        <span className="text-yellow-400 font-medium italic">
          &mdash;independently
        </span>
      </p>
    </div>
  );
}
