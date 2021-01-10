import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robotsArray: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(users => this.setState({ robotsArray: users}));
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({ searchField: event.target.value });
    }

    render() { 
        const filteredRobots = this.state.robotsArray.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        console.log(filteredRobots);

        if(this.state.robotsArray.length === 0) {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='tc'> 
                    <h1 className='f1'>robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }
    };
    
}

export default App;
