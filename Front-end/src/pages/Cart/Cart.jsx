import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHome, FaChevronRight } from 'react-icons/fa';

export const deliveryFee = 50;
const validPromoCode = "New20";

const Cart = ({ setShowLogin }) => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    getTotalQuantity,
    URL,
    token
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
    <div className="">
      {/* start :: navigation */}
      <div className="h-14 flex items-center bg-orange-50 justify-center px-2">
        <div className="flex items-center">
          <ol aria-label="Breadcrumb" className="flex min-w-0 items-center gap-2 whitespace-nowrap">
            <li className="text-sm">
              <Link
                className="flex items-center gap-2 align-middle leading-none text-default-800 transition-all hover:text-primary-500"
                to={'/'}
              >
                <FaHome size={16} />
                Home
                <FaChevronRight size={16} />
              </Link>
            </li>
            <li
              aria-current="page"
              className="cursor-pointer truncate text-sm font-medium text-black hover:text-orange-500"
            >
              Cart
            </li>
          </ol>
        </div>
      </div>
      {/* end :: navigation */}
      <section className="max-w-7xl mx-auto">
        <div className="py-6 lg:py-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* start :: cart details section */}
            <div className="col-span-2">
              <div className="rounded-lg border border-default-200">
                <div className="border-b border-default-200 px-6 py-5">
                  <h4 className="text-lg font-medium text-default-800">Shopping Cart</h4>
                </div>
                <div className="flex flex-col overflow-hidden">
                  <div className="-m-1.5 overflow-x-auto">
                    <div className="inline-block min-w-full p-1.5 align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-default-200">
                          <thead className="bg-default-400/10">
                            <tr>
                              <th scope="col"
                                className="min-w-[14rem] px-5 py-3 text-start text-xs font-medium uppercase text-default-500">
                                Products</th>
                              <th scope="col"
                                className="px-5 py-3 text-start text-xs font-medium uppercase text-default-500">
                                Price</th>
                              <th scope="col"
                                className="px-5 py-3 text-start text-xs font-medium uppercase text-default-500">
                                Quantity</th>
                              <th scope="col"
                                className="px-5 py-3 text-start text-xs font-medium uppercase text-default-500">
                                Remove</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-default-200">
                            {totalQuantity === 0 ? (
                              <p className="NoItems py-4 text-center">No Items in cart</p>
                            ) : (
                              food_list.map((item) => {
                                if (cartItems[item._id] > 0) {
                                  return (
                                    <tr key={item.id}>
                                      <td className="whitespace-nowrap px-5 py-3">
                                        <div className="flex items-center gap-2">
                                          <img src={URL + "/images/" + item.image} alt="food img" width="72" height="72" className="h-18 w-18" />
                                          <p
                                            className="text-sm font-medium text-default-800"
                                          >{item.name}
                                          </p>
                                        </div>
                                      </td>
                                      {/* price */}
                                      <td className="whitespace-nowrap px-5 py-3 text-sm">
                                        <h4 className="text-base font-semibold text-primary">&#x20b9;{item.price}</h4>
                                      </td>
                                      {/* price */}

                                      {/* Quantity */}
                                      <td className="whitespace-nowrap px-5 py-3">
                                        <div
                                          className="relative z-10 inline-flex items-center justify-between rounded-full border border-default-200 p-1">
                                          <p className="min-w-[45px] text-center"> {cartItems[item._id]} </p>
                                        </div>
                                      </td>
                                      {/* Quantity */}

                                      {/* remove btn */}
                                      <td className="whitespace-nowrap px-5 py-3">
                                        <button onClick={() => removeFromCart(item._id)}>
                                          <svg
                                            stroke="currentColor" fill="none" stroke-width="2"
                                            viewBox="0 0 24 24" stroke-linecap="round"
                                            stroke-linejoin="round" className="text-default-400"
                                            height="20" width="20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="m15 9-6 6"></path>
                                            <path d="m9 9 6 6"></path>
                                          </svg>
                                        </button>
                                      </td>
                                      {/* remove btn */}
                                    </tr>

                                  )
                                }

                              })

                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-default-200 px-6 py-5">
                  <div className="flex flex-wrap items-center justify-between gap-2"><Link
                    className="inline-flex items-center justify-center rounded-lg border border-orange-500 px-5 py-3 text-center text-sm font-medium text-orange-400 shadow-sm transition-all duration-500 hover:bg-orange-400 hover:text-white"
                    to={'/'}>Shop More</Link></div>
                </div>
              </div>
            </div>
            {/*  end :: cart details section */}

            {/* start :: total price && cupon code  section */}
            <div>

              {/* start :: cart total price section */}
              <div className="mb-5 rounded-lg border border-default-200 p-5">
                <h4 className="mb-5 text-lg font-semibold text-default-800">Cart Total</h4>
                <div className="mb-6">
                  <div className="mb-3 flex justify-between">
                    <p className="text-sm text-default-500">Sub-total</p>
                    <p className="text-sm font-medium text-default-700">&#x20b9;{subtotal}</p>
                  </div>
                  <div className="mb-3 flex justify-between">
                    <p className="text-sm text-default-500">Delivery</p>
                    <p className="text-sm font-medium text-default-700">&#x20b9;{deliveryFeeApplied}</p>
                  </div>
                  <div className="mb-3 flex justify-between">
                    <p className="text-sm text-default-500">Discount {" "} 20%</p>
                    <p className="text-sm font-medium text-default-700">&#x20b9;{discount}</p>
                  </div>
                  <div className="my-4 border-b border-default-200"></div>
                  <div className="mb-3 flex justify-between">
                    <p className="text-base text-default-700">Total</p>
                    <p className="text-base font-medium text-default-700">&#x20b9;{totalAmount}</p>
                  </div>
                </div>
                {!token ? (
                  <button
                    disabled={subtotal === 0}
                    onClick={() => setShowLogin(true)}
                    className="inline-flex w-full items-center justify-center rounded-lg border border-primary bg-orange-400 px-10 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-500 hover:bg-orange-400-500"
                  >Proceed to Checkout</button>
                ) : (
                  <button
                    disabled={subtotal === 0}
                    onClick={proceedToCheckout}
                    className="inline-flex w-full items-center justify-center rounded-lg border border-primary bg-orange-400 px-10 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-500 hover:bg-orange-400-500"
                  >Proceed to Checkout</button>
                )}

              </div>
              {/* end :: cart total price section */}


              {/* start :: coupon code section */}
              <div className="rounded-lg border border-default-200">
                <div className="border-b border-default-200 px-6 py-5">
                  <h4 className="text-lg font-semibold text-default-800">Coupon Code</h4>
                </div>
                <div className="p-6">
                  <div className="relative max-w-full">
                    <div className="relative max-w-full">
                      <input placeholder="Enter Coupon Code"
                        className="form-input rounded-lg border border-default-200 px-4 py-2.5 w-full block bg-transparent outline-none"
                        value={enteredPromoCode}
                        onChange={(e) => setEnteredPromoCode(e.target.value)}
                      />

                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={applyPromoCode}
                      className="inline-flex items-center justify-center rounded-lg border border-primary bg-orange-500 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-500 hover:bg-orange-400-500">Apply
                      Coupon</button>
                  </div>

                  {promoApplied && (
                    <div className="promo-actions mt-4 text-center flex items-center justify-center gap-5">
                      <p className="text-green-400 font-semibold">Promo code applied.</p>
                      <button className="text-red-400 font-medium" onClick={removePromoCode}>Remove</button>
                    </div>
                  )}


                </div>
              </div>
              {/* end :: coupon code section */}

            </div>
            {/* end :: total price & cupon code section */}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Cart;
