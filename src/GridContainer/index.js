import React from 'react';
import Box1 from '../Box1';
import Box2 from '../Box2';
import Box3 from '../Box3';
import Box4 from '../Box4';
import Box5 from '../Box5';


const GridContainer = () => {
    return (
        <div className='text-white grid grid-rows-1 md:grid-cols-4 gap-5'>
            <Box1 />
            <Box2 />
            <Box3 />
            <Box4 />
            <Box5 />
        </div>
    )
}

export default GridContainer;