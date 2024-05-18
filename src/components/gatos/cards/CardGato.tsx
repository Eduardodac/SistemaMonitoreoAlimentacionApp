import avatar from "../../../assets/cat-avatar.webp";
import { InformacionGato } from "./InformacionGato"


export const CardGato = () => {
  return (
    <article className="w-11/12 max-w-225 flex flex-row items-center card-cats rounded-md h-52 mx-auto">
        <section className="w-2/5 h-full bg-fondoCards flex justify-center rounded-l-md">
           <img src={avatar} alt="cat-picture" width="200" className="rounded-full"/>
        </section>
        <section className="w-3/4 h-full">
            <InformacionGato/>
        </section>
    </article>
  )
}
