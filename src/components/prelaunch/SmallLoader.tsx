import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function SmallLoader() {
  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
      aria-hidden="true"
    >
      <DotLottieReact
        src="/animations/loading.lottie"
        loop
        autoplay
        style={{ width: '56px', height: '56px' }}
      />
    </div>
  );
}
