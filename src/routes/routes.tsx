import App from '@/App';
import AdminLayout from '@/components/Layout/AdminLayout';
import About from '@/pages/About';
import Home from '@/pages/Home';
import AddService from '@/pages/admin/AddService';
import Dashboard from '@/pages/admin/Dashboard';
import ServiceList from '@/pages/admin/ServiceList';
import { Navigate, createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/admin/dashboard' />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'service-list',
        element: <ServiceList />,
      },
      {
        path: 'add-service',
        element: <AddService />,
      },
    ],
  },
]);
