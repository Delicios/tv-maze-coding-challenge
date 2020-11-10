import { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import './App.css';

export default class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        items: [],
        query: '',
        isLoading: false,
    }
    this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({
            query: e.target.value
        });
    }

    render() {
        const handleSubmit = (e) => {
            e.preventDefault();

            fetch(`http://api.tvmaze.com/search/shows?q=${this.state.query}`)
                .then(res => res.json())
                    .then(json => {
                    this.setState({
                        isLoading: true,
                        items: json,
                    })
                });
        }

        const { isLoading, items } = this.state;
            return (
                <div>
                    <Header />
                    <form className="App" onSubmit={handleSubmit}>
                        <Input type="text" value={this.state.query} onChange={this.handleInput} />
                        <Button type="submit">Search</Button>
                        <ul>
                            {items.map(item => (
                                <li key={item.show.id}>
                                    {item.show.name}
                                </li>
                            ))}
                        </ul>
                    </form>
                </div>
        );
    }
}

const Button = styled.button`
    border: none;
    border-radius: 5px;
    background: #047;
    padding: 8px 10px;
    margin: 5px;
    color: white;
    font-weight: bolder;
`;
    
const Input = styled.input`
    border: none;
    background: #eee;
    border-radius: 5px;
    padding: 8px 10px;
    margin: 5px;
`;