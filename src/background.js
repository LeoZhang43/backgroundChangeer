import styled from 'styled-components'
import { useProductsContext } from './products_context';

const Backgorund = () => {
    const {isBlack} = useProductsContext();
    // const isBlack = true;
    return(
        <Wrapper>
            <div className={`${isBlack ? 'black' : 'white'}`}>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .black{
        height: 100vh;
        width: 100vw;
        background-color: black;
    }
    .white{
        height: 100vh;
        width: 100vw;
        background-color: white;
    }
`
export default Backgorund