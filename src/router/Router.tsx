import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AppNavigatorBar } from "../pages/AppNavigatorBar"
import { HomePage } from "../pages/home/HomePage"
import { Dashboard } from "../pages/dashboard/Dashboard"
import { Perfil } from "../pages/cuenta/Perfil"
import { Gatos } from "../pages/gatos/Gatos"
import { EditarGatos } from "../pages/gatos/EditarGatos"
import { Horarios } from "../pages/horarios/Horarios"
import { Avisos } from "../pages/avisos/Avisos"
import { Configuracion } from "../pages/avisos/Configuracion"
import { UserConteiner } from "../pages/user/UserConteiner"
import { Login } from "../pages/user/Login"
import { Register } from "../pages/user/Register"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/usuario" element = {<UserConteiner></UserConteiner>}>
                    <Route path = "login" element={<Login/>}/>
                    <Route path = "registrar" element={<Register/>}/>
                    <Route index element={<Navigate to = "/usuario/login" replace/>}/>
                </Route>
                <Route path="/" element = {<AppNavigatorBar></AppNavigatorBar>}>
                    <Route path = "home" element={<HomePage/>}/>
                    <Route path = "dashboard" element={<Dashboard/>}/>
                    <Route path = "perfil" element={<Perfil/>}/>
                    <Route path = "gatos" element={<Gatos/>}/>
                    <Route path = "gatos/:gatoId" element={<EditarGatos/>}/>
                    <Route path = "horarios" element={<Horarios/>}/>
                    <Route path = "avisos" element={<Avisos/>}/>
                    <Route path = "avisos/configuracion" element={<Configuracion/>}/>

                    {/* <Route index element={<Navigate to = "/home" replace/>}/>
                    <Route path = "*" element={<Navigate to = "/home" replace/>}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
