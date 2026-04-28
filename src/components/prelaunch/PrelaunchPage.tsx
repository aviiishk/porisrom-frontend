import WaveOverlay from './WaveOverlay';
import HeroText from './HeroText';
import SmallLoader from './SmallLoader';

export default function PrelaunchPage() {
  return (
    <div className="animate-page-in relative w-full h-screen bg-black overflow-hidden">

      {/* z-10 — fullscreen wave, the main cinematic layer */}
      <WaveOverlay />

      {/* z-20 — text floats centered above the wave */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pb-[42vh] pointer-events-none">
        <HeroText />
      </div>

      {/* z-30 — medium loader anchored at bottom center */}
      <SmallLoader />

    </div>
  );
}
