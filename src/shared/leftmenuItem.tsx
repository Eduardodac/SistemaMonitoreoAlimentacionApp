import catIcon from "../assets/catIcon.png"
import chart from "../assets/chart.png"
import user from "../assets/user.png"
import calendar from "../assets/calendar.png"
import clock from "../assets/clock.png"
import bell from "../assets/bell.png"
import {MenuItemTemplate} from "./MenuItemTemplate";

export const leftMenuItems = [
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
            <MenuItemTemplate label = 'Gatos' icon ="" img= {catIcon}  path = "gatos"/>
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