import React from 'react';

const Cart = (props) => {
    const {name, price} = props.item;
    
    return (
        <div>
           <li className="list-group-item d-flex my-2 shadow justify-content-between bg-dark text-white border rounded">
                <span>{name}</span> <span> ${price}</span>
            </li>
        </div>
    );
};

export default Cart;