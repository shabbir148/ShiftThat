import React, { useState, useCallback, useMemo, useEffect} from 'react'
import  { useFetch } from '../custom-hooks/useFetch'
import { history } from '../helpers/history';
import { itemService } from '../services/item.service';


const UserItems = ({url}) => {
  console.log(url);
  const { products } = useFetch(url)
  
  return (
      <BigList products={products}/>
  )
}

const BigList = React.memo(({ products}) => {
  useEffect(() => {
    console.count('hello from big list');
  });

  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.item_id}
            index={product.item_id}
            item_name= {product.item_name}
            base_price ={product.base_price}
            description= {product.description}
            source_address = {product.source_address}
            date = {product.datetime}
            destination_address = {product.destination_address}
            on_sale = {product.on_sale}
            bids = {product.bids}
            image = {product.image}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ index,item_name,base_price,description,source_address,destination_address,on_sale,date,bids, image}) => {
  
  let style  = {}
  if(!on_sale) {
    style = {backgroundColor : "#878f99"}
  }

  useEffect(() => {
    
  });

  return (
      <div className="col-md-12">
          <div style={style} className="card card-container">
              <article className='product'>
              <img src={require(`/home/shabbir/Transportation/shipThat_frontend/react-redux-hooks-jwt-auth-master/src/images/${image}`)} width="200" height="150" alt={item_name} />
              <h4>{item_name}</h4>
              <p>{description}</p>
              <p>{source_address}</p>
              <p>{destination_address}</p>
              <p>{date.substring(0, 10)}</p>
              <p>Rs {base_price}</p>
              </article>
          </div>
      </div>
  )
}
export default UserItems