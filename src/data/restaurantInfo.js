export const categories = {
  pizzas: [
    {
      id:'pizza0',
      subcategory: null,
      action:"buy"
    },
    {
      id:'pizza1',
      subcategory: null,
      action:"buy"
    },
    {
      id:'pizza2',
      subcategory: null,
      action:"buy"
    },
    {
      id:'pizza3',
      subcategory: null,
      action:"buy"
    },
    {
      id:'pizza4',
      subcategory: null,
      action:"buy"
    },
  ],
  burgers:[
    {
      id:"burger0",
      subcategory: null,
      action:"buy"
    },
    {
      id:"burger1",
      subcategory: null,
      action:"buy"
    },
    {
      id:"burger2",
      subcategory: null,
      action:"buy"
    },
    {
      id:"burger3",
      subcategory: null,
      action:"buy"
    },
    {
      id:"burger4",
      subcategory: null,
      action:"buy"
    },
    {
      id:"burger5",
      subcategory: null,
      action:"buy"
    },
    {
      id:"burger6",
      subcategory: null,
      action:"buy"
    },
  ],
  wraps: [
    {
      id: "wrap0",
      subcategory: null,
      action:"buy"
    },
    {
      id: "wrap1",
      subcategory: null,
      action:"buy"
    },
    {
      id: "wrap2",
      subcategory: null,
      action:"buy"
    },
    {
      id: "wrap3",
      subcategory: null,
      action:"buy"
    }
  ],
  addons:[
    {
      id: "addon0",
      subcategory: null,
      action:"buy"
    },
    {
      id: "addon1",
      subcategory: null,
      action:"buy"
    },
    {
      id: "addon2",
      subcategory: null,
      action:"buy"
    },
    {
      id: "addon3",
      subcategory: null,
      action:"buy"
    },
    {
      id: "addon4",
      subcategory:null,
      action:"buy"
    }
  ],
  drinks:[
    {
      id: "drink0",
      subcategory: null,
      action:"buy"
    },
    {
      id: "drink1",
      subcategory: null,
      action:"buy"
    },
    {
      id: "drink2",
      subcategory: null,
      action:"buy"
    },
    {
      id: "drink3",
      subcategory: null,
      action:"buy"
    },
    {
      id: "drink4",
      subcategory:null,
      action:"buy"
    }
  ]
}

export const categoriesList = {
  categoryTitle: "What would you like to eat?",
  items:[
  {
    title: "Pizzas",
    desc: "Enjoy our wide selection of pizzas",
    button:"Pizzas",
    image:"images/listImages/pizza-photo.jpeg",
    id:0,
    subcategory: categories.pizzas,
    action:"sublist"
  },
  {
    title: "Burgirs",
    desc: "Burgir burgir burgir burgir burgir Lorem ipsum dolor sit amet.",
    button:"Burgirs",
    image:"images/listImages/burgirKid.jpg",
    id:1,
    subcategory: categories.burgers,
    action:"sublist"
  },
  {
    title: "Wraps",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, laudantium!",
    button:"Wraps",
    image:"images/listImages/tortilla.jpg",
    id:2,
    action:"sublist",
    subcategory: categories.wraps,
  },
  {
    title: "Addons",
    desc: "Main course is not enough? Grab something to fill you!",
    button:"Addons",
    image:"images/listImages/french-fries.jpeg",
    id:3,
    action:"sublist",
    subcategory: categories.addons,
  },
  {
    title: "Drinks",
    desc: "Pick something to drink!",
    button:"Drinks",
    image:"images/listImages/cola.jpeg",
    id:4,
    action:"sublist",
    subcategory: categories.drinks
  }
]
};
export default categoriesList;