import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../../context/StoreContext";
import upBlackArrow from '../../assets/logos/up--black-arrow.svg';
import './SiennaCollectionPages.css';

const SiennaCollectionPages = () => {
    const [links,setLinks] = useState(true);
    
    const { onChangeLightBurguer } = useContext(StoreContext)
    const onChangeLinks = () =>{
    const clientWidthHome = document.body.clientWidth;
      (links===true)?setLinks(false):setLinks(true);
    }

  return (
    <article className={links?'sienna-pages-links':'sienna-collections-pages-extended'}>
            <div className='sienna-collections-button' onClick={onChangeLinks}>
            <p>Colecciones</p>
            <img src={upBlackArrow} className={links?"up-arrow":"down-arrow"}/>
        </div>
        <div className={links?'sienna-links':'sienna-links-extended'}>
            <Link to={'/colecciones/eclat-eternel'} onClick={onChangeLinks}>Eclat Éternel <span></span></Link>
            <Link to={'/colecciones/l`aura-majestueuse'} onClick={onChangeLinks}>L’aura Majestuse <span></span></Link>
            <Link to={'/colecciones/velours-divin'} onClick={onChangeLinks}>Velours Divin <span></span></Link>
            <Link to={'/colecciones/heritage-d`or'} onClick={onChangeLinks}>Heritage d’Or <span></span></Link>
            <Link to={'/colecciones/opulence-sauvage'} onClick={onChangeLinks}>Opulence Sauvage <span></span></Link>
            <Link to={'/colecciones/noir-elegance'} onClick={onChangeLinks}>Noir Élegance <span></span></Link>
            <Link to={'/colecciones/ciel-de-minuit'} onClick={onChangeLinks}>Ciel de Minuit <span></span></Link>
        </div>
    </article>
  )
}

export default SiennaCollectionPages;
