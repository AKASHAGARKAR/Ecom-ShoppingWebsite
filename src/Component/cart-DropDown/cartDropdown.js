import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../Redux/Cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cartItem";
import { toggleCartHidden } from "../Redux/Cart/cartAction";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  CartDropdownButton,
} from './cart-dropdown.style';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItems>
    <CartDropdownButton
      onClick={() => { createStructuredSelector
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = ({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
