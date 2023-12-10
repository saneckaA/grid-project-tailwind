import React from 'react';
import jeanette from '../images/image-jeanette.jpg';

const Box4 = () => {
    return (
        <div className='p-10 rounded-xl bg-white text-gray-900'>
            <div className='flex space-x-4'>
                <img src={jeanette} alt='' className='w-10 h-10 rounded-full ring-2
                 ring-purple-300' />
                <div className='text-sm'>
                    <h4 className='opacity-90'>Jeanette Harmon</h4>
                    <p className='opacity-50'>Verified Graduate</p>
                </div>
            </div>
            <p className='mt-6 text-xl'>
                An overall wonderful and rewarding experience
            </p>
            <p className='mt-6 opacity-50'>
                "Thank you for wonderful experience! I now have a job I really enjoy,
                and make a good living while doing something I love."
            </p>
        </div>
    )
}

export default Box4;