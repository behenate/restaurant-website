const itemsById = {
  pizza0:{
    title: "Margherita",
      desc: "tomato sauce, mozzarella",
    button:"Add to Cart",
    image:"images/listImages/pizza-photo.jpeg",
    price: 21.59,
    id:'pizza0',
    subcategory: null,
    action:"buy"
  },
  pizza1:{
    title: "Pepperoni",
      desc: "tomato sauce, double mozzarella, double pepperoni",
    button:"Add to Cart",
    image:"images/listImages/pizza-photo.jpeg",
    price: 28.99,
    id:"pizza1",
    subcategory: null,
    action:"buy"
  },
  pizza2:{
    title: "Hawaiian",
      desc: "tomato sauce, cheese, pineapple",
    button:"Add to Cart",
    image:"images/listImages/pizza-photo.jpeg",
    price: 25.59,
    id:"pizza2",
    subcategory: null,
    action:"buy"
  },
  pizza3:{
    title: "Carbonara",
      desc: "cream sauce, mozarella, bacon, mushrooms, onion",
    button:"Add to Cart",
    image:"images/listImages/pizza-photo.jpeg",
    price: 26.99,
    id:"pizza3",
    subcategory: null,
    action:"buy"
  },
  pizza4:{
    title: "Toscana",
      desc: "tomato sauce, mozarella, ripening ham, arugula, oregano, corregio cheese",
    button:"Add to Cart",
    image:"images/listImages/pizza-photo.jpeg",
    price: 29.39,
    id:"pizza4",
    subcategory: null,
    action:"buy"
  },
  burger0: {
    title: "American Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    button:"Add to Cart",
    image:"images/listImages/burgers/7.jpg",
    price: 28.59,
    id:"burger0",
    subcategory: null,
    action:"buy"
  },
  burger1:{
    title: "European Burger",
    desc: "Lorem ipsum dolor sit amet.",
    button:"Add to Cart",
    image:"images/listImages/burgers/1.jpg",
    price: 27.99,
    id:"burger1",
    subcategory: null,
    action:"buy"
  },
  burger2: {
    title: "Asian Burger",
    desc: "tomato sauce, cheese, pineapple",
    button:"Add to Cart",
    image:"images/listImages/burgers/2.jpg",
    price: 25.59,
    id:"burger2",
    subcategory: null,
    action:"buy"
  },
  burger3: {
    title: "Antarctican Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, veritatis.",
    button:"Add to Cart",
    image:"images/listImages/burgers/3.png",
    price: 27.00,
    id:"burger3",
    subcategory: null,
    action:"buy"
  },
  burger4:{
    title: "Chef's Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    button:"Add to Cart",
    image:"images/listImages/burgers/4.jpg",
    price: 29.30,
    id:"burger4",
    subcategory: null,
    action:"buy"
  },
  burger5:{
    title: "Australian Burger",
    desc: "Lorem ipsum dolor. And kangaroo meat",
    button:"Add to Cart",
    image:"images/listImages/burgers/5.jpg",
    price: 19.30,
    id:"burger5",
    subcategory: null,
    action:"buy"
  },
  burger6:{
    title: "Italian Burger",
    desc: "Lorem ipsum dolor. With extra italian something",
    button:"Add to Cart",
    image:"images/listImages/burgers/6.jpg",
    price: 39.30,
    id:"burger6",
    subcategory: null,
    action:"buy"
  },
  wrap0:{
    title:"Eastern",
    desc: "Hoisin tofu and spring onion",
    button:"Add to Cart",
    image:"images/listImages/wraps/0.jpg",
    price: 5.30,
    id:"wrap0",
    subcategory: null,
    action:"buy"
  },
  wrap1:{
    title:"Taste of the summer",
    desc: "Avocado, mozzarella and pesto" ,
    button:"Add to Cart",
    image:"images/listImages/wraps/1.jpg",
    price: 4.20,
    id:"wrap1",
    subcategory: null,
    action:"buy"
  },
  wrap2:{
    title:"Spicy peanut chicken",
    desc: "Chicken, chilli, peanut butter",
    button:"Add to Cart",
    image:"images/listImages/wraps/2.jpg",
    price: 6.99,
    id:"wrap2",
    subcategory: null,
    action:"buy"
  },
  wrap3:{
    title:"Veggie wrap",
    desc: "Avo, cucumber and feta",
    button:"Add to Cart",
    image:"images/listImages/wraps/3.jpg",
    price: 2.30,
    id:"wrap3",
    subcategory: null,
    action:"buy"
  },
  addon0:{
    title:"French Fries",
    desc: "From locally sourced tomatoes",
    button:"Add to Cart",
    image:"images/listImages/addons/0.jpg",
    price: 2.30,
    id:"addon0",
    subcategory: null,
    action:"buy"
  },
  addon1:{
    title:"Chicken Nuggets",
    desc: "Nine crispy chicken nuggets",
    button:"Add to Cart",
    image:"images/listImages/addons/1.jpg",
    price: 3.50,
    id:"addon1",
    subcategory: null,
    action:"buy"
  },
  addon2:{
    title:"Salad",
    desc: "Salad from the freshest vegetables",
    button:"Add to Cart",
    image:"images/listImages/addons/2.jpg",
    price: 1.30,
    id:"addon2",
    subcategory: null,
    action:"buy"
  },
  addon3:{
    title:"Apple",
    desc: "A healthy alternative",
    button:"Add to Cart",
    image:"images/listImages/addons/3.jpg",
    price: 0.29,
    id:"addon3",
    subcategory: null,
    action:"buy"
  },
  addon4:{
    title:"Onion Rings",
    desc: "Nine delicious onion rings",
    button:"Add to Cart",
    image:"images/listImages/addons/4.jpg",
    price: 2.49,
    id:"addon4",
    subcategory: null,
    action:"buy"
  },
  drink0:{
    title:"Coca-Cola",
    desc: "500ml",
    button:"Add to Cart",
    image:"images/listImages/drinks/0.jpg",
    price: 1.29,
    id:"drink0",
    subcategory: null,
    action:"buy"
  },
  drink1:{
    title:"Sprite",
    desc: "250ml, glass bottle",
    button:"Add to Cart",
    image:"images/listImages/drinks/1.jpg",
    price: 1.29,
    id:"drink1",
    subcategory: null,
    action:"buy"
  },
  drink2:{
    title:"Beer",
    desc: "Locally brewed, 600ml",
    button:"Add to Cart",
    image:"images/listImages/drinks/3.jpg",
    price: 4.49,
    id:"drink2",
    subcategory: null,
    action:"buy"
  },
  drink3:{
    title:"Dark Beer",
    desc: "Locally brewed,500ml",
    button:"Add to Cart",
    image:"images/listImages/drinks/2.jpg",
    price: 4.49,
    id:"drink3",
    subcategory: null,
    action:"buy"
  },
  drink4:{
    title:"Coffee",
    desc: "Traditional coffee, 150ml",
    button:"Add to Cart",
    image:"images/listImages/drinks/0.jpg",
    price: 2.39,
    id:"drink4",
    subcategory: null,
    action:"buy"
  },
  drink5:{
    title:"Tea",
    desc: "Traditional coffee, 150ml",
    button:"Add to Cart",
    image:"images/listImages/drinks/0.jpg",
    price: 2.39,
    id:"drink5",
    subcategory: null,
    action:"buy"
  }

}

export default itemsById