// import React from 'react'

// const NewTask = ({ data }) => {
//     return (
//         <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
//             <div className='flex justify-between '>
//                 <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
//                 <h4 className='text-sm'>{ data.taskDate }</h4>

//             </div>
//             <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
//             <p className='text-sm mt-2'>
//                 {data.taskDescription}

//             </p>
//             <div className='mt-4'>
//                 <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>

//             </div>
//         </div>
//     )
// }

// export default NewTask

// import React from 'react';

// const NewTask = ({ data = {} }) => {
//     if (!data) return null;

//     return (
//         <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
//             <div className='flex justify-between '>
//                 <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data?.category}</h3>
//                 <h4 className='text-sm'>{data?.taskDate}</h4>
//             </div>
//             <h2 className='mt-5 text-2xl font-semibold'>{data?.taskTitle}</h2>
//             <p className='text-sm mt-2'>{data?.taskDescription}</p>
//             <div className='mt-4'>
//                 <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
//             </div>
//         </div>
//     );
// }

// export default NewTask;


import React from 'react';

const NewTask = ({ data = {} }) => {
    const { category = '', taskDate = '', taskTitle = '', taskDescription = '' } = data;

    return (
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
            <div className='flex justify-between'>
                <h3 className='bg-emerald-600 text-sm px-3 py-1 rounded'>{category}</h3>
                <h4 className='text-sm'>{taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{taskTitle}</h2>
            <p className='text-sm mt-2'>{taskDescription}</p>
            <div className='mt-4'>
                <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
            </div>
        </div>
    );
}

export default NewTask;
