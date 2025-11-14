function Item({ item, onDelete }) {
  return (
    <li className="cart-item">
      <h3>{item.name}</h3>

      <p><strong>Brand:</strong> {item.brand}</p>
      <p><strong>Subtotal:</strong> €{item.subtotal}</p>
      <p><strong>Tax:</strong> €{item.tax}</p>
      <p><strong>Availability:</strong> {item.availability}</p>

      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default Item;


