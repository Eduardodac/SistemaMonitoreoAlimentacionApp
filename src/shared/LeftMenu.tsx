import { SlideMenu } from 'primereact/slidemenu';
import { leftMenuItems } from './leftmenuItem';

export const LeftMenu = () => {
    const weigth = "250px"

    return (
        <div className={`flex flex-col ${weigth} bg-gray-menus shadow-inner shadow-slate-200`}>
            <div className="flex justify-center items-center h-12 ">Logo</div>
            <div className=" h-full">
                <SlideMenu model={leftMenuItems} viewportHeight={300} menuWidth={200}></SlideMenu>
            </div>
        </div>
    )
}
