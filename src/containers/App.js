import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, requestRobots } from '../actions.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robotsArray: state.requestRobots.robots, 
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
    componentDidMount() {
      this.props.onRequestRobots();
    }

    render() { 
        console.log('robotsArray', this.props.robotsArray);
        const { robotsArray, searchField, onSearchChange, isPending } = this.props;
        const filteredRobots = robotsArray.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if(isPending) {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='tc'> 
                    <h1 className='f1'>robofriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll> 
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    };
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
