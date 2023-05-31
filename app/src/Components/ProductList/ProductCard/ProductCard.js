import { CardStyle } from "./ProductCardStyle"

function Card(props) {
    const { imgUrl, name, value, addToCart } = props
    return (
        <CardStyle>
            <div>
                <img src= {imgUrl}></img>
                <p>{name}</p>
                <p>value: {value}</p>
                <button onClick={() => addToCart(props) }>Adicionar ao carrinho</button>
            </div>
        </CardStyle>
    )
}

export default Card