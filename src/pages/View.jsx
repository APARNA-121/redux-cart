import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'

function View() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const useCart = useSelector(state=>state.cartReducer)

  const dispatch = useDispatch()
  //get product id from url
  const {id} = useParams()
 // console.log(id);
  //state for storing product to be view
  const [product,setProduct] = useState({})
 // console.log(product);

  useEffect(()=>{
    if(sessionStorage.getItem("products")){
      const allProducts = JSON.parse(sessionStorage.getItem("products"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])
  
  const handleWishlist = ()=>{
    const existingProduct = userWishlist?.find(item=>item.id==id)
    if(existingProduct){
      //alert("Product already in wishlist")
      Swal.fire({
        title: 'Sorry!',
        text: 'Product already in wishlist...',
        icon: 'error',
        confirmButtonText: 'Ok'
})

    }else{
      //add product to wishlist in redux store - dispatch action 
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = ()=>{
    const existingProduct = useCart?.find(item=>item.id==id)
    dispatch(addToCart(product))
      //alert("Product already in wishlist")
      Swal.fire({
        title: 'Completed!',
        text: existingProduct?`Quantity of ${product.title},is updates successfully`:'Product added to your cart...',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
  
  return (
    <>
    <Header/>
    <div className="container py-5">
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <img className='img-fluid' src="https://marscosmetics.in/cdn/shop/products/fabulash-mascara-607.jpg?v=1638452787" alt="product" />
          <div className="d-flex justify-content-evenly mt-5">
            <button onClick={handleWishlist} className="btn btn-primary">ADD TO WISHLIST</button>
             <button onClick={handleCart} className="btn btn-success">ADD TO CART</button>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className='fw-bold'>{product?.title}</h1>
          <h3 className="text-danger fw-bolder">${product?.price}</h3>
          <h4>Brand: {product?.brand} </h4>
          <h4>Category: {product?.category} </h4>
          <h4>Description: {product?.description} </h4>

          <h3 className="my-3">Client Reviews</h3>
          {/* duplicate div */}
          {
            product?.reviews?.length>0?
              product?.reviews?.map((item,index)=>(
                <div key={index} className="border rounded p-3 shadow mb-2">
            <p><span className='fw-bolder'> {item?.reviewname} : </span> {item?.comment} </p>
            <p>Rating : {item?.rating} <FontAwesomeIcon icon={faStar} className='text-warning'/></p>
          </div>
              ))
              :
              <div>Np Client reviews are available </div>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default View