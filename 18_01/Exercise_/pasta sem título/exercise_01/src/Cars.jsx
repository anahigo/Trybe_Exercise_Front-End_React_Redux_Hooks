import React from 'react'; 
import { CarsContext } from './App'; 
import carBlue from './images/carBlue.jpeg'; 
import carRed from './images/carRed.jpeg'; 
import carYellow from './images/carYellow.jpeg';

function Cars({ redCar, blueCar, yellowCar, moveCar }) { 
  return (
    <CarsContext.Consumer>
      { ({ red: redCar, blue: blueCar, yellow: yellowCar, moveCar }) => (
        <div>
          <div>
            <img
              className={redCar ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button
              onClick={() => moveCar('redCar', !redCar)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={blueCar ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
            />
            <button
              onClick={() => moveCar('blueCar', !blueCar)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={yellowCar ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button
              onClick={() => moveCar('yellowCar', !yellowCar)}
              type="button"
            >
              Move
            </button>
          </div>
        </div>
      )}
    </CarsContext.Consumer>
  )
};

export default Cars;
