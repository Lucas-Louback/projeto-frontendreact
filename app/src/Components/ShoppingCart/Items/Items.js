import { ItemsStyle } from "./ItemsStyle"

function Items(props) {
    const {name, value} = props
    return (
        <ItemsStyle>
            <h3>nome: {name}</h3>
            <h3>valor: {value}</h3>
        </ItemsStyle>
    )
}

export default Items