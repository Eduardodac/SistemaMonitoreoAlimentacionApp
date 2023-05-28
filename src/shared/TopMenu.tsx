import { Avatar } from 'primereact/avatar';
import ipn from "../assets/ipn.svg"
import upiita from "../assets/upiita.png"

export const TopMenu = () => {
    return (
        <div className="flex justify-between items-center h-12 bg-gray-menus px-1 shadow shadow-slate-200">
            <div className="w-1/12 pt-1">
                <Avatar icon="pi pi-user" image = {ipn} />
                <Avatar icon="pi pi-user" image = {upiita} />
            </div>
            <div className="w-2/3 text-center">Sistema de Monitoreo de Alimentación para gatos</div>
            <div className="flex w-1/12">
                <p>Username</p>
                <i className="pi pi-user p-1" style={{ fontSize: '1rem' }}></i>
            </div>
        </div>

    )
}
