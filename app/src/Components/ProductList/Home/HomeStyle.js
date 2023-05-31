import styled from 'styled-components'
import { GlobalStyle } from '../../../GlobalStyle'

export const HomeStyle = styled.div`
h1{
    top:0;
    position:sticky;
    padding-left: 3vh;
}

main{
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding:2vh;
justify-content:center;
align-items:center;
padding: 1rem;

}

label{
    color: var(--soft-white)
}
`