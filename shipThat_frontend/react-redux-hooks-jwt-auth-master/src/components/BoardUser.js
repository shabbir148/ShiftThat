import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { itemActions } from '../actions/item.action'
import UserService from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState("");

  const [item, setItem] = useState({
      itemName: '',
      description: '',
      baseprice: '',
      datetime: '',
      source_address: '',
      destination_address: '',
      image: ''
  });
  const [submitted, setSubmitted] = useState(false);
  // const registering = useSelector(state => state.registration.registering);
  const dispatch = useDispatch();


  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);


  function handleChange(e) {
      const { name, value } = e.target;
      setItem(item => ({ ...item, [name]: value }));
  }

  function handleSubmit(e) {
      e.preventDefault();

      console.log(item.itemName);
      console.log(item.description);
      console.log(item.baseprice);
      console.log(item.datetime);
      console.log(item.source_address);
      console.log(item.destination_address);
      console.log(item.image.split("\\")[2]);
      setSubmitted(true);
      if (item.itemName && item.description && item.baseprice && item.datetime && item.source_address && item.destination_address && item.image) {
          dispatch(itemActions.add(item))
      }
  }


  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Put Your Item On Advertisement By Filling The Form</h3>
      </header>
      <div className="col-md-12">
          <div className="card card-container">
            <h2>Add Item</h2>
            <form name="form" onSubmit={handleSubmit}>
              
              <div className="form-group">
                      <label>Name</label>
                      <input type="text" name="itemName" value={item.itemName} onChange={handleChange} className={'form-control' + (submitted && !item.itemName ? ' is-invalid' : '')} />
                      {submitted && !item.itemName &&
                          <div className="invalid-feedback">Name is required</div>
                      }
                  </div>
                  <div className="form-group">
                      <label>Description</label>
                      <input type="text" name="description" value={item.description} onChange={handleChange} className={'form-control' + (submitted && !item.description ? ' is-invalid' : '')} />
                      {submitted && !item.description &&
                          <div className="invalid-feedback">Description is required</div>
                      }
                  </div>
                  <div className="form-group">
                      <label>Source Address</label>
                      <input type="text" name="source_address" value={item.source_address} onChange={handleChange} className={'form-control' + (submitted && !item.source_address ? ' is-invalid' : '')} />
                      {submitted && !item.source_address &&
                          <div className="invalid-feedback">Source Address is required</div>
                      }
                  </div>
                  <div className="form-group">
                      <label>Destination Address</label>
                      <input type="text" name="destination_address" value={item.destination_address} onChange={handleChange} className={'form-control' + (submitted && !item.destination_address ? ' is-invalid' : '')} />
                      {submitted && !item.destination_address &&
                          <div className="invalid-feedback">destination Address is required</div>
                      }
                  </div>
                  <div className="form-group">
                      <label>Amount</label>
                      <input type="text" name="baseprice" value={item.baseprice} onChange={handleChange} className={'form-control' + (submitted && !item.baseprice ? ' is-invalid' : '')} />
                      {submitted && !item.baseprice &&
                          <div className="invalid-feedback">Base Price is required</div>
                      }
                  </div>
                  <div className="form-group">
                      <label>Date and Time of Transport</label>
                      <input type="datetime-local" name="datetime" value={item.datetime} onChange={handleChange} className={'form-control' + (submitted && !item.datetime ? ' is-invalid' : '')} />
                      {submitted && !item.datetime &&
                          <div className="invalid-feedback">Date and Time is required</div>
                      }
                  </div>
                  <div className="form-group">
                      <label>Date and Time of Transport</label>
                      <input type="file" name="image" value={item.image} onChange={handleChange} accept="image/*" className={'form-control' + (submitted && !item.image ? ' is-invalid' : '')} />
                      {submitted && !item.image &&
                          <div className="invalid-feedback">Date and Time is required</div>
                      }
                  </div>
                  <div className="form-group">
                      <button className="btn btn-primary">
                          {/* {registering && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                          Add Item
                      </button>
                      {/* <Link to="/login" className="btn btn-link">Cancel</Link> */}
                  </div>
              </form>
          </div>
        </div>
    </div>
  );
};

export default BoardUser;
