// 📦 Importación de hooks y componentes necesarios
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../../context/StoreContext";
import upBlackArrow from '../../assets/logos/up--black-arrow.svg';
import './SiennaCollectionLinks.css';

// 🌐 Componente para mostrar enlaces de la colección "Sienna"
const SiennaCollectionLinks = () => {
    const [links,setLinks] = useState(true);
    


    const { onChangeBurguer } = useContext(StoreContext)
    const onChangeLinks = () =>{
    const clientWidthHome = document.body.clientWidth;
      (links===true)?setLinks(false):setLinks(true)
    }
  
    // 📜 Contenedor principal para los enlaces de colección
    return (
      <article className={links?'sienna-collections-links':'sienna-collections-links-extended'}>
          <div className='sienna-collections-button' onClick={onChangeLinks}>
            <p>Colecciones</p>
            <img src={upBlackArrow} className={links?"up-arrow":"down-arrow"}/>
          </div>
          <div className={links?'sienna-links':'sienna-links-extended'}>
            <Link to={'/colecciones/eclat-eternel'} onClick={onChangeBurguer}>Eclat Éternel <span></span></Link>
            <Link to={'/colecciones/l`aura-majestueuse'} onClick={onChangeBurguer}>L’aura Majestuse <span></span></Link>
            <Link to={'/colecciones/velours-divin'} onClick={onChangeBurguer}>Velours Divin <span></span></Link>
            <Link to={'/colecciones/heritage-d`or'} onClick={onChangeBurguer}>Heritage d’Or <span></span></Link>
            <Link to={'/colecciones/opulence-sauvage'} onClick={onChangeBurguer}>Opulence Sauvage <span></span></Link>
            <Link to={'/colecciones/noir-elegance'} onClick={onChangeBurguer}>Noir Élegance <span></span></Link>
            <Link to={'/colecciones/ciel-de-minuit'} onClick={onChangeBurguer}>Ciel de Minuit <span></span></Link>
          </div>
        </article>
    )
  }

  export default SiennaCollectionLinks;