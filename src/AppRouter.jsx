import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Logement from "./pages/Logement/Logement";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/logement/:id",
                element: <Logement />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
            
        ],
    },
]);

function AppRouter() {
    return <RouterProvider router={router} />;
}
export default AppRouter