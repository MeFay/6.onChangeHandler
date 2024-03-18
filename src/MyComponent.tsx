import { useState } from "react";
import {
  StyledDiv,
  StyledP,
  StyledInput,
  StyledSelect,
  StyledLabel,
} from "./styles";
//onChange is an event handler used primarily ith form elements (ex: <input>, <textarea>, <select>, <radio>)
//it triggers a function very time the value of the input changes

const MyComponent = () => {
  const [name, setName] = useState("Guest");
  const [comment, setComment] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <StyledDiv>
      <StyledInput value={name} onChange={handleNameChange} />
      <StyledP>Name: {name}</StyledP>

      <StyledInput
        value={quantity}
        onChange={handleQuantityChange}
        type="number"
      />
      <StyledP>Quantity: {quantity}</StyledP>

      <StyledInput
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      />
      <StyledP>Comment: {comment}</StyledP>

      <StyledSelect value={payment} onChange={handlePaymentChange}>
        <option value={""}>Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Master Card">Master Card</option>
        <option value="MbWay">Mb Way</option>
        <option value="GiftCard">Gift Card</option>
      </StyledSelect>
      <StyledP>Payment chosen: {payment}</StyledP>

      <StyledLabel>
        <StyledInput
          type="radio"
          value="PickUp"
          checked={shipping === "PickUp"}
          onChange={handleShippingChange}
        />
        Pick up
      </StyledLabel>
      <StyledLabel>
        <StyledInput
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </StyledLabel>
      <StyledP>Shipping: {shipping}</StyledP>
    </StyledDiv>
  );
};

export default MyComponent;
