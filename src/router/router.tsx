import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/home/HomePage';
import { AboutPage } from '../pages/about/AboutPage';
import { ServicesPage } from '@/pages/services/ServicesPage';
import { WorksPage } from '@/pages/works/WorksPage';
import { ProcessPage } from '@/pages/process/ProcessPage';
import { CareersPage } from '@/pages/CareersPage/CareersPage';

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
        path: 'process',
        element: <ProcessPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'careers',
        element: <CareersPage />,
      },
    ],
  },
]);