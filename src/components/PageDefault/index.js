import React from 'react'
import Footer from '../Footer'
import Menu from '../Menu'
import Styled from 'styled-components'

const Main = Styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 20px;
`

function PageDefault({children}) {
    return (
        <Main>
            <Menu/>
                {children}
            <Footer/>
        </Main>
    )
}

export default PageDefault