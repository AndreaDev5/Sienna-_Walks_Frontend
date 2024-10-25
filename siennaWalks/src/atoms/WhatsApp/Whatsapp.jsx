// 📲 Componente que redirige a WhatsApp de Mardy

import WhatsApp from '../../assets/logos/logos_whatsapp-icon.svg';
import './WhatsApp.css';

export default function Whatsapp() {
  return (
    <figure className="whatsApp-icon">
        <img  src={WhatsApp}/>
    </figure>
  )
}
