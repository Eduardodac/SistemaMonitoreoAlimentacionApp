import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AppNavigatorBar } from "../pages/AppNavigatorBar"
import { HomePage } from "../pages/HomePage"
import { Dashboard } from "../pages/dashboard/Dashboard"
import { Perfil } from "../pages/cuenta/Perfil"
import { EditarPerfil } from "../pages/cuenta/EditarPerfil"
import { Mascotas } from "../pages/mascotas/Mascotas"
import { EditarMascotas } from "../pages/mascotas/EditarMascotas"
import { PerfilMascotas } from "../pages/mascotas/PerfilMascotas"
import { Calendario } from "../pages/calendario/Calendario"
import { EditarCalendario } from "../pages/calendario/EditarCalendario"
import { Horarios } from "../pages/horarios/Horarios"
import { EditarHorario } from "../pages/horarios/EditarHorario"
import { Avisos } from "../pages/avisos/Avisos"
import { Configuracion } from "../pages/avisos/Configuracion"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<AppNavigatorBar></AppNavigatorBar>}>
                    <Route path = "home" element={<HomePage/>}/>
                    <Route path = "dashboard" element={<Dashboard/>}/>
                    <Route path = "perfil" element={<Perfil/>}/>
                    <Route path = "perfil/editar" element={<EditarPerfil/>}/>
                    <Route path = "mascotas" element={<Mascotas/>}/>
                    <Route path = "mascotas/perfil" element={<PerfilMascotas/>}/>
                    <Route path = "mascotas/editar" element={<EditarMascotas/>}/>
                    <Route path = "calendario" element={<Calendario/>}/>
                    <Route path = "calendario/editar" element={<EditarCalendario/>}/>
                    <Route path = "horarios" element={<Horarios/>}/>
                    <Route path = "horarios/editar" element={<EditarHorario/>}/>
                    <Route path = "avisos" element={<Avisos/>}/>
                    <Route path = "avisos/configuracion" element={<Configuracion/>}/>

                    <Route index element={<Navigate to = "/home" replace/>}/>
                    <Route path = "*" element={<Navigate to = "/home" replace/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
