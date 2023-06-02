import Filter from "../../Filters/Filter"
import Cart from "../../ShoppingCart/Card/Cart"
import Card from "../ProductCard/ProductCard"
import { HomeStyle } from "./HomeStyle"


function Home(props) {
    const { cart, setCart, amount, setAmount, products } = props

    const addToCart = (product) => {
        console.log(product)
        const newProduct = cart.find((item) => item.id === product.id)
        console.log(newProduct)
        if (newProduct === undefined) {
            setCart([...cart, { ...product, amount: 1 }])
        } else {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    console.log(item, product)
                    return { ...item, amount: item.amount + 1 }

                } else {
                    return item
                }
            })
            setCart(newCart)
        }

    }
    


    const renderList = products.map(rockets => {
        return (
            <Card
                id={rockets.id}
                imgUrl={rockets.imgUrl}
                name={rockets.name}
                value={rockets.value}
                addToCart={addToCart}

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