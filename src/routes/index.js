import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Login from "../components/Login";
import Home from "../pages/Home";
import SignUp from "../components/SignUp";
import Dashboard from "../pages/Dashboard";
import Audio from "../pages/Audio";
import Users from "../pages/Users";
import AboutUs from "../pages/AboutUs";
import Mission from "../pages/Mission";
import Belief from "../pages/Belief";

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
                element: <Dashboard />,
                children: [
                    {
                        path: 'audio',
                        element: <Audio />,
                        index: true,
                    },
                    {
                        path: 'users',
                        element: <Users />
                    }
                ]
            },
            {
                path: "about",
                children:  [
                    {
                        path: "history",
                        element: <AboutUs />
                    },
                    {
                        path: "mission",
                        element: <Mission />
                    },
                    {
                        path: "belief",
                        element: <Belief />
                    },
                ]
            }
        ]
    }
])

export default router