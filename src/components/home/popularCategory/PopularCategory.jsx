import React from 'react';

const PopularCategory = (props) => {
    return (
        <div>
            <div className="card w-80  bg-green-50 shadow-md">
                <figure className="px-1 pt-4 pb-4">
                    <img src={props.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center pb-0">
                    <h2 className="card-title">{props.categoryName}</h2>
                </div>
            </div>
        </div>
    );
};

export default PopularCategory;