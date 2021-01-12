import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField } from '../actions.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField 
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            robotsArray: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(users => this.setState({ robotsArray: users}));
    }

    render() { 
        console.log(this.props);
        const { robotsArray } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robotsArray.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        console.log(filteredRobots);

        if(!robotsArray.length) {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='tc'> 
                    <h1 className='f1'>robofriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll > 
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    };
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
