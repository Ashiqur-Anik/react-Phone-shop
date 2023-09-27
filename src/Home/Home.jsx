import { useLoaderData } from "react-router-dom";
import Baner from "./Baner/Baner";
import Phones from "../Components/Phones/Phones";

const   Home = () => {
    const phones = useLoaderData();
    
    return (
        <div className="max-w-6xl mx-auto">
            <Baner></Baner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;