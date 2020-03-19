// IMPORT REACT
import React from 'react'

// IMPORT STYLED COMPONENTS
import styled from 'styled-components'

// STYLED
const NavBarWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #262a34;
`
const Nav = styled.ul`
    display: flex;
    list-style: none;

    & .link {
        padding: 8px 15px;
        background-color: #0f1015;
        margin-left: 8px;
        text-transform: uppercase;
        font-weight: bold;
        line-height: 14px;
        cursor: pointer;

        &:hover {
            background-color: #5c6378;
            transition: 0.5s;
            box-shadow: 1px 2px 5px 0 rgba(14, 15, 18, 0.15);
        }

        & i {
            margin-right: 3px;
        }
    }
`

const NavBar = () => {
    return (
        <NavBarWrapper>
            <nav>
                <Nav>
                    <li className="link"><i className="fas fa-bars"></i>Browse</li>
                    <li className="link"><i className="fas fa-plus"></i>Add new questions</li>
                    <li className="link"><i className="fas fa-cogs"></i>API</li>
                    <li className="link"><i className="fas fa-comments"></i>Discuss</li>
                    <li className="link"><i className="fas fa-sign-in-alt"></i>Login</li>
                </Nav>
            </nav>
        </NavBarWrapper>
    )
}

export default NavBar

