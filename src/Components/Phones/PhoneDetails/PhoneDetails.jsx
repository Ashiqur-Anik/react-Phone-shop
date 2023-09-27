/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { TbSquareRoundedArrowRight } from 'react-icons/Tb';
import swal from 'sweetalert';

const PhoneDetails = () => {

    const [phone, setPhone] = useState([]);
    const { id } = useParams();
    const phones = useLoaderData();
    useEffect(() => {
        const findPhone = phones?.find((phone) => phone.id == id);
        setPhone(findPhone);
    }, []);

    const AddToFavorites = () => {
        const addFavoritesItem = [];

        const favoritesItems = JSON.parse(localStorage.getItem('favorites'));

        if (!favoritesItems) {
            addFavoritesItem.push(phone);
            localStorage.setItem("favorites", JSON.stringify(addFavoritesItem));
            swal("Good job!", "Product Add Successfully", "success");
        }
        else {
            const isExits = favoritesItems.find(phone => phone.id == id);
            if (!isExits) {
                addFavoritesItem.push(...favoritesItems, phone);
                localStorage.setItem('favorites', JSON.stringify(addFavoritesItem));
                swal("Good job!", "You clicked the button!", "success");
            }
            else{
                swal("Error", "No Duplicate", "success");
            }
 

        }

    }

    return (
        <div>
            <h1 className="text-4xl text-center p-20 bg-teal-200">Phone Details</h1>
            <div className=" w-10/12 md:w-8/12 mx-auto">
                <div className="md:flex items-center justify-center p-1 bg-slate-100 gap-14 ">
                    <div>
                        <img className="w-96 mx-auto" src={phone.image} alt="" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold">{phone.brand_name}</h2>
                        <p className="text-2xl py-5">{phone.phone_name}</p>
                        <button onClick={AddToFavorites} className="btn normal-case text-base hover:bg-pink-800 border-none bg-pink-600 text-white
                        ">Add To Favorites  <TbSquareRoundedArrowRight></TbSquareRoundedArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;