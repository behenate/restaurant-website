import React, {useEffect} from "react";
import "../css/List.css";
import TopNavbar from "./TopNavbar";
import List from "./List";
import About from "./About";
import Order from "./Order";
import categories from "../data/restaurantInfo";
// import categoriesList from "../data/restaurantInfo";
// import {default as back_icon_img} from "./../images/icons/back_black.svg";


export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.setNewListEntries = this.setNewListEntries.bind(this);
    this.listCnt = 0;
    this.state = {
      lists:[<List listElems={categories.items}
                   key={this.listCnt}
                   setNewListEntries={this.setNewListEntries}
                   addToCart={props.addToCart}
                   entriesHistory={[categories.items]}/>],
      entriesHistory:[categories.items],
      page:0
    }
  }
  setNewListEntries(entries, returns) {
    const newList = [...this.state.lists];
    const newHistory =[...this.state.entriesHistory];
    const prevEntry = this.state.entriesHistory.length > 1 ? this.state.entriesHistory[this.state.entriesHistory.length-2]: null;
    if (returns){
      entries = prevEntry;
      newHistory.pop();
    }
    if (newList.length >= 2){
      newList.shift();
    }
    if (newList[0]) {
      newList[0] = React.cloneElement(
        newList[0],
        {
          listElems: [],
          categoryTitle: "",
          delay: 0
        }
      )
    }
    this.listCnt++;
    newList.push(<List listElems={entries} key={this.listCnt} delay={200} setNewListEntries={this.setNewListEntries}
                       cart={this.props.cart}
                       entriesHistory={this.state.entriesHistory}/>);
    if (!returns){
      newHistory.push(entries);
    }
    this.setState({lists:newList, entriesHistory:newHistory});
  }
  backToMenu(){
    this.setState({page:0});
  }

  cartIndicatorRenderCheck(prevState){
    if (!prevState){
      prevState=10000;
    }
    if(prevState.page !== this.state.page)
      this.props.cart.setDisplay(this.state.page === 0);
    console.log(this.props.cart.display, this.props.cart.count)
    if (this.props.cart.display === 1 && this.props.cart.count===0)
      this.props.cart.setDisplay(0);
  }
  componentDidMount() {
    this.cartIndicatorRenderCheck();
  }

  //If on other page than main menu dont render cart indicator
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.cartIndicatorRenderCheck(prevState);
  }

  render(){
    const back_icon_img = require("./../images/icons/back_black.svg").default;
    const back_icon = this.state.entriesHistory.length > 1 ? <div className={"list-back-icon"} onClick={() => this.setNewListEntries(null, true)}>
      <img src={back_icon_img} alt=""/>
    </div> : null;
    const mainMenu = [
      <div className="category-title" key={-1}>
        <p>{categories.categoryTitle}</p>
      </div>,
      back_icon,
      this.state.lists.map((elem) => elem),
    ];
    const pages = [mainMenu, <About cart={this.props.cart}/>,null, <Order cart={this.props.cart} return={()=>this.setState({page:0})}/>];
    return ([
      <TopNavbar key={0} cart={this.props.cart} curent={this.state.page} onClick={()=>this.setState({page: 0})} buttons={[
        ["Menu", () =>this.setState({page:0})],
        ["About Us", () => this.setState({page:1})],
        ["Change Restaurant", () => this.props.setRestaurant()],
        ["Order", () => this.setState({page:3})]
      ]} />,
      pages[this.state.page]]
    );
  }
}
