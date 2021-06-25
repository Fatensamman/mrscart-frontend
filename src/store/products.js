const initialState = {
  count: 0,
  total:0,
  products : [
    {
      _id: 'fff111fff1',
      description:'Pasta Puttanesca is a classic Italian pasta dish thats ready in under 40 minutes! Make it with canned tomato paste and crushed tomatoes, canned anchovies',
      name: 'Pizza',
      category: 'Food',
      price: 50,
      inStock: 15,
      Count: 15,
      imgUrl: 'https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg'
    },
    {
      _id: 'fff111fff2',
      name: 'Pasta',
      description:'Pasta Puttanesca is a classic Italian pasta dish thats ready in under 40 minutes! Make it with canned tomato paste and crushed tomatoes, canned anchovies',
      category: 'Food',
      price: 40,
      inStock: 50,
      Count: 50,
      imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?quality=90&resize=440%2C400'
    },
    {
      _id: 'fff111fff3',
      name: 'Creamy Garlic Chicken',
      description:'Pasta Puttanesca is a classic Italian pasta dish thats ready in under 40 minutes! Make it with canned tomato paste and crushed tomatoes, canned anchovies',
      category: 'Food',
      price: 70,
      inStock: 40,
      Count: 40,
      imgUrl: 'https://cookthestory.com/wp-content/uploads/2019/11/Creamy-Garlic-Chicken-1392x780.jpg'
    },
    {
      _id: 'fff111fff4',
      name: 'salad',
      description:'Pasta Puttanesca is a classic Italian pasta dish thats ready in under 40 minutes! Make it with canned tomato paste and crushed tomatoes, canned anchovies',
      category: 'Food',
      price: 40,
      inStock: 45,
      Count: 45,
      imgUrl: 'https://img.bestrecipes.com.au/4bBXatUR/w643-h428-cfill-q90/br/2019/10/spiced-lamb-sausage-fattoush-954624-1.jpg'
    },
    {
      _id: 'fff111fff5',
      name: 'Burger',
      description:'Pasta Puttanesca is a classic Italian pasta dish thats ready in under 40 minutes! Make it with canned tomato paste and crushed tomatoes, canned anchovies',
      category: 'Food',
      price: 40,
      inStock: 55,
      Count: 55,
      imgUrl: 'https://www.telegraph.co.uk/content/dam/recipes/2020/06/24/burger_trans_NvBQzQNjv4BqdtaxvlHqYPsdUgQyQhTjC0kV-fxhmkakBrobUzFV1S4.png'
    },
  ],
  activeProduct: ''
}

export default function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ACTIVE':
      const products = getProducts(payload.category);
        let p1 = products.map(product => {
          product.Count = product.inStock;
          return product;
      })

      return { ...state, products: products };

    default:
      return state;
  }
}

export function getProducts(category) {
  const products = initialState.products;

  const products1 = products.filter(element => {
    if (element.category === category) {
      return true;
    }
  })
  return products1;
}