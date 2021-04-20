import React, { useState, useEffect } from "react";
import { NEW_ORDER, PICKUP_ORDER } from "../../../utils/context/action";
import { useStoreContext } from "../../../utils/context/GlobalState";
import axios from "axios";
import "./order.css";

function Order() {
  const [state, dispatch] = useStoreContext();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchOrder();
  }, []);
  const fetchOrder = () => {
    axios.get('/api/order').then((res) => {
      dispatch({ type: NEW_ORDER, payload: res.data });
      setIsLoading(false);
    });
  };
  const pickupOrder = (id) => {
    console.log(id)
    // axios.delete("/api/books/" + id)
    // axios.delete('/api/order/' + id).then((res) =>{
    //   console.log(res)
    //   dispatch({ type: PICKUP_ORDER, payload: res });
    // })
    dispatch({ type: PICKUP_ORDER, payload: id });
  }
  
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (

        <div className="order" >
          <h1> Orders </h1>
          <div className="order-title">

            <div className=" head head-img">
              <h2>Image</h2>

            </div>
            <div className="head num">
              <h2>Order Number</h2>
            </div>
            <div className="head title">
              <h2>Title</h2>
            </div>
            <div className="head myPrice">
              <h2>Price</h2>
            </div>
          </div>

          {state.orders !== [] &&
            state.orders[0].map((order) => (

              <div className="content">

                <div className=" head head-img">

                  <img

                    src={order.image}
                    alt=""
                  />
                </div>
                <div className="head num">
                  <p>{order.id}</p>
                </div>
                <div className="head title">
                  <p>{order.title}</p>

                </div>
                <div className="head myPrice">
                  <p> ${order.price}</p>
                  <br /><br />
                  <button className='order-btn' onClick={() => pickupOrder(order.id)}
                  >
                    Pick Up
                    </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default Order;

