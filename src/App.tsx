import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { DrumButtons } from './components/DrumButtons';
import './App.css';
import { DrumControls } from './components/DrumControls';

function App() {
  return (
    <>
      <div className="fixed w-full h-full bg-gray-600" >
      </div>
      <div className="absolute w-full h-full flex justify-center">
        <div className='border-4 w-[21rem] h-96 m-auto md:w-[35rem] md:h-56 border-orange-400 bg-gray-300 flex flex-col'>
          <div className='w-[99%] h-fit text-end'>
            <strong><em>FCC</em></strong> <FontAwesomeIcon icon={faFreeCodeCamp} />
          </div>
          <div className='flex flex-col md:flex-row'>
            <DrumButtons />
            <DrumControls />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
