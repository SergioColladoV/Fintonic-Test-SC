// IMPORT REACT
import React, { Component } from 'react'

// IMPORT STYLED COMPONENTS
import styled from 'styled-components'

// STYLED
const FilterWrapper = styled.div`
    width: 50%;
    margin-bottom: 20px;

    & input {
        width: 100%;
        height: 40px;
        padding: 0 20px;
        border: 0;
        border-radius: 8px;
    }
`

export default class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = e => {
        const value = e.target.value
        this.setState({ value })
        this.props.filterResults(value.toLowerCase())
    }

    render() {
        return (
            <FilterWrapper className="filter-wrapper" >
                <input type="Text" placeholder="Filter by question" value={this.state.value} onChange={this.handleChange} />
            </FilterWrapper>
        )
    }
}
