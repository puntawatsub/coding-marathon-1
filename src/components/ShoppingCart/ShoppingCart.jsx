import { useState } from "react";
import "./shoppingCart.css";
import Item from "./Item";

function ShoppingCart() {
  const [items, setItems] = useState([]);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [tax, setTax] = useState("");
  const [availability, setAvailability] = useState("");

  function addItem(e) {
    e.preventDefault();

    const newItem = {
      name,
      brand,
      subtotal,
      tax,
      availability
    };

    setItems([...items, newItem]);

    setName("");
    setBrand("");
    setSubtotal("");
    setTax("");
    setAvailability("");
  }

  function deleteItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <form onSubmit={addItem} className="cart-form">
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Subtotal"
          value={subtotal}
          onChange={(e) => setSubtotal(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Tax"
          value={tax}
          onChange={(e) => setTax(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Availability (In stock / Out of stock)"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </form>

      <ul className="cart-list">
        {items.map((item, index) => (
          <Item
            key={index}
            item={item}
            onDelete={() => deleteItem(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
