import Router from "next/router";

const OrderSuccess = (props) => {
  const { response } = props;

  if (!response) {
    return null;
  }

  let cartInfo = "";

  for (let i = 0; i < props.cart.products.length; i++) {
    let product = props.cart.products[i];

    cartInfo +=
      i + ":" + product.name + "," + product.price + "," + product.qty + ":";
  }

  console.log("CART", cartInfo);

  const responseData = response.checkout;

  const orderData = [responseData.order.orderNumber, cartInfo];

  console.log(orderData);

  Router.push({
    pathname: "/ordersuccess",
    query: { orderData: orderData },
  });

  return (
    <div className="container">
      <div>
        <h2>Order no: {responseData.order.orderNumber} </h2>
        <p>Status : {responseData.order.status}</p>
      </div>
    </div>
  );
};

export default OrderSuccess;
