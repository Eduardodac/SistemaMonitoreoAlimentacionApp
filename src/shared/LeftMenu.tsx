import { SlideMenu } from 'primereact/slidemenu';
import { leftMenuItemsTemplate } from './leftmenuItem';

export const LeftMenu = () => {
    const weigth = "250px"

    return (
        <div className={`flex flex-col ${weigth} bg-gray-menus shadow-inner shadow-slate-200`}>
            <div className="flex justify-center items-center h-12 ">Logo</div>
            <div className=" h-full">
                <SlideMenu model={leftMenuItemsTemplate} viewportHeight={350} menuWidth={200}></SlideMenu>
            </div>
        </div>
    )
}
