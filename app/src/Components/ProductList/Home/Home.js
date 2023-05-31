import Cart from "../../ShoppingCart/Card/Cart"
import Card from "../ProductCard/ProductCard"
import { HomeStyle } from "./HomeStyle"


function Home(props) {
    const {cart, setCart, amount, setAmount, products} = props
    
    const addToCart = (id) => {
        console.log(props.id)
        const newProduct = cart.find((item) =>  item.id === id )
        if (newProduct === undefined) {
            setCart([...Cart, { ...products, amount: 1, }])
        }
        
    }
    const renderList = products.map(rockets => {
        return (
            <Card
                id={rockets.id}
                imgUrl={rockets.imgUrl}
                name={rockets.name}
                value={rockets.value}
                addToCart = {addToCart}
            />
        )
    })
    return (
        <HomeStyle>
            <label for="ordination">Ordenar por: </label>
            <select
                value={props.ordination}
                onChange={ev => { props.setOrdination(ev.target.value) }}>
                <option value={"name"}>A-Z</option>
                <option value={"value"}>Preço: $-$$$</option>

            </select>
            <div className="Header">
                <h1>Produtos</h1>
            </div>
            <main>
                {renderList}
            </main>
            {/* <Cart
            cart = {cart}
            addToCart = {addToCart}
            />  */}
        </HomeStyle>
    )
}
export default Home