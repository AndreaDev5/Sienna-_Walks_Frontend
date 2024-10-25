import './PersonalizeShoes.css';
import { Link } from 'react-router-dom';

// Componente funcional que representa la sección de personalización de zapatos 👞
export default function PersonalizeShoes() {
  return (
    <section className='personalize-shoes'>
        <article className='personalize-shoes-container'>
            <h3>Tu estilo nuestra artesanía Personalizamos cada detalle de tus botas para crear piezas únicas que destacan por su elegancias y sofisticación</h3>
            <Link className='personalize-shoes-whatsapp'>Quiero saber Más</Link>
        </article>
    </section>
  )
}
