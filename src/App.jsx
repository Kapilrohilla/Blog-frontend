import './App.css';

// Component
import NavBar from './component/NavBar/NavBar';
import Footer from './component/Footer/Footer';

// pages
import Homepage from "./pages/Homepage/Homepage";
import Jobs from "./pages/Jobs/Jobs";
import Upcoming from "./pages/Upcoming/Upcoming";
import News from "./pages/News/News";
import Blogs from './pages/Blogs/Blogs';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>);
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/upcoming",
        element: <Upcoming />
      },
      {
        path: "/jobs",
        element: <Jobs />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        basename: "/"
      }
      // {
      //   path: "/blogs/:id",
      //   element: <Blog />
      // }
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
