'use client'

import { ReactElement } from 'react'
import { useRouter } from 'next/navigation'

// interface LogoutResponse {
//   success: boolean
//   error?: string
// }

const LogoutButton = (): ReactElement => {
  const router = useRouter()

  const handleLogout = async (): Promise<void> => {
    try {
      const res = await fetch('https://lms-three-silk.vercel.app/api/customers/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!res.ok) {
        const errorData = await res.json() // Try to parse error response
        throw new Error(errorData.error || 'An error occurred during logout.')
      }

      // Handle successful logout (e.g., redirect, clear local storage)
      localStorage.removeItem('token') // Or however you store your auth token
      router.push('/login') // Redirect to login page
    } catch (error: any) {
      // Type the error
      console.error('Logout error:', error)
      alert(error?.message || 'An error occurred during logout.')
    }
  }

  return <button onClick={handleLogout}>Logout</button>
}

export default LogoutButton
