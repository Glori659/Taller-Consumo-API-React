import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { ProductCard } from "../ProductCard/ProductCard"
import axios from "axios"


export const ProductDetail = () => {
    let { id } = useParams()

    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((result) =>{
       setProduct(result.data)
    })
}, [])


    return(
        <div> 
            <h1>Información del Producto con Identificador {id}</h1>

        {product && 
         <ProductCard 
            id={product.id}
            tittle={product.title}
            image={product.image}
            price={product.price}
            description={product.description}

         />
        }
        </div>
    )
}