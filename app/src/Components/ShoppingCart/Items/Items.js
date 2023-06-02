import { ItemsStyle } from "./ItemsStyle"

function Items(props) {
    const {name, value, amount, deleteProductCart, id} = props
    // console.log(props)
    return (
        <ItemsStyle>
            <h4>nome: {name} / valor: {value} quantidade: {amount}</h4>
            <button onClick={() => deleteProductCart(props) }>x</button>
        </ItemsStyle>
    )
}

export default Items