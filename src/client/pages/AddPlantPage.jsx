import React, { useState } from 'react';
import { useAction } from '@wasp/actions';
import createPlant from '@wasp/actions/createPlant';

export function AddPlantPage() {
  const createPlantFn = useAction(createPlant);
  const [plantName, setPlantName] = useState('');
  const [wateringFrequency, setWateringFrequency] = useState(0);

  const handleCreatePlant = () => {
    createPlantFn({
      name: plantName,
      wateringFrequency: wateringFrequency
    });
  };

  return (
    <div className='p-4'>
      <input
        type='text'
        placeholder='Plant Name'
        className='px-1 py-2 border rounded'
        value={plantName}
        onChange={(e) => setPlantName(e.target.value)}
      />
      <input
        type='number'
        placeholder='Watering Frequency'
        className='px-1 py-2 border rounded'
        value={wateringFrequency}
        onChange={(e) => setWateringFrequency(parseInt(e.target.value))}
      />
      <button
        onClick={handleCreatePlant}
        className='bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white font-bold rounded mt-4'
      >
        Add Plant
      </button>
    </div>
  );
}