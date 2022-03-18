import React, {cloneElement, useEffect, useState} from "react";
import "../css/Order.css";
import "../css/List.css"
import CartList from "./CartList";
import Button from "./Button";
import {default as cashIcon} from "./../images/icons/payment/cash.svg";
import {default as paypalIcon} from "./../images/icons/payment/paypal.svg";
import {default as cardIcon} from "./../images/icons/payment/creditcard.svg";
import {useSpringRef, useTransition, animated} from "react-spring";


export default function Order(props) {
  const paypalIcon = require("./../images/icons/payment/paypal.svg").default;
  const cardIcon = require("./../images/icons/payment/creditcard.svg").default;
  const cashIcon = require("./../images/icons/payment/cash.svg").default
  const [formData, setFormData] = useState({});
  const [payment, setPayment] = useState(0);
  const [currentScreen, setCurrentScreen] = useState(0);
  const paymentOptions = [["PayPal", paypalIcon], ["Credit Card", cardIcon], ["Cash", cashIcon]];
  const elemStyle = {
    height: "70px",
    maxWidth: "700px"
  };
  const screens = [
    [
      <div className={"category-title"}>
        <p>Your Order 🍲🍲</p>
      </div>,
      <CartList cart={props.cart} customElemStyle={elemStyle}/>,
      <div className={"order-nav-cont"}>
        <Button onClick={() => setCurrentScreen(currentScreen + 1)}>Order:
          ${Math.round(props.cart.total * 100) / 100}</Button>
      </div>
    ],
    [
      <div className={"category-title"}>
        <p>Where should we ship your order?</p>
      </div>,
      <OrderShippingForm
        submit={(elemProps) => {
          setFormData(elemProps);
          setCurrentScreen(currentScreen + 1);

        }}
        return={() => setCurrentScreen(currentScreen - 1)}/>,
    ],
    [
      <div className={"category-title"}>
        <p>Please pick a payment method</p>
      </div>,
      <div className={"order-payment-cont"}>
        <OrderPayment icon={paypalIcon} onClick={() => setPayment(0)} payment={payment} pIndex={0}>PayPal</OrderPayment>
        <OrderPayment icon={cardIcon} onClick={() => setPayment(1)} payment={payment} pIndex={1}>Card</OrderPayment>
        <OrderPayment icon={cashIcon} onClick={() => setPayment(2)} payment={payment} pIndex={2}>Cash on
          delivery</OrderPayment>
      </div>,
      <div className={"order-nav-cont"}>
        <Button class={"red"} onClick={() => setCurrentScreen(currentScreen - 1)}>Shipping</Button>
        <Button onClick={() => setCurrentScreen(currentScreen + 1)}>Summary</Button>
      </div>
    ],
    [
      <div className={"category-title"}>
        <p>Your Order Summary</p>
      </div>,
      <div className={"order-summary-cont"}>
        <SummaryElem>Name: {formData.name} {formData.lastname}</SummaryElem>
        <SummaryElem>Email: {formData.email}</SummaryElem>
        <SummaryElem>Shipping address: {formData.address}, {formData.zipCode}, {formData.city}</SummaryElem>
        <SummaryElem>Message to delivery driver: {formData.message}</SummaryElem>
        <SummaryElem icon={paymentOptions[payment][1]} label={"Payment: "}>{paymentOptions[payment][0]}</SummaryElem>
      </div>,
      <div className={"order-nav-cont"}>
        <Button onClick={() => setCurrentScreen(currentScreen - 1)} class={"red"}>Payment</Button>
        <Button onClick={() => setCurrentScreen(currentScreen + 1)}>Confirm Order</Button>
      </div>
    ],
    [
      <div className={"order-summary-cont"}>
        <h1> 🥐Thank you for placing an order. Enjoy!🥞</h1>
        <div className={"order-nav-cont"}>
          <Button onClick={() => {
            props.cart.clear();
            setCurrentScreen(0);

            props.return();
          }} class={"red"}>Return to Menu</Button>
        </div>
      </div>
    ],
    [
      <div className={"order-summary-cont"}>
        <h1 style={{textAlign: "center"}}>❗ You need to add something to the cart before ordering!</h1>
        <div className={"order-nav-cont"}>
          <Button onClick={() => {
            props.return();
          }} class={"red"}>Return to Menu</Button>
        </div>
      </div>
    ]
  ];
  useEffect(() => {
    if (props.cart.count === 0) {
      setCurrentScreen(5);
    } else {
      if (currentScreen === 5) {
        setCurrentScreen(0);
      }
    };
  });

  return screens[currentScreen];
}

class OrderShippingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
      message: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnState = this.returnState.bind(this);
    this.render = this.render.bind(this);
  }

  returnState() {
    return this.state;
  }

  handleChange(event, elem) {
    this.setState({[elem]: event.target.value});
  }

  handleSubmit(event) {
    this.props.submit(this.state);
    event.preventDefault();
  }

  render() {
    const nameInput = <input type={"text"}
                             value={this.state.nameInput}
                             className={"order-form-input"}
                             placeholder={"Name"}
                             required={true}
                             onChange={(event) => this.handleChange(event, "name")}
    />;
    const lastnameInput = <input type="text"
                                 value={this.state.lastnameInput}
                                 className={"order-form-input"}
                                 placeholder={"Last Name"}
                                 required={true}
                                 onChange={(event) => this.handleChange(event, "lastname")
                                 }/>;
    const emailInput = <input type="email"
                              value={this.state.emailInput}
                              name="email"
                              placeholder={"E-mail"}
                              className={"order-form-input"}
                              required={true}
                              onChange={(event) => this.handleChange(event, "email")}
    />;
    const addressInput = <input type="text"
                                value={this.state.addressInput}
                                placeholder={"Address"}
                                className={"order-form-input"}
                                required={true}
                                onChange={(event) => this.handleChange(event, "address")}/>
    const cityInput = <input type="text"
                             value={this.state.cityInput}
                             placeholder={"City"}
                             className={"order-form-input"}
                             required={true}
                             onChange={(event) => this.handleChange(event, "city")}
    />
    const zipCodeInput = <input type="text"
                                value={this.state.zipCodeInput}
                                maxLength={6}
                                placeholder={"Zip Code"}
                                className={"order-form-input"}
                                required={true}
                                onChange={(event) => this.handleChange(event, "zipCode")}
    />;
    const messageInput = <textarea cols="30"
                                   rows="10"
                                   value={this.state.messageInput}
                                   placeholder={"Message to delivery driver, you can leave this field blank."}
                                   className={"order-form-input"}
                                   onChange={(event) => this.handleChange(event, "message")}
    />;

    return ([
      <form className={"order-form"} onSubmit={this.handleSubmit}>
        <div className={"order-form-line two"}>
          {nameInput}
          {lastnameInput}
        </div>
        <div className="order-form-line">
          {emailInput}
        </div>
        <div className="order-form-line">
          {addressInput}
        </div>
        <div className="order-form-line two">
          {cityInput}
          {zipCodeInput}
        </div>
        <div className={"order-form-line"}>
          {messageInput}
        </div>
        <div className={"order-nav-cont"}>
          <Button onClick={() => this.props.return()} class={"red"}>Your Order</Button>
          <input type="submit" className={"button"} value={"Payment"}/>
        </div>
      </form>,
    ])
  }
}

function OrderPayment(props) {
  const highlight = props.payment === props.pIndex ? {
    border: "1px solid lightgreen",
    boxShadow: "0 0 5px lightgreen"
  } : null;
  return <div className={"order-payment-elem"} onClick={() => props.onClick()} style={highlight}>
    <img src={props.icon} alt=""/>
    <p>{props.children}</p>
  </div>
}

function SummaryElem(props) {
  const icon = props.icon ? <img src={props.icon} alt=""/> : null;
  const label = props.label ? <p>{props.label}</p> : null;
  return <div className={"order-summary-elem"}>
    {label}
    {icon}
    <p>{props.children}</p>
  </div>
}