import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function SmallLoader() {
  return (
    <div
      className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
      aria-hidden="true"
    >
      <DotLottieReact
        src="/animations/loading.lottie"
        loop
        autoplay
        style={{ width: '88px', height: '88px' }}
      />
    </div>
  );
}
