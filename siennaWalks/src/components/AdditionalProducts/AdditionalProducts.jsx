import ShoeStoreTarget from '../../atoms/ShoeStoreTarget/ShoeStoreTarget';
import './AdditionalProducts.css';
import { useAdditionalProducts } from '../../hooks/useAdditionalProducts';
 
const AdditionalProducts = () =>{
        const { productList } = useAdditionalProducts();
           
        return(
        <>
        <article className='other-products-tittle'>
            <div className='other-products-tittle-line'></div>
            <h1>También te puede gustar</h1>
            <div className='other-products-tittle-line'></div>
        </article>
        <section className='other-products-list'>
            {(productList.length > 0)?productList.map((product)=>{
                return <ShoeStoreTarget
                classShoeName='shoe-store-target'
                key={product._id}
                collection={product.category}
                shoesName={product.name}
                image={product.image}
                productLink={`/otros-productos/${product._id}`}
                shoesPrice={`$${product.price}`}/>
            }):''}
        </section>
        </>
        )
    }

    export default AdditionalProducts;