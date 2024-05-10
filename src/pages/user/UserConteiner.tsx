import { Outlet } from 'react-router-dom'

export const UserConteiner = () => {
  return (
    <section className="w-full h-full flex justify-center align-middle bg-[url('/wallpaperLogin.avif')]"> 
        <Outlet></Outlet>
    </section>
  )
}
