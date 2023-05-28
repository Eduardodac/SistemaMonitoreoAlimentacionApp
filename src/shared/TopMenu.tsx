import { Avatar } from 'primereact/avatar';
import ipn from "../assets/ipn.svg"
import upiita from "../assets/upiita.png"

export const TopMenu = () => {
    return (
        <div className="flex justify-between items-center h-16 bg-gray-menus w-full">
                <div className="w-1/12 pt-1 pl-2">
                    <Avatar icon="pi pi-user" image={ipn} />
                    <Avatar icon="pi pi-user" image={upiita} />
                </div>
                <div className=" text-center">Sistema de Monitoreo de Alimentación para gatos</div>
                <div className="flex min-w-1/12 pr-2">
                    <p>Username</p>
                    <i className="pi pi-user p-1" style={{ fontSize: '1rem' }}></i>
                </div>
        </div>

    )
}
