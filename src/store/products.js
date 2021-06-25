const initialState = {
  count: 0,
  total: 0,
  products: [
    {
      product_id: 'fff111fff01',
      title: '1TB USB',
      description: 'Crucial X8 1TB Portable SSD – Up to 1050MB/s – USB 3.2 – External Solid State Drive, USB-C, USB-A – CT1000X8SSD9Crucial X8 1TB Portable SSD – Up to 1050MB/s – USB 3.2 – External Solid State Drive, USB-C,',
      category: 'Electronics',
      quantity: 500,
      Count: 500,
      price: 70.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjm0EPGJYL2Df0bE1RhCcd4uZbluXdnZELus3J39GBvgEWaBmDVFYS9DoYvd46W7XvgNI&usqp=CAU'
    },
    {
      product_id: 'fff111fff11',
      title: 'Monitor',
      description: 'HP Pavilion 22cwa 21.5-Inch Full HD 1080p IPS LED Monitor, Tilt, VGA and HDMI (T4Q59AA) - Black,HP Pavilion 22cwa 21.5-Inch Full HD 1080p IPS LED Monitor, Tilt, VGA and HDMI (T4Q59AA) - Black',
      category: 'Electronics',
      quantity: 10,
      Count: 10,
      price: 149.99,
      image: 'https://images.samsung.com/is/image/samsung/levant-led-monitor-s24f350fhm-ls24f350fhmxzn-frontblack-76804078?$720_576_PNG$'

    },
    {
      product_id: 'fff111fff21',
      title: 'Mouse',
      description: 'Redragon M602 RGB Wired Gaming Mouse RGB Spectrum Backlit Ergonomic Mouse Griffin Programmable with 7 Backlight Modes up to 7200 DPI for Windows PC Gamers (Black)',
      category: 'Electronics',
      quantity: 200,
      Count: 200,
      price: 15.00,
      image: 'https://resource.logitechg.com/w_460,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_2.0/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-hero.png?v=1'

    },
    {
      product_id: 'fff111fff31',
      title: 'Keyboard',
      description: 'FIODIO Membrane Gaming Keyboard, Wired RGB Rainbow Backlit Keyboard, Ergonomic Standard Keyboard for Desktop, Computer and PC, Silver-Black (FK-2028-US)',
      category: 'Electronics',
      quantity: 250,
      Count: 250,
      price: 20.00,
      image: 'https://static.cazasouq.com/image/cache/catalog/rzrhwhi-550x550w.jpg'

    },
    {
      product_id: 'fff111fff41',
      title: 'TV',
      description: 'Insignia NS-39DF310NA21 39-inch Smart HD 720p TV - Fire TV Edition,Insignia NS-39DF310NA21 39-inch Smart HD 720p TV - Fire TV Edition',
      category: 'Electronics',
      quantity: 20,
      Count: 20,
      price: 799.00,
      image: 'https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua55tu8000uxtw-frontblack-229856496?$720_576_PNG$'
    },
    {
      product_id: 'fff111fff51',
      title: 'Apples',
      description: 'Gala Apples Fresh Produce Fruit, 3 LB Bag,Gala Apples Fresh Produce Fruit, 3 LB Bag,Gala Apples Fresh Produce Fruit, 3 LB Bag',
      category: 'Food',
      quantity: 50,
      Count: 50,
      price: 1.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHf6Jyeaszdn-sJ6exsJSn5jqlzgrjTL9LuJWqy_fO7a-5pM5IZRYib0jQsMVZm-J_nc0&usqp=CAU'
    },
    {
      product_id: 'fff111fff61',
      title: 'Calzones',
      description: 'Easy Calzones are stuffed full of pepperoni and mozzarella,Easy Calzones are stuffed full of pepperoni and mozzarella,Easy Calzones are stuffed full of pepperoni and mozzarella',
      category: 'Food',
      quantity: 20,
      Count: 20,
      price: 4.00,
      image: 'https://images-gmi-pmc.edge-generalmills.com/9df0ff18-e881-4221-ac91-710b37668b03.jpg',
    },


    {
      product_id: 'fff111fff1',
      description: 'Pasta Puttanesca is a classic Italian pasta dish thats ready in under 40 minutes! Make it with canned tomato paste and crushed tomatoes, canned anchovies',
      title: 'Pizza',
      category: 'Food',
      price: 50,
      quantity: 15,
      Count: 15,
      image: 'https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg'
    },
    {
      product_id: 'fff111fff2',
      title: 'Pasta',
      description: 'Pasta Puttanesca is a classic Italian pasta dish thats ready in under 40 minutes! Make it with canned tomato paste and crushed tomatoes, canned anchovies',
      category: 'Food',
      price: 40,
      quantity: 50,
      Count: 50,
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?quality=90&resize=440%2C400'
    },
    {
      product_id: 'fff111fff3',
      title: 'Creamy Garlic Chicken',
      description: 'Pasta Puttanesca is a classic Italian pasta dish thats ready in under 40 minutes! Make it with canned tomato paste and crushed tomatoes, canned anchovies',
      category: 'Food',
      price: 70,
      quantity: 40,
      Count: 40,
      image: 'https://cookthestory.com/wp-content/uploads/2019/11/Creamy-Garlic-Chicken-1392x780.jpg'
    },
    {
      product_id: 'fff111fff4',
      title: 'salad',
      description: 'Pasta Puttanesca is a classic Italian pasta dish thats ready in under 40 minutes! Make it with canned tomato paste and crushed tomatoes, canned anchovies',
      category: 'Food',
      price: 40,
      quantity: 45,
      Count: 45,
      image: 'https://img.bestrecipes.com.au/4bBXatUR/w643-h428-cfill-q90/br/2019/10/spiced-lamb-sausage-fattoush-954624-1.jpg'
    },
    {
      product_id: 'fff111fff5',
      title: 'Burger',
      description: 'Pasta Puttanesca is a classic Italian pasta dish thats ready in under 40 minutes! Make it with canned tomato paste and crushed tomatoes, canned anchovies',
      category: 'Food',
      price: 40,
      quantity: 55,
      Count: 55,
      image: 'https://www.telegraph.co.uk/content/dam/recipes/2020/06/24/burger_trans_NvBQzQNjv4BqdtaxvlHqYPsdUgQyQhTjC0kV-fxhmkakBrobUzFV1S4.png'
    },
  ],
  activeProduct: ''
}

export default function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ACTIVE':
      const products = getProducts(payload.category);
      products.map(product => {
        product.Count = product.quantity;
        return product;
      })

      return { ...state, products: products };

    default:
      return state;
  }
}

export function getProducts(category) {
  let products = initialState.products;

  const products1 = products.filter(element => {
    if (element.category === category) {
      return true;
    }
  });
  return products1;
}
