import { SHOW_PRELAUNCH } from './config/featureFlags';
import PrelaunchPage from './components/prelaunch/PrelaunchPage';

function MainApp() {
  return (
    <div className="h-screen w-full bg-gray-950 flex items-center justify-center">
      <h1 className="text-white text-2xl font-semibold">Main Application</h1>
    </div>
  );
}

export default function App() {
  return SHOW_PRELAUNCH ? <PrelaunchPage /> : <MainApp />;
}
