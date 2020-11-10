import { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Listing from './components/Listing';
import Button from './components/Button';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            query: '',
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
        const { items } = this.state;
        const handleSubmit = (e) => {
            e.preventDefault();

            fetch(`http://api.tvmaze.com/search/shows?q=${this.state.query}`)
                .then(res => res.json())
                .then(json => {
                    this.setState({ items: json })
                }
            );
        }

        return (
            <div className="App">
                <Header />
                <form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Search for a movie"
                        type="text"
                        value={this.state.query}
                        onChange={this.handleInput}
                    />
                    <Button type="submit">Search</Button>
                </form>
                { items && 
                    <div>
                        {items.map(item => (
                            <Listing 
                                key={item.show.id}
                                name={item.show.name}
                                image={item.show.image}
                                summary={item.show.summary}
                                link={item.show._links.self.href}
                            />
                        ))}
                    </div>
                }
            </div>
        );
    }
}

const Input = styled.input`
    border: none;
    background: #eee;
    border-radius: 5px;
    padding: 12px 16px;
    margin: 5px;
    outline: none;
    font-weight: bolder;
    max-width: 300px;
`;