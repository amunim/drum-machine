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
        <div className='border-4 w-[34rem] h-72 m-auto border-orange-400 bg-gray-300 flex flex-col'>
          <div className='w-[99%] h-fit text-end'>
            <strong><em>FCC</em></strong> <FontAwesomeIcon icon={faFreeCodeCamp} />
          </div>
          <DrumButtons />
          <DrumControls />
        </div>
      </div>
    </>
  );
}

export default App;
