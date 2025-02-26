import LoginForm from '@/components/auth/LoginForm'
import { postLogin } from '@/services/api/authApi'
import React from 'react'

const page = () => {

  return (
    <section>
      <LoginForm/>
    </section>
  )
}

export default page
