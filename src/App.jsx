import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Dialpad } from './components/Keypad/Dialpad.jsx';
import { MovieProvider } from './functions/filmContext.jsx';
import { ErrorBoundary } from './layouts/CustomErrorBoundary.jsx';
import { RootLayout } from './layouts/RootLayout.jsx';
import { About } from './components/About.jsx';
import { mobileVideo, desktopVideo } from './variables/video.js';
import { useIsMobile } from './functions/IsMobile.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dialpad />} />
      <Route path="about" element={<About />} errorElement={<ErrorBoundary />} />
    </Route>,
  ),
);
function App() {
  const isMobile = useIsMobile();
  return (
    <>
      <MovieProvider>
        <RouterProvider router={router} />

        <div className="background-video">
          <video
            src={isMobile ? mobileVideo : desktopVideo}
            autoPlay
            loop
            playsInline
            muted
            preload="auto"
            controls={false}
          />
        </div>
        <div className="video-overlay"></div>
      </MovieProvider>
    </>
  );
}

export default App;
