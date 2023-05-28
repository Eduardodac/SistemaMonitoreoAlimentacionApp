import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppNavigatorBar } from "../pages/AppNavigatorBar"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<AppNavigatorBar></AppNavigatorBar>}>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
