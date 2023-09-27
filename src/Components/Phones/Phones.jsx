/* eslint-disable react/prop-types */


import Phone from "./Phone/Phone";

const Phones = ({phones}) => {

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center py-5">Our Phones Collections</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                {
                    phones?.map(phone=> <Phone key={phones.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;