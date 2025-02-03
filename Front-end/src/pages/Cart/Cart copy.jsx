import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

export const deliveryFee = 50;
const validPromoCode = "New20";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    getTotalQuantity,
    URL
  } = useContext(StoreContext);
  const [enteredPromoCode, setEnteredPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const totalQuantity = getTotalQuantity();
  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();
  const discountAmount = subtotal * 0.05; // 5% discount
  const deliveryFeeApplied = subtotal === 0 ? 0 : deliveryFee;

  const applyPromoCode = () => {
    if (enteredPromoCode.trim() === "") {
      alert("Promo code cannot be empty");
      return;
    }

    if (enteredPromoCode === validPromoCode) {
      setDiscount(discountAmount);
      setPromoApplied(true);
      alert("Promo code applied successfully");
    } else {
      setDiscount(0);
      setPromoApplied(false);
      alert("Promo code is not valid");
    }
  };

  const removePromoCode = () => {
    setEnteredPromoCode("");
    setDiscount(0);
    setPromoApplied(false);
  };

  const totalAmount = subtotal + deliveryFeeApplied - discount;

  const proceedToCheckout = () => {
    navigate("/order", {
      state: {
        cartItems,
        subtotal,
        discountAmount,
        deliveryFee: deliveryFeeApplied,
        totalAmount,
        promoApplied,
        promoCode: enteredPromoCode
      }
    });
  };

  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title cart-heading">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {totalQuantity === 0 ? (
            <p className="NoItems">No Items in cart</p>
          ) : (
            food_list.map((item) => {
              if (cartItems[item._id] > 0) {
                return (
                  <React.Fragment key={item._id}>
                    <div
                      className="cart-items-title cart-items-item"
                      key={item._id}
                    >
                      <img src={URL+"/images/"+item.image} alt="food img" />
                      <p>{item.name}</p>
                      <p>&#x20b9;{item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>&#x20b9;{item.price * cartItems[item._id]}</p>
                      <p
                        className="Remove"
                        onClick={() => removeFromCart(item._id)}
                      >
                        <img
                          src={assets.remove_icon_cross}
                          alt="remove_icon_cross"
                        />
                      </p>
                    </div>
                    <hr key={`hr-${item._id}-${item.price}`} />
                  </React.Fragment>
                );
              }
            })
          )}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>&#x20b9;{subtotal}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>&#x20b9;{deliveryFeeApplied}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>5% Discount</p>
                <p>&#x20b9;{discount}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>&#x20b9;{totalAmount}</b>
              </div>
            </div>
            <button
              disabled={subtotal === 0}
              onClick={proceedToCheckout}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, enter it here</p>
              <div className="cart-promocode-input">
                <input
                  type="text"
                  placeholder="Promo Code"
                  value={enteredPromoCode}
                  onChange={(e) => setEnteredPromoCode(e.target.value)}
                />
                <button onClick={applyPromoCode}>Submit</button>
              </div>
              {promoApplied && (
                <div className="promo-actions">
                  <p>Promo code applied. <button onClick={removePromoCode}>Remove</button></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
