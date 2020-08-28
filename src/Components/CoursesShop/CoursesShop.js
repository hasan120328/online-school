import React, { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import fakeData from '../fakeData';
import './CoursesShop.css'

const CoursesShop = () => {
    const [courses] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const handleBtn = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    const totalPrice = cart.reduce((total, current) => total + current.price, 0);
    console.log(totalPrice);

    return (
        <div className="row">
            <div className="col-md-9 row border-right">
                {courses.map(course => <Course course={course} key={course.id} handleBtn={handleBtn}></Course>)}
            </div>
            <div className="col-md-3 p-5 text-center">
                <div className="border border-info rounded py-3 px-1 bg-dark text-white" >
                <h1>Order summary:</h1>
                <h3>total item: {cart.length}</h3>
                {cart.map(item => <Cart item={item}> </Cart>)}
                <button className="btn btn-primary"><h5>total price: ${totalPrice}</h5></button>
                </div>
                </div>
        </div>
    );
};

export default CoursesShop;