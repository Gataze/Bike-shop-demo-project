import { FaMinus, FaPlus, FaStar } from "react-icons/fa"
import { useParams } from "react-router"
import '../styles/product-details-styles/product-details-styles.css'
import { Link } from "react-router-dom"
import useFetch from "../useFetch"
import { useState, useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ProductDescription from "./ProductDescription"




const ProductDetails = () => {

    const [counter, setCounter] = useState(1)
    const {typeId, id} = useParams()

    const {data: item} = useFetch(`http://localhost:8000/${typeId}/${id}` )

    
    const addToCart = (item) => {


        const oldItems = JSON.parse(localStorage.getItem('item'))

        //item pobrany przez fetch w tym pliku
        const newItem = {
            name: item.name,
            body: item.body,
            price: item.price,
            url: item.url,
            id: item.id,
            counter: counter
        }
        
        const updatedItems = oldItems.filter(oldItem => oldItem.id !== newItem.id) 
        const allItems = [...updatedItems, newItem] 
         
    const temp = JSON.stringify(allItems)
    localStorage.setItem('item', temp)

    }


    useEffect(() => {
        window.scrollTo(0, 0);
        
    }, [])

    


    return ( 

        <section className="card">
            <div className="container">
                <div className="row row-one">
                    <div className="col-1">
                        <div className="img-wrapper">
                            <div className="featured-wrapper">
                                <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} >
                                    <div>
                                        <img src={item.url} alt="" className="thumbnail"/>
                                    </div>
                                    <div>
                                        <img src={item.url2} alt="" className="thumbnail"/>
                                    </div>
                                    <div>
                                        <img src={item.url} alt="" className="thumbnail"/>
                                    </div>
                                    <div>
                                        <img src={item.url} alt="" className="thumbnail"/>
                                    </div>
                                    <div>
                                        <img src={item.url} alt="" className="thumbnail"/>
                                    </div>
                                </Carousel>
                            </div>  
                        </div>
                    </div>
                    <div className="col-2">
                        <h2>{item.name}</h2>
                        <div className="user-grade">
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span>4.8/5 (33)</span>
                        </div>
                        <p className='price'>{item.price}$</p>
                        <div className="loan">
                            <span>10 rat x {item.price/10}0$ </span>
                            <span><Link to="/">Obicz ratę</Link></span>
                        </div>
                        <p className='spcs'>Kolor<span>: Ciemna lawenda</span></p>
                        <p className='spcs'>Rozmiar<span>: Uniwersalny</span></p>
                        <div className="quantity">
                            <label htmlFor="qnt">Ilość</label>
                            <div className='form-wrapper'>
                                <div onClick={() => setCounter(
                                    counter => {
                                        if(counter >= 1){
                                            return counter - 1
                                        } else {
                                            return counter
                                        }
                                    })}>
                                    <FaMinus />
                                </div>
                                <p type="text" id='qnt' value={counter} >{counter}</p>
                                <div onClick={() => setCounter(counter + 1)} >
                                    <FaPlus /> 
                                </div> 
                            </div>
                        </div>
                        <div onClick={() => addToCart(item)}  className='shop-accesibility'>
                            <Link to="/cart" className="btn" >DODAJ DO KOSZYKA</Link>
                        </div>
                        <ProductDescription />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ProductDetails;