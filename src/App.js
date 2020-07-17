import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/searchBox.component';


class App extends React.Component {
    constructor() {
        super();

        var x = "this is x";
        var y = "tthis is y";

        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}));
    }

    handleChange = (event) => {
        this.setState({searchField: event.target.value}, ()=>{
            console.log(this.state);
        });
    }

    render() {
        const { monsters, searchField} = this.state;
        //creaza un array care contine cardurile filtrate si paseaza noul array in loc de arrayul monsters din state
        const filteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase())
        });

        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <h1>awesome title</h1>

            <SearchBox handleChange={this.handleChange} 
                placeholder="search name" />

            <CardList monsters={filteredMonsters}/>


            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            
        </div>
        );
    }

}

export default App;
