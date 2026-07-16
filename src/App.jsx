import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar.jsx';
import Sidebar from './component/Sidebar/Sidebar.jsx';
import Player from './component/Player/Player.jsx';
import Home from './pages/Home/Home.jsx';
import Search from './pages/Search/Search.jsx';
import New from './pages/New/New.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from "./pages/SignUp.jsx";
import Layout from "./Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: "new",
        element: <New />
      },
      {
        path: "signin",
        element: <SignIn />
      },
      {
        path: "signup",
        element: <SignUp />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;