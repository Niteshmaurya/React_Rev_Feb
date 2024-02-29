import React, { useEffect, useState } from 'react'

function Github() {
  const [data,setData] = useState([])
  useEffect (()=>{
    fetch('https://api.github.com/users/NiteshMaurya')
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      setData(data)

    })
  },[])
  return (
    <div className='text-center bg-gray-500 text-white p-4 text-3xl m-4'>Github Followers {data.followers}</div>
  )
}

export default Github