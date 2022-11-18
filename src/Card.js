import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="card">
                <div className="card__img-container">
                    <img src="https://robohash.org/test" alt="robots" />
                </div>
                <div className='card__info'>
                    <h2>John Doe</h2>
                    <p>johndoe@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Card;