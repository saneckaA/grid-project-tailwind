import React from 'react';
import patric from '../images/image-patrick.jpg';

const Box5 = () => {
    return (
        <div className='p-10 rounded-xl bg-gray-900'>
            <div className='flex space-x-4'>
                <img src={patric} alt='' className='w-10 h-10 rounded-full ring-2
                 ring-purple-300' />
                <div className='text-sm'>
                    <h4 className='opacity-90'>Patric Abrams</h4>
                    <p className='opacity-50'>Verified Graduate</p>
                </div>
            </div>
            <p className='mt-6 text-xl'>
               Awesome teaching support from TAs who did the bootcamp themeselves.
               Getting guidance from them and learning from their experience was easy.
            </p>
            <p className='mt-6 opacity-50'>
                "The staff seem genuinely concerned aboyt my progress which I find really
                refreshing. The program gave me the confidence necessary to be able to go
                out in the world and present myself as a capable junior developer.
                The standars is above the rest. You will ger the personal attention you need
                from an incredible community of smart and amazing people."
            </p>
        </div>
    )
}

export default Box5;