// IMPORT REACT
import React, { Component } from 'react';

// IMPORT STYLED COMPONENTS
import styled, { keyframes } from 'styled-components'
import GlobalStyle from './theme/globalStyle';

// IMPORT COMPONENTS
import NavBar from './components/ui/NavBar/navBar'
import TableComp from './components/ui/Table/table'
import Filter from './components/ui/Filter/filter'

// IMPORT SERVICES
import QuestionsServices from './services/questions.services'

// STYLED
const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 60px;
    padding: 40px 0;
`

const spin = keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`

const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;

    & div {
        width: 30px;
        height: 30px;
        border-top: 5px solid #fff;
        border-right: 5px solid #fff;
        border-bottom: 5px solid #808080;
        border-left: 5px solid #808080;
        border-radius: 50%;
        animation: ${spin} 1s linear infinite;
    }
`

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            questions: [],
            filteredQuestions: [],
            APIresponse: undefined,
            errStatus: false,
            err: undefined
        }
        this.questionsServices = new QuestionsServices()
    }

    getData = () => {
        this.questionsServices.get()
            .then(questions => this.setState({ questions: questions.results, filteredQuestions: questions.results, APIresponse: questions.response_code }))
            .catch(err => this.setState({ err: err, errStatus: true }))
    }

    setFilter = query => {
        const questionsCopy = [...this.state.questions]
        const filteredQuestions = questionsCopy.filter(question => question.question.toLowerCase().includes(query))
        this.setState({ filteredQuestions })
    }

    componentDidMount = () => this.getData()

    render() {
        return (
            <>
                <GlobalStyle />
                <NavBar />
                <Main>
                    {this.state.errStatus ?
                        (<div class="error">
                            <p>API error: {this.state.err}</p>
                        </div>)
                        :
                        (this.state.questions.length ? (
                            <>
                                <Filter data={this.state.questions} filterResults={this.setFilter} />
                                <TableComp data={this.state.filteredQuestions} />
                            </>)
                            :
                            <SpinnerWrapper>
                                <div>

                                </div>
                            </SpinnerWrapper>
                        )
                    }
                </Main>
            </>
        )
    }
}
