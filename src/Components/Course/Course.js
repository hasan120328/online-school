import React from 'react';
import './Course.css'

const Course = (props) => {
    const {name, img, instructor, price} = props.course;
    const handleBtn = props.handleBtn;
    return (
        <div className="col-md-4 px-4 py-3 course-container">
            <div className="border border-info rounded">
                <img src={img} className="img-fluid" alt=""/>
                <div className="p-3 text-center">
                <h3>{name}</h3>
                <h6>instructor: {instructor}</h6>
                <h5>price: ${price}</h5>
                <button className="btn btn-sm btn-primary" onClick={(()=> handleBtn(props.course))}>Enroll now</button>
                </div>
                
            </div>
        </div>
    );
};

export default Course;