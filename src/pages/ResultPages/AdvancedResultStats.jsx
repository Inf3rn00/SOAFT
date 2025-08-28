import React from 'react';
import { useParams } from 'react-router-dom';

const AdvancedResultStats = () => {
  const { id } = useParams();
  
  return (
    <div className='h-screen w-screen bg-green-200 mx-auto'>
      <h1>Student Details for ID: {id}</h1>
    </div>
  );
};

export default AdvancedResultStats;