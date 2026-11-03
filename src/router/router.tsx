import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/home/HomePage';
import { AboutPage } from '../pages/about/AboutPage';
import { ServicesPage } from '@/pages/services/ServicesPage';
import { WorksPage } from '@/pages/works/WorksPage';

export const router_config = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'works',
        element: <WorksPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);