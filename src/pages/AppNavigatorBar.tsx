import { Outlet } from "react-router-dom"
import { TopMenu } from "../shared/TopMenu"
import { LeftMenu } from "../shared/LeftMenu"

export const AppNavigatorBar = () => {
  return (
    <div className="flex w-full h-full bg-fondo">
      <LeftMenu/>

      <div className="flex flex-col w-full">
        <TopMenu></TopMenu>
        <div className=" w-full h-full p-10 m-auto bg-fondo">
          <Outlet></Outlet>
        </div>
      </div>


    </div>

  )
}
