import React, { useState, useEffect } from 'react';
import data from '../data/sport-poll.json';


function Card() {    
    const [currentData, setCurrentData] = useState(null);

    // Function to select a random item from the JSON data
    const getRandomData = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
    };

    // Set random data when the component mounts
    useEffect(() => {
        setCurrentData(getRandomData());
    }, []);

    // Handle button click to refresh data
    const handleButtonClick = () => {
        setCurrentData(getRandomData());
    };

    if (!currentData) return <div>Loading...</div>;

  return (
    <div className='bg-silver'>
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow"
                    style={{ width: '400px', height: '500px' }}>
                
                <div className="card-header text-center">                
                    <img 
                        src={`/img/${currentData.sport.toLowerCase()}.png`} 
                        alt={currentData.sport} 
                        style={{ width: 'auto', height: 'auto', maxHeight: '150px', marginTop: '10px' }}
                    />
                </div>
                
                <div className="card-body text-center" style={{ flexGrow: 1 }}>
                    <p className="card-text">{currentData.group}</p>
                    <h5 className="card-title">{currentData.name}</h5>
                    <h6 className="card-subtitle mb-4 text-body-secondary">{currentData.country}</h6>
                    <p className="card-text mb-5">{currentData.state}</p>
                </div>

                {/* Button Container */}
                <div className="button-group d-flex justify-content-around mt-auto mb-3">
                    <a href="#" className="btn btn-outline-secondary custom-hover-success" onClick={handleButtonClick}>
                        WIN HOME
                    </a>
                    <a href="#" className="btn btn-outline-secondary custom-hover-success" onClick={handleButtonClick}>
                        DRAW
                    </a>
                    <a href="#" className="btn btn-outline-secondary custom-hover-success" onClick={handleButtonClick}>
                        WIN AWAY
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
