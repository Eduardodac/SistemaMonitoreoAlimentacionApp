import catIcon from "../assets/catIcon.jpg"
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
            <MenuItemTemplate label = 'Dashboard' icon ="pi pi-fw pi-chart-pie" path = "dashboard"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Cuenta' icon ="pi pi-fw pi-user" path = "perfil"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Mascotas' icon ="pi pi-chart-pie" path = "mascotas"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Calendarización' icon ="pi pi-fw pi-calendar-times" path = "calendario"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Horarios' icon ="pi pi-fw pi-clock" path = "horarios"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Avisos' icon ="pi pi-fw pi-bell" path = "avisos"/>
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