import catIcon from "../assets/catIcon.png"
import chart from "../assets/chart.png"
import user from "../assets/user.png"
import calendar from "../assets/calendar.png"
import clock from "../assets/clock.png"
import bell from "../assets/bell.png"
import {MenuItemTemplate} from "./MenuItemTemplate";

export const leftMenuItems = [
    {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-chart-pie',
        url: "/dashboard",
        items : {
            label:"algo"
        }
    },
    {
        label: 'Cuenta',
        icon: 'pi pi-fw pi-user',
    },
    {
        label: 'Mascotas',
        icon: catIcon
    },
    {
        label: 'Calendarización',
        icon: 'pi pi-fw pi-calendar-times',
    },
    {
        label: 'Horarios',
        icon: 'pi pi-fw pi-clock',
    },
    {
        label: 'Avisos',
        icon: 'pi pi-fw pi-bell',
    },
    {
        separator: true
    },
    {
        label: 'Cerrar sesión',
        icon: 'pi pi-fw pi-power-off'
    }
];

export const leftMenuItemsTemplate = [
    {
        template : () => (
            <MenuItemTemplate label = 'Dashboard' icon ="" img= {chart} path = "dashboard"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Cuenta' icon ="" img= {user} path = "perfil"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Mascotas' icon ="" img= {catIcon}  path = "mascotas"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Calendarización' icon ="" img= {calendar} path = "calendario"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Horarios' icon ="" img= {clock} path = "horarios"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Avisos' icon ="" img = {bell} path = "avisos"/>
        )
    },
    {
        separator: true
    }
    ,
    {
        template : () => (
            <MenuItemTemplate label = 'Cerrar Sesión' icon ="pi pi-fw pi-power-off" path = ""/>
        )
    },
];