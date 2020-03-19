// IMPORT REACT
import React from 'react'

// IMPORT STYLED COMPONENTS
import styled from 'styled-components'

// IMPORT DEPENDENCY FOR DECODE HTML5 ENTITIES
import { Html5Entities } from 'html-entities';

// STYLED
const Table = styled.section`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TableTitle = styled.header`
    width: 100%;
    text-align: left;
    margin-bottom: 10.5px;
`

const TableContent = styled.table`
    width: 100%;
    border-spacing: 0px;
    border-collapse: collapse;
    margin-bottom: 20px;

    & thead {

        background-color: #272727;

        & .id {

            width: 5%;

            & i {
                margin-left: 3px;
                color: #0ce3ac;
                cursor: pointer;
            }
        }

        & .type {
            width: 12%;
        }

        & .difficulty {
            width: 5%;
        }

        & .question {
            width: 48%;
        }
        
        & .created-by {
            width: 10%;
        }
    }

    & tbody {
        background-color: #1a1a1a;
    }

    & th {
        text-align: left;
        font-size: 1.1em;
    }

    & td {
        text-transform: capitalize;
    }

    & td, & th{
        border: 1px solid #3d3c3c;
        padding: 8px 10px;
    }
`

const Pagination = styled.ul`
    list-style: none;
    display: flex;
    border-radius: 6px;
    background-color: #00bc8c;
    overflow: hidden;

    & .active {
        background-color: #0ce3ac;
    }

    & li {
        padding: 10px 25px;
        font-size: 1.3em;
        cursor: pointer;

        &:hover {
            background-color: #0ce3ac;
            transition: 0.5s;
        }
    }
`

const TableComp = props => {
    return (
        <Table>
            <TableTitle>
                <h2>Browse Questions</h2>
            </TableTitle>
            <TableContent>
                <thead>
                    <tr>
                        <th className="id">ID<i className="fas fa-sort"></i></th>
                        <th className="category">Category</th>
                        <th className="type">Type</th>
                        <th className="difficulty">Difficulty</th>
                        <th className="question">Question / Statement</th>
                        <th className="created-by">Created By</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((question, idx) =>
                        <tr key={idx}>
                            <td>{idx}</td>
                            <td>{question.category}</td>
                            <td>{question.type === "boolean" ? "True / False" : "Multiple Choice"}</td>
                            <td>{question.difficulty}</td>
                            <td>{Html5Entities.decode(question.question)}</td>
                            <td className="highlight">Sergio</td>
                        </tr>
                    )}
                </tbody>
            </TableContent>
            <nav>
                <Pagination>
                    <li className="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>></li>
                </Pagination>
            </nav>
        </Table>
    )
}

export default TableComp

