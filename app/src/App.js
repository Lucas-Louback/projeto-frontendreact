import Filter from './Components/Filters/Filter';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Card/Cart';
import { GlobalStyle } from './GlobalStyle';
import { products } from './Assents/productsList';
import { useState } from 'react';

function App() {
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [ordination, setOrdination] = useState("name")
  const [amount, setAmount] = useState("")
  const [cart, setCart] = useState([])
  return (
    <div className="App">
      <GlobalStyle />
      <Filter
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <Home
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
        ordination={ordination}
        setOrdination={setOrdination}
        products={products
          .filter((products) => {
            return products.name.toLowerCase().includes(searchFilter)
          })
          .filter((products) => {
            return products.value >= minFilter || minFilter === ""
          })
          .filter((products) => {
            return products.value <= maxFilter || maxFilter === ""
          })
          .sort((currentRocket, nextRocket) => {
            switch (ordination) {
              case "value":
                return currentRocket.value - nextRocket.value
              default:
                return currentRocket.name.localeCompare(nextRocket.name)
            }
          })
        }  
      />
      <Cart
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}
export default App;