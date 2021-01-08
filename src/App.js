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
    render() { 
        return (
            <div className='tc'> 
                <h1>robofriends</h1>
                <SearchBox />
                <CardList robots={this.state.robotsArray}/>
            </div>
        );
    };
    
}

export default App;
