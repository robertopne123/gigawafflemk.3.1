const CheckoutCartItem = ({ item }) => {
  return (
    <tr className="woo-next-cart-item" key={item.productId}>
      <td className="woo-next-cart-element">
        <img
          width="64"
          src={item.image.sourceUrl}
          srcSet={item.image.srcSet}
          alt={item.image.title}
          className="aspect-square object-cover"
        />
      </td>
      <td className="woo-next-cart-element font-poppins">{item.name}</td>
      <td className="woo-next-cart-element font-poppins">{item.totalPrice}</td>
    </tr>
  );
};

export default CheckoutCartItem;
