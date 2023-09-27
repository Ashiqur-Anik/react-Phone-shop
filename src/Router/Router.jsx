import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Favorites from "../Components/Favorites/Favorites";
import Login from "../Components/Login/Login";
import PhoneDetails from "../Components/Phones/PhoneDetails/PhoneDetails";

const CreateRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/Phones.json')
            },
            {
                path: "/Favorites",
                element: <Favorites></Favorites>
            },
            {
                path: "/Login",
                element: <Login></Login>
            },
            {
                path: "/phone/:id",
                element: <PhoneDetails></PhoneDetails>,
                loader: () => fetch('../Phones.json')
            }

        ]
    }
]);

export default CreateRouter;