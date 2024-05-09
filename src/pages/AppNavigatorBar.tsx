import { Outlet } from "react-router-dom"
import { TopMenu } from "../shared/TopMenu"
import { LeftMenu } from "../shared/LeftMenu"

export const AppNavigatorBar = () => {
  return (
    <div className="flex w-full h-full bg-fondo">
      <LeftMenu/>

      <section className="flex flex-col w-full">
        <TopMenu></TopMenu>
        <article className="w-full h-full px-3 pt-3 m-auto bg-darkFondo">
            <div className="w-full h-full p-5 m-auto bg-fondo">
                <Outlet></Outlet>
            </div>
        </article>
      </section>


    </div>

  )
}
