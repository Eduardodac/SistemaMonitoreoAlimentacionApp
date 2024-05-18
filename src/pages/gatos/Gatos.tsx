import { CardGato } from "../../components/gatos/cards/CardGato"
import { CrearNuevoGato } from "../../components/gatos/perfil/CrearNuevoGato"

export const Gatos = () => {
  return (
    <article>
        <section className="text-2xl font-bold text-paletaIpn-guinda self-start mb-5">Perfil de tus mascotas</section>
        <CardGato/>
        <CrearNuevoGato/>
    </article>
  )
}
