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
  
    console.log(image);

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
        history.push("/bids")
    }

    useEffect(() => {
        bid.id = index
    });
    return (
        <div className="col-md-12">
            {on_sale && <div className="card card-container">
                <article className='product'>
                <img src={require(`../images/${image}`)} width="200" height="150" alt={item_name} />
                <h4>{item_name}</h4>
                <p>Rs {base_price}</p>
                <p>{description}</p>
                <p>{source_address}</p>
                <p>{destination_address}</p>
                <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Your Price</label>
                        <input type="text" name="price" value={bid.price} onChange={handleChange} className={'form-control' + (submitted && !bid.price ? ' is-invalid' : '')} />
                        {submitted && bid.price &&
                            <div className="invalid-feedback">Base Price is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">
                            {/* {registering && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                            Make Bid
                        </button>
                            {/* <Link to="/login" className="btn btn-link">Cancel</Link> */}
                    </div>
                </form>
                </article>
            </div>}
        </div>
  )
}
export default ShowItems