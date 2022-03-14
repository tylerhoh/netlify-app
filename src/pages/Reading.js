import React from 'react';
import '../css/Reading.css'

const Reading=()=>{
    return(
        <div>
            <h1>Reading</h1>
            <p>Check out the books that I'm currently reading!</p>
            <span className='reading-subtitle'>In Progress</span>
            <div className="gallery">
            <figure className="gallery-item"><img className="thumbnail" alt="" src='https://images-na.ssl-images-amazon.com/images/I/51p+yiLxdfS._SX321_BO1,204,203,200_.jpg'>
            </img></figure>
            <figure className="gallery-item"><img className="thumbnail" alt="" src='https://images-na.ssl-images-amazon.com/images/I/61NdJMwAThS.jpg'>
            </img></figure>
            <figure className="gallery-item"><img className="thumbnail" alt="" src='https://images-na.ssl-images-amazon.com/images/I/81T-PQ9HFTL.jpg'></img></figure>
            </div>
            
        </div>
    )
}
export default Reading;