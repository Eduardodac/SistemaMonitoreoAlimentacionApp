import { NavLink } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

interface ItemProps {
    label: string,
    path: string,
    img: string
}

export const MenuItemCerrarSesionTemplate = ({
    label = 'Home',
    path = '',
    img,
}: ItemProps) => {
    const {setJWT} = useAuthStore();

    const cerrarSesion = ()=>{
        setJWT(null);
    }
    return (

        <div className='flex mx-2 my-2 '>
            <NavLink
            onClick={()=>cerrarSesion()}
                className={({ isActive }) => {
                    return `w-full  rounded-lg ${isActive ? 'active' : 'hover:bg-grayl'} `
                }}
                to={`/${path}`}
            >
                <div className='flex items-center gap-2 text-sm py-2 pl-3'>
                <img src={img} alt={path} className='h-5 w-5 opacity-60' />
                    <p>{label}</p>
                </div>
            </NavLink>

        </div>
    )
}