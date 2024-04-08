import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Dialpad } from './components/Keypad/Dialpad.jsx';
import { MovieProvider } from './functions/filmContext.jsx';
import { ErrorBoundary } from './layouts/CustomErrorBoundary.jsx';
import { RootLayout } from './layouts/RootLayout.jsx';
import { About } from './components/About.jsx';

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
      </MovieProvider>
    </>
  );
}

export default App;
