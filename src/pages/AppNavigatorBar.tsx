import { Navigate, Outlet } from "react-router-dom"
import { TopMenu } from "../shared/TopMenu"
import { LeftMenu } from "../shared/LeftMenu"
import { useAuthStore } from "../store/authStore";
import { useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import useToastStore, { SeverityType } from "../store/toastStore";

export const AppNavigatorBar = () => {
    const { jwt } = useAuthStore();
    const toast = useRef<Toast>(null);
    const getToast = useToastStore();

    useEffect(() => {
        console.log(jwt)
    }, [jwt])

    useEffect(() => {
        if (!getToast.initial) {
            showToast(getToast.severity, getToast.summary, getToast.detail)
        }

    }, [getToast.change])

    const showToast = (severity: SeverityType, summary: string, detail: string) => {
        toast.current?.show({ severity: severity, summary: summary, detail: detail, life: 3000 });
    }

    return (
        <div className="flex w-full h-fit min-h-full bg-fondo">
            <LeftMenu />

            <section className="flex flex-col w-full">
                <TopMenu></TopMenu>
                <article className="w-full h-full px-3 pt-3 m-auto bg-darkFondo">
                    <div className="w-full h-full p-5 m-auto bg-fondo">
                        <Toast ref={toast} />
                        {jwt == null ? <Navigate to="/usuario" state={{ from: location }} />
                            : <Outlet></Outlet>}
                    </div>
                </article>
            </section>
        </div>

    )
}
