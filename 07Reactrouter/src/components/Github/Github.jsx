import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    // LOADER MEHOD
    const data = useLoaderData()
    

    //  here we do not get data from github
    return (
        <div className='text-center m-4 bg-gray-600 text-3xl text-white'>
            <div className='m-2 p-2'>
                Github Followers: {data.followers}  
            </div>
            <div className='m-2 p-2'>
                Github Followings: {data.following}  
            </div>
            <img src={data.avatar_url} alt="Git Profile img" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const resposne = await fetch('https://api.github.com/users/saifhasan14')
    return resposne.json()
}

// function Github() {

//     const [data, setData] = useState([])

//     // USING ASYNC METHOD
//     // async function fetchdata(){
//     //     try {
//     //         const resposne = await fetch('https://api.github.com/users/saifhasan14')
//     //         const data = await resposne.json()
//     //         console.log(data);
//     //         setData(data)

//     //     } catch (error) {
//     //         console.log('There was an error!', error);
//     //     }
//     // }

//     // USING PROMISES
//     const fetchdata = () => {
//         fetch('https://api.github.com/users/saifhasan14')
//         .then((res) => res.json())
//         .then(data => {
//             console.log(data);
//             setData(data)
//         })
//         .catch((err) => {
//             console.error('There was an error!', err);
//         })
//     }

//     // useEffect( () => {
//     //     fetch('https://api.github.com/users/saifhasan14')
//     //     .then((res) => res.json())
//     //     .then(data => {
//     //         console.log(data);
//     //         setData(data)
//     //     })
//     //     .catch((err) => {
//     //         console.error('There was an error!', err);
//     //     })
//     // }, [])

//     useEffect(() => {
//         fetchdata()
//     }, [])

//   return (
//     <div className='text-center m-4 bg-gray-600 text-3xl text-white'>
//         <div className='m-2 p-2'>
//             Github Followers: {data.followers}  
//         </div>
//         <div className='m-2 p-2'>
//             Github Followings: {data.following}  
//         </div>
//         <img src={data.avatar_url} alt="Git Profile img" width={300} />
//     </div>
//   )
// }

// export default Github

