import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import Home from './components/Home/Home';
import Project from './components/project/Project';
import AboutPage from './components/AboutPage/AboutPage';
import Contact from './components/Contact/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:'project',
        element:<Project/>
      },
      {
        path:'about',
        element:<AboutPage/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
