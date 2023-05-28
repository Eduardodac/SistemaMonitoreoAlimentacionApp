import { SlideMenu } from 'primereact/slidemenu';
import { leftMenuItemsTemplate } from './leftmenuItem';
import { Image } from 'primereact/image';
import logo from "../assets/CatSVG.svg"

export const LeftMenu = () => {
    const weigth = "250px"

    return (
        <div className={`flex flex-col ${weigth} bg-gray-menus `}>
            <div className="flex justify-center items-center h-16 ">
                <Image src={logo} alt="CatLogo" width="80" />
            </div>
            
            <div className=" h-full">
                <SlideMenu model={leftMenuItemsTemplate} className='bg-gray-menus w-44 border-0 rounded-none ' viewportHeight={585} easing="ease-in" menuWidth={200}></SlideMenu>
            </div>
        </div>
    )
}