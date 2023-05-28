import { NavLink } from 'react-router-dom'

interface ItemProps {
    icon: string,
    label: string,
    path: string,
    img?: string
}

export const MenuItemTemplate = ({
    icon = 'pi pi home',
    label = 'Home',
    path = '',
    img,
}: ItemProps) => {
    return (

        <div className='flex mx-2 my-2 '>
            <NavLink
                className={({ isActive }) => {
                    return `w-full  rounded-lg ${isActive ? 'active' : 'hover:bg-grayl'} `
                }}
                to={`/${path}`}
            >
                <div className='flex items-center gap-2 text-sm py-2 pl-3'>
                    {img != null
                        ? (<img src={img} alt={path} className='h-5 w-5 opacity-60' />)
                        : (<i className={`${icon}`}></i>)}
                    <p>{label}</p>
                </div>
            </NavLink>

        </div>
    )
}