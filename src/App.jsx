import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Dialpad } from './components/Keypad/Dialpad.jsx';
import { MovieProvider } from './functions/filmContext.jsx';
import { ErrorBoundary } from './layouts/CustomErrorBoundary.jsx';
import { RootLayout } from './layouts/RootLayout.jsx';
import { About } from './components/About.jsx';
// import videoBg from './assets/video/bg_web.mp4';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dialpad />} />
      <Route path="about" element={<About />} errorElement={<ErrorBoundary />} />
    </Route>,
  ),
);
function App() {
  return (
    <>
      <MovieProvider>
        <RouterProvider router={router} />
        <div className="background-video">
          <video
            src="https://res.cloudinary.com/dkju7zrcs/video/upload/v1728953866/240701_thecellular.net_VISUAL_BCKGRD_1920x1080_owamdu.mp4"
            autoPlay
            loop
            muted
          />
          <iframe
            title="movie"
            className="w-[100%] h-[100vh] border-0 "
            src="https://player.vimeo.com/video/416341071?h=b1ca326961?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&transparent=0&byline=0"
            loading="lazy"
            // autoPlay
            allow="autoplay"
          ></iframe>
        </div>
      </MovieProvider>
    </>
  );
}

export default App;
