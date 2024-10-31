// import React, { useState } from 'react';
// import { setLocalStorage } from '../../utils/localStorage';

// const Header = () => {
//     // const [username, setUsername] = useState('')
//     // if (!data) {
//     //     setUsername('Admin')

//     // }else{
//     //     setUsername(data.firstName)
//     // }


//     const logOutUser = () => {
//         localStorage.setItem('loggedInUser', '')
//         props.changeUser('')
//         window.location.reload()
//     }


//     return (
//         <div className='flex justify-between items-center '>
//             <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 💢</span>  </h1>
//             <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 rounded-sm'>Log Out</button>
//         </div>
//     )
// }

// export default Header

import React, { useState } from 'react';

const Header = ({ changeUser, data }) => {
    const [username, setUsername] = useState(data?.firstName || 'Admin');

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '');
        changeUser('');
        window.location.reload();
    };

    return (
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-medium'>
                Hello <br />
                <span className='text-3xl font-semibold'>{username} 🖐️</span>
            </h1>
            <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 rounded-sm'>Log Out</button>
        </div>
    );
};

export default Header;
