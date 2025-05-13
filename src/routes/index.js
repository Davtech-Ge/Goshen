import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Login from "../components/Login";
import Home from "../pages/Home";
import SignUp from "../components/SignUp";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        errorElement: <NotFound />,
        children: [
             {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            }
        ]
    }
])

export default router