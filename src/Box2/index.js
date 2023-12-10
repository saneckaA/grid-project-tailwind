import React from 'react';
import jonathan from '../images/image-jonathan.jpg';

const Box2 = () => {
    return (
        <div className='p-10 rounded-xl bg-gray-600'>
            <div className='flex space-x-4'>
                <img src={jonathan} alt='' className='w-10 h-10 rounded-full ring-2
                   ring-purple-300' />
                <div className='text-sm'>
                    <h4 className='opacity-90'>Jonathan Walters</h4>
                    <p className='opacity-50'>Verified Graduate</p>
                </div>
            </div>
            <p className='mt-6 text-xl'>
                The team was very supportive and kept me motivated
            </p>
            <p className='mt-6 opacity-50'>
                "I started as a total newbie with virtually no coding skills. I now work
                as a mobile engineer for a big company. this was one of the best investments I've
                made in myself."
            </p>
        </div>
    )
}

export default Box2;