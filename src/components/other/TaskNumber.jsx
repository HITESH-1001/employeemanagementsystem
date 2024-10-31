import React from 'react'

// const TaskNumber = ({ data }) => {
//     return (
//         <div className='flex mt-10 justify-between gap-5 w-screen '>
//             <div className='rounded-xl h-40 w-[45%] py-9 px-8 bg-red-400 '>
//                 <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
//                 <h3 className='text-xl font-medium'>New Task</h3>
//             </div>
//             <div className='rounded-xl h-40 w-[45%] py-9 px-8 bg-red-400 '>
//                 <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
//                 <h3 className='text-xl font-medium'>New Task</h3>
//             </div>
//             <div className='rounded-xl h-40 w-[45%] py-9 px-8 bg-red-400 '>
//                 <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
//                 <h3 className='text-xl font-medium'>New Task</h3>
//             </div>
//             <div className='rounded-xl h-40 w-[45%] py-9 px-8 bg-red-400 '>
//                 <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
//                 <h3 className='text-xl font-medium'>New Task</h3>
//             </div>
//         </div>
//     )
// }

// export default TaskNumber

const TaskNumber = ({ data = {} }) => {
    return (
        <div className='flex mt-10 justify-between gap-1  '>
            <div className='rounded-xl h-40 w-[20%] py-9 px-8 bg-fuchsia-400 '>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers?.newTask || 0}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='rounded-xl h-40 w-[20%] py-9 px-8 bg-green-400 '>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers?.completed || 0}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            <div className='rounded-xl h-40 w-[20%] py-9 px-8 bg-red-400 '>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers?.active || 0}</h2>
                <h3 className='text-xl font-medium'>Active Task</h3>
            </div>
            <div className='rounded-xl h-40 w-[20%] py-9 px-8 bg-red-500 '>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers?.failed || 0}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}
export default TaskNumber