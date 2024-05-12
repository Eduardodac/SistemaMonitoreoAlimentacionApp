import catIcon from "../assets/catIcon.png"
import chart from "../assets/chart.png"
import user from "../assets/user.png"
import calendar from "../assets/calendar.png"
import clock from "../assets/clock.png"
import bell from "../assets/bell.png"
import off from "../assets/off.png"
import {MenuItemTemplate} from "./MenuItemTemplate";
import { MenuItemCerrarSesionTemplate } from "./MenuItemCerrarSesionTemplate"

export const leftMenuItems = [
    {
        template : () => (
            <MenuItemTemplate label = 'Dashboard' img= {chart} path = "dashboard"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Cuenta' img= {user} path = "perfil"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Gatos' img= {catIcon}  path = "gatos"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Calendarización' img= {calendar} path = "calendario"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Horarios' img= {clock} path = "horarios"/>
        )
    },
    {
        template : () => (
            <MenuItemTemplate label = 'Avisos' img = {bell} path = "avisos"/>
        )
    },
    {
        separator: true
    }
    ,
    {
        template : () => (
            <MenuItemCerrarSesionTemplate label = 'Cerrar Sesión' img = {off} path = ""/>
        )
    },
];