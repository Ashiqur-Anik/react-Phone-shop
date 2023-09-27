/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
    const { id, image, phone_name, brand_name, price } = phone;
    return (
        <div>
            <div className=" flex-col rounded-xl  bg-slate-200 shadow-xl p-4">
                <img className="h-72 mx-auto" src={image} alt="" />
                <p className="text-2xl font-semibold my-2">{brand_name}</p>

                <div className="flex justify-between text-xl items-center">
                    <p className=" text-lg md:text-xl font-semibold py-3">{phone_name}</p>
                    <p>{price}</p>
                </div>
                <div className="w-full text-center mt-4">
                    <Link to={`/phone/${id}`}>
                        <button className=" btn normal-case  hover:bg-pink-800 border-none bg-pink-600 text-white text-base">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default Phone;