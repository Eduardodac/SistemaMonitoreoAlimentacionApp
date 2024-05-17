import avatar from "../../../assets/cat-avatar.webp";
import { InformacionGato } from "./InformacionGato"


export const CardGato = () => {
  return (
    <article className="w-full flex flex-row items-center card-cats">
        <section className="w-1/4 bg-fondoCards flex justify-center">
           <img src={avatar} alt="cat-picture" width="200" className="rounded-full"/>
        </section>
        <section className="w-3/4">
            <InformacionGato/>
        </section>
    </article>
  )
}
