import { FilterStyle } from "./FilterStyle"

function Filter(props) {

    return (
        <FilterStyle>
            <h1>Filtros</h1>

            <form>
                <h3>Procure pelo nome:</h3>
                <input placeholder="Nome do Produto"
                    value={props.searchFilter}
                    onChange={(ev) => props.setSearchFilter(ev.target.value.toLowerCase())} />
                <h3>Preço Mínimo:</h3>
                <input placeholder="Preço mínimo"
                    value={props.minFilter}
                    onChange={(ev) => props.setMinFilter(ev.target.value)} />
                <h3>Preço Máximo:</h3>
                <input placeholder="Preço máximo"
                    value={props.maxFilter}
                    onChange={(ev) => props.setMaxFilter(ev.target.value)} />
            </form>
        </FilterStyle>
    )
}

export default Filter   