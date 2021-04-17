import React, { useState, useEffect } from "react";
import { NEW_ORDER, PICKUP_ORDER } from "../../../utils/context/action";
import { useStoreContext } from "../../../utils/context/GlobalState";
import axios from "axios";
import "./order.css";

function Order() {
  const [state, dispatch] = useStoreContext();
  const [isLoading, setIsLoading] = useState(true);
  const [pickup, setPickup] = useState(false)
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

    // setPickup(true)
  }
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}> Orders </h1>

          <table style={{ width: "100%" }}>
            <tr>
              <th>Image</th>
              <th>Order Number</th>
              <th>Title</th>
              <th>Price</th>
            </tr>

            {state.orders !== [] &&
              state.orders[0].map((order) => (
                <tr>
                  <td>
                    <img
                      style={{
                        height: "80px",
                        width: "80px",
                        borderRadius: "50%",
                        marginLeft: "30%",
                      }}
                      src={order.image}
                      alt=""
                    />
                  </td>
                  <td>
                    <p>{order.id}</p>
                  </td>
                  <td>
                    <p>{order.title}</p>
                    <button onClick={() => pickupOrder(order.id)}
                      style={pickup?({backgroundColor:'red'}):{
                        float: "right",
                        marginTop: "-35px",
                        marginRight: "30px",
                        backgroundColor: "lightgreen",
                      }}
                    >
                      Pick Up
                    </button>
                  </td>
                  <td>
                    <p> {order.price}</p>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      )}
    </>
  );
}

export default Order;

