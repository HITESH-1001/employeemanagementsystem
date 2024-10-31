// import React, { useState } from 'react'

// const CreateTask = () => {
//     const [taskTitle, setTaskTitle] = useState('')
//     const [taskDescription, setTaskDescription] = useState('')
//     const [taskDate, setTaskDate] = useState('')
//     const [assignTo, setAssignTo] = useState('')
//     const [category, setCategory] = useState('')
//     const [newTask, setNewTask] = useState({})

//     const submitHandler = (e) => {
//         e.preventDefault()
//         setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, completed: false, failed: false, newTask: true })
//         const data = userData

//         data.forEach(function (elem) {
//             if (assignTo == elem.firstName) {

//                 elem.tasks.push(newTask)
//                 elem.taskNumbers.newTask++
//             }
//         })
//         setUserData(data)
//         setTaskTitle('')
//         setTaskDescription('')
//         setTaskDate('')
//         setAssignTo('')
//         setCategory('')



//     }
//     return (
//         <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
//             <form onSubmit={(e) => {
//                 submitHandler(e)
//             }}
//                 className='flex flex-wrap w-full  items-start justify-between' action="">

//                 <div className='w-1/2 '>

//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
//                         <input value={taskTitle} onChange={(e) => { setTaskTitle(e.target.value) }} className='text-sm py-1 px-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
//                         <input value={taskDate} onChange={(e) => { setTaskDate(e.target.value) }} className='text-sm py-1 px-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
//                     </div>

//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
//                         <input value={assignTo} onChange={(e) => { setAssignTo(e.target.value) }} className='text-sm py-1 px-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='' />
//                     </div>

//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
//                         <input value={category} onChange={(e) => { setCategory(e.target.value) }} className='text-sm py-1 px-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='' />
//                     </div>
//                 </div>


//                 <div className='w-2/5 flex flex-col items-start'>
//                     <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
//                     <textarea value={taskDescription} onChange={(e) => { setTaskDescription(e.target.value) }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30"></textarea>
//                     <button className='bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' >Create Task</button>
//                 </div>



//             </form>
//         </div>
//     )
// }

// export default CreateTask

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider'; // adjust the path based on your project structure

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const [newTask, setNewTask] = useState({});

    const [userData, setUserData] = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();
        const task = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            completed: false,
            failed: false,
            newTask: true
        };
        setNewTask(task);

        const updatedData = userData.map((elem) => {
            if (elem.firstName === assignTo) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, task],
                    taskNumbers: {
                        ...elem.taskNumbers,
                        newTask: elem.taskNumbers.newTask + 1
                    }
                };
            }
            return elem;
        });

        setUserData(updatedData);

        // Reset form fields
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');
    };

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} className='text-sm py-1 px-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} className='text-sm py-1 px-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input value={assignTo} onChange={(e) => setAssignTo(e.target.value)} className='text-sm py-1 px-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={category} onChange={(e) => setCategory(e.target.value)} className='text-sm py-1 px-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
                    <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                    <button className='bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
