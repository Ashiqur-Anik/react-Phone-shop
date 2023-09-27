/* eslint-disable react/prop-types */

const FavoritesCard = ({ phone }) => {
    console.log(phone)
    const {image,brand_name,phone_name,price} = phone;
    return (
        <div className="">
           <div className=" flex-col rounded-xl  bg-slate-200 shadow-xl p-4">
                <img className="h-72 mx-auto" src={image} alt="" />
                <p className="text-2xl font-semibold my-2">{brand_name}</p>

                <div className="flex justify-between text-xl items-center">
                    <p className=" text-lg md:text-xl font-semibold py-3">{phone_name}</p>
                    <p>{price}</p>
                </div>
                <div className="w-full text-center mt-4">
                   <button>jj</button>
                </div>
            </div>
        </div>
    );
};

export default FavoritesCard;