import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard/FavoritesCard";


const Favorites = () => {
    const [favorites, setFavorites] = useState();
    const [noFound, setNofound] = useState(false);

    useEffect(() => {
        const favoritesItems = JSON.parse(localStorage.getItem('favorites'));

        if (favoritesItems) {
            setFavorites(favoritesItems);
        }
        else {
            setNofound('No Data Found');
        }
    }, [])


    return (

        <div className="">
            <p className="text-xl flex justify-center items-center">{noFound}</p>
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    favorites?.map(phone => <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)
                }
            </div>
        </div>
    );


};

export default Favorites;