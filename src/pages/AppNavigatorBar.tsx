import { Outlet } from "react-router-dom"
import { TopMenu } from "../shared/TopMenu"
import { LeftMenu } from "../shared/LeftMenu"

export const AppNavigatorBar = () => {
  return (
    <div className="flex w-full h-full">
      <LeftMenu/>

      <div className="flex flex-col w-full">
        <TopMenu></TopMenu>
        <div className=" h-full px-15">
          <Outlet></Outlet>
        </div>
      </div>


    </div>

  )
}
