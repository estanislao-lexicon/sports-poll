import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-#dee1e6">
        <div className="card-container">
            <TransitionGroup>
                <CSSTransition
                    key={currentData.name} // Use a unique key for each item to trigger animation
                    timeout={500}
                    classNames={{
                        enter: 'slide-in-right-enter',
                        enterActive: 'slide-in-right-enter-active',
                        exit: 'slide-out-left-exit',
                        exitActive: 'slide-out-left-exit-active',
                    }}
                >
                    <div className="card shadow bg-light text-center">
                        <div className="card-header">
                            <img
                                src={`/img/${currentData.sport.toLowerCase()}.png`}
                                alt={currentData.sport}
                                style={{ maxHeight: '150px', marginTop: '10px' }}
                            />
                        </div>

                        <div className="card-body" style={{ flexGrow: 1 }}>
                            <p className="card-text">{currentData.sport} - {currentData.group}</p>
                            <h5 className="card-title">{currentData.name}</h5>
                            <h6 className="card-subtitle mb-4 text-muted">{currentData.country}</h6>
                            <p className="card-text mb-5">{currentData.state}</p>
                        </div>

                        {/* Button Group */}
                        <div className="button-group d-flex justify-content-around mt-auto mb-3">
                            <button className="btn btn-outline-secondary custom-hover-success" onClick={handleButtonClick}>
                                HOME WIN 
                            </button>
                            <button className="btn btn-outline-secondary custom-hover-success" onClick={handleButtonClick}>
                                DRAW
                            </button>
                            <button className="btn btn-outline-secondary custom-hover-success" onClick={handleButtonClick}>
                                AWAYS WIN
                            </button>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    </div>
  );
}

export default Card;
