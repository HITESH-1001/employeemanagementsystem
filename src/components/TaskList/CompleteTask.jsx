// import React from 'react'

// const CompleteTask = ({ data }) => {
//     return (
//         <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
//             <div className='flex justify-between '>
//                 <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
//                 <h4 className='text-sm'>{ data.taskDate }</h4>

//             </div>
//             <h2 className='mt-5 text-2xl font-semibold'>{ data.taskTitle }</h2>
//             <p className='text-sm mt-2'>
//                 {  data.taskDescription}

//             </p>
//             <div className='mt-5'>
//                 <button className='bg-green-300 py-1 px-2 text-sm'>Mark as Completed</button>
//             </div>
//         </div>
//     )
// }

// export default CompleteTask

import React from 'react';

const CompleteTask = ({ data = {} }) => {
    if (!data) return null;

    return (
        <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data?.category}</h3>
                <h4 className='text-sm '>{data?.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data?.taskTitle}</h2>
            <p className='text-sm mt-2'>{data?.taskDescription}</p>
            <div className='mt-5 flex justify-between'>
                <button className='bg-green-600 py-1 px-2 text-sm rounded-full'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded-full'>Mark as Failed</button>
            </div>
        </div>
    );
}

export default CompleteTask;
