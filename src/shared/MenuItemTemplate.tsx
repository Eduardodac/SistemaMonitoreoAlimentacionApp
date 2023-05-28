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

        <div className='flex tw-mx-4 tw-my-2 '>
            <NavLink
                className={({ isActive }) => {
                    return `w-full  tw-rounded-lg ${isActive ? 'active' : 'hover:tw-bg-grayl'} `
                }}
                to={`/${path}`}
            >

                <div className='flex tw-items-center gap-2 tw-text-sm tw-py-2 tw-pl-3'>
                    {img != null
                        ? (<img src={img} alt={path} className='tw-h-5 tw-w-5 tw-opacity-60' />)
                        : (<i className={`${icon}`}></i>)}
                    <p>{label}</p>
                </div>
            </NavLink>

        </div>
    )
}