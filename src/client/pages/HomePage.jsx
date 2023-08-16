import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getPlants from '@wasp/queries/getPlants';
import waterPlant from '@wasp/actions/waterPlant';

export function HomePage() {
  const { data: plants, isLoading, error } = useQuery(getPlants);
  const waterPlantFn = useAction(waterPlant);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      {plants.map((plant) => (
        <div
          key={plant.id}
          className='flex justify-between items-center bg-gray-100 p-4 mb-4 rounded-lg'
        >
          <div>
            <p>{plant.name}</p>
            <p>{plant.wateringFrequency} days left</p>
          </div>
          <button
            onClick={() => waterPlantFn({ plantId: plant.id })}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Water
          </button>
        </div>
      ))}
      <Link
        to='/add-plant'
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
      >
        Add Plant
      </Link>
    </div>
  );
}