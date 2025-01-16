// 📦 Importación de hooks y componentes necesarios
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../../context/StoreContext";
import upBlackArrow from '../../assets/logos/up--black-arrow.svg';
import './SiennaCollectionLinks.css';

// 🌐 Componente para mostrar enlaces de la colección "Sienna"
const SiennaCollectionLinks = () => {
    const [links,setLinks] = useState(true);
    
    const { onChangeLightBurguer } = useContext(StoreContext)
    const onChangeLinks = () =>{
    const clientWidthHome = document.body.clientWidth;
      (links===true)?setLinks(false):setLinks(true)
    }
    
    const onChangeComponents = async () =>{
      await onChangeLightBurguer();
      await onChangeLinks()
    }


    // 📜 Contenedor principal para los enlaces de colección
    return (
      <article className={links?'sienna-collections-links':'sienna-collections-links-extended'}>
          <div className='sienna-collections-button' onClick={onChangeLinks}>
            <p>Colecciones</p>
            <img src={upBlackArrow} className={links?"up-arrow":"down-arrow"}/>
          </div>
          <div className={links?'sienna-links':'sienna-links-extended'}>
            <Link to={'/colecciones/eclat-eternel'} onClick={onChangeComponents}>Eclat Éternel <span></span></Link>
            <Link to={'/colecciones/l`aura-majestueuse'} onClick={onChangeComponents}>L’aura Majestuse <span></span></Link>
            <Link to={'/colecciones/velours-divin'} onClick={onChangeComponents}>Velours Divin <span></span></Link>
            <Link to={'/colecciones/heritage-d`or'} onClick={onChangeComponents}>Heritage d’Or <span></span></Link>
            <Link to={'/colecciones/opulence-sauvage'} onClick={onChangeComponents}>Opulence Sauvage <span></span></Link>
            <Link to={'/colecciones/noir-elegance'} onClick={onChangeComponents}>Noir Élegance <span></span></Link>
            <Link to={'/colecciones/ciel-de-minuit'} onClick={onChangeComponents}>Ciel de Minuit <span></span></Link>
          </div>
        </article>
    )
  }

  export default SiennaCollectionLinks;