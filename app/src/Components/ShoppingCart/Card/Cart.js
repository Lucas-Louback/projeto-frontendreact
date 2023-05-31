import Items from "../Items/Items"
import { CartStyle } from "./CartStyle"


function Cart(props) {
    const {cart, name, value, id, addToCart, products} = props

    return (
        <CartStyle>
            <h2>carrinho</h2>
            {cart.map((products) => {
                return (
                    <Items
                        name={products.name}
                        value={products.value}
                        key={products.id}
                    />
                )
            })}

        </CartStyle>
    )
}

export default Cart