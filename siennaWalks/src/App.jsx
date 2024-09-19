import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer'; 
import Home from './pages/Home/Home'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
