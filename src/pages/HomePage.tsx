import { useEffect } from "react";
import { useAuthStore } from "../store/authStore"

export const HomePage = () => {

    const {jwt} = useAuthStore();

    useEffect(()=>{
        console.log("token",jwt);
    },[jwt])
  return (
    <div>Este será el Home Page</div>
  )
}
