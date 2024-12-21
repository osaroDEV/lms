'use client'
import React, { useState } from 'react'
import LogoutButton from '../../logout/components/LogoutButton'

const Page = () => {
  const [data, setData] = useState(null)

  const handleCheck = async () => {
    try {
      const req = await fetch('http://localhost:3000/api/customers/me', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await req.json()
      setData(data)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div>Dashboard</div>
      <button className="bg-green-500 p-[1rem_.75rem]" onClick={handleCheck}>
        check
      </button>
      {data ? (<div><span>{JSON.stringify(data)}</span><LogoutButton /></div>) : <div>Click check button</div>}
    </>
  )
}

export default Page
