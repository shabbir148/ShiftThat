import React, { useState, useCallback, useMemo, useEffect} from 'react'
import  { useFetch } from '../custom-hooks/useFetch'
import { history } from '../helpers/history';
import { itemService } from '../services/item.service';

const ShowItems = ({url}) => {
  console.log(url);
  const { products } = useFetch(url)
  
  return (
      <BigList products={products}/>
  )
}

const BigList = React.memo(({ products }) => {
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
            base_price ={product.bid_value}
            description= {product.description}
            source_address = {product.source_address}
            destination_address = {product.destination_address}
            on_sale={product.on_sale}
            image={product.image}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ index,item_name,base_price,description,source_address,destination_address,on_sale,image}) => {
  
  let style  = {}
  if(!on_sale) {
    style = {backgroundColor : "grey"}
  }

    const [bid, setBid] = useState({
        id : 0,
        price : 0
    })
    const [submitted, setSubmitted] = useState(false);


    function handleChange(e) {
        const { name, value } = e.target;
        setBid(bid => ({ ...bid, [name]: value }));
    }

    function handleSubmit ()
    {
        setSubmitted(true);
        console.log(bid.price)
        itemService.makeBid(bid)
        history.push("/home")
    }

    useEffect(() => {
        bid.id = index
    });
    return (
        <div className="col-md-12">
            <div style={style} className="card card-container">
                <article className='product'>
                <img src={require(`../images/${image}`)} width="200" height="150" alt={item_name} />
                <h4>{item_name}</h4>
                <p>{description}</p>
                <p>{source_address}</p>
                <p>{destination_address}</p>
                <p>Rs {base_price}</p>
                </article>
            </div>
        </div>
  )
}
export default ShowItems