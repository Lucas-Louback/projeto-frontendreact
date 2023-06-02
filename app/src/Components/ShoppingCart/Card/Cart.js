import Items from "../Items/Items"
import { CartStyle } from "./CartStyle"


function Cart(props) {
    const { cart, name, value, id, addToCart, products, setCart } = props

    const deleteProductCart = (product) => {
        console.log(product)
        const productToDelete = cart.find((item) => item.id === product.id)
        console.log(productToDelete)
        if (product.amount > 1) {
            const newCart = cart.map((item) => {

                if (item.id === product.id) {
                    return { ...item, amount: item.amount - 1 }
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            const newCart = cart.filter((item) => {
                return item.id !== product.id
            })
            setCart(newCart)
        }

    }

    const calculaCarrinho = () => {
        let total = 0
        cart.map((product) => {
            total += product.value*product.amount
        })
        return total
    }

    return (
        <CartStyle>
            <h2>carrinho</h2>
            {cart.map((product) => {
                return (
                    <Items
                        id={product.id}
                        name={product.name}
                        value={product.value}
                        key={product.id}
                        amount={product.amount}
                        deleteProductCart={deleteProductCart}
                    />
                )
            })}
            <h2>Valor total: </h2>
            <h3>{calculaCarrinho()}</h3>
        </CartStyle>
    )
}

export default Cart