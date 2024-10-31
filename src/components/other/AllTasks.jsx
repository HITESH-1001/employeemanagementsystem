// import React, { useContext } from 'react'

// const AllTasks = () => {
//     const [userData, setUserData] = useContext(AuthContext)
//     return (
//         <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-48  '>
//             <div className='bg-red-400 py-2 px-4 flex justify-between rounded mb-2'>
//                 <h2 className='w-1/5  '>Employee Name</h2>
//                 <h3 className='w-1/5 '> New Task</h3>
//                 <h5 className='w-1/5 '>Active Task</h5>
//                 <h5 className='w-1/5 bg-red-600'>Completed Task</h5>
//                 <h5 className='w-1/5 '>Failed Task</h5>
//             </div>
//             <div className=' overflow-auto'>
//                 {userData.map(function (elem, idx) {
//                     return (
//                         <div key={idx} className='bg-red-400 py-2 px-4 flex justify-between rounded mb-2'>
//                             <h2 className='w-1/5 bg-red-400 '>{elem.firstName}</h2>
//                             <h3 className='w-1/5 bg-red-600'>{elem.taskNumbers.newTask}</h3>
//                             <h5 className='w-1/5 bg-red-600'>{elem.taskNumbers.active}</h5>
//                             <h5 className='w-1/5 bg-red-600'>{elem.taskNumbers.completed}</h5>
//                             <h5 className='w-1/5 bg-red-600'>{elem.taskNumbers.failed}</h5>
//                         </div>
//                     )
//                 })}
//             </div>

//         </div>
//     )
// }

// export default AllTasks

import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider'; // adjust the path based on your file structure

const AllTasks = () => {
    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-48'>
            <div className='bg-red-400 py-2 px-4 flex justify-between rounded mb-2'>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5'>New Task</h3>
                <h5 className='w-1/5'>Active Task</h5>
                <h5 className='w-1/5 bg-red-600'>Completed Task</h5>
                <h5 className='w-1/5'>Failed Task</h5>
            </div>
            <div className='overflow-auto'>
                {userData.map((elem, idx) => (
                    <div key={idx} className='bg-red-400 py-2 px-4 flex justify-between rounded mb-2'>
                        <h2 className='w-1/5 bg-red-400'>{elem.firstName}</h2>
                        <h3 className='w-1/5 bg-red-600'>{elem.taskNumbers.newTask}</h3>
                        <h5 className='w-1/5 bg-red-600'>{elem.taskNumbers.active}</h5>
                        <h5 className='w-1/5 bg-red-600'>{elem.taskNumbers.completed}</h5>
                        <h5 className='w-1/5 bg-red-600'>{elem.taskNumbers.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTasks;
