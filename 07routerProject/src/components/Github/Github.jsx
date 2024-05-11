import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    
    
    // Yahi fetch naa karke hum data direct bhi bhej sakte hai Router se
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     console.log("fetching...");
    //     fetch('https://api.github.com/users/justAnotherNerdy')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data);
    //     })
    // }, [])

const data = useLoaderData();
  return (
    <>
        <div className='text-center text-3xl bg-gray-600 p-4 text-white'>Github Followers: {data.followers}</div>
        <div className="columns-2 border-l-emerald-950">
            <img src={data.avatar_url} alt="" className='rounded-full' />
            <div className='w-full bg-slate-400'></div>
        </div>
    </>
  )
}

export default Github

export const GithubInfo = async () => {
    console.log('fetching');
    const response = await fetch('https://api.github.com/users/justAnotherNerdy')
    return response.json()
}