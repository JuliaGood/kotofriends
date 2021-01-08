import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robotsArray: robots,
            searchField: ''
        }
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

        return (
            <div className='tc'> 
                <h1>robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots}/>
            </div>
        );
    };
    
}

export default App;
