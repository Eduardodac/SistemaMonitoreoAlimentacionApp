import React from 'react'
import { Outlet } from 'react-router-dom'

export const UserConteiner = () => {
  return (
    <section>
        <Outlet></Outlet>
    </section>
  )
}
