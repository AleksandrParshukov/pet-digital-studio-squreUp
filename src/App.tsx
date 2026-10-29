import { RouterProvider } from 'react-router';
import './App.scss';
import { router_config } from './router/router';

function App() {
  return <RouterProvider router={router_config} />;
}

export default App;
