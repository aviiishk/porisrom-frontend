export default function WaveOverlay() {
  return (
    <video
      className="absolute inset-0 z-10 w-full h-full pointer-events-none"
      style={{ objectFit: 'cover' }}
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
    >
      <source src="/animations/wave.webm" type="video/webm" />
    </video>
  );
}
