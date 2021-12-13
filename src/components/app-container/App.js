import React, { Component } from 'react';
import CardList from '../card-list/CardList';
import SearchBox from '../search-box/SearchBox';
import Scroll from '../scroll-box/ScrollBox';
import './App.css';
import { setSearchField, requestKotos } from '../../common/actions.js';
// we`ve imported actions in here because ... we need to pass it to dispatch() redux-method?
import { connect } from 'react-redux';

const mapStateToProps = (state) => { // is telling WHAT state need to listen to and send down as props
    return { // redux puts these 4 values into props
        searchField: state.searchKotos.searchField,
        kotosArray: state.requestKotos.kotos, 
        isPending: state.requestKotos.isPending,
        error: state.requestKotos.error
    }
}

const mapDispatchToProps = (dispatch) => { // is telling WHAT props it should listen to (actions, that need to get dispatched)
    // we need dispatch to send an 'action' into reducer (?)
  return { // redux puts these 2 functions into props
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestKotos: () => dispatch(requestKotos())
  }
}

class App extends Component {
    componentDidMount() {
      this.props.onRequestKotos();
    }

    render() { 
        const { kotosArray, searchField, onSearchChange, isPending } = this.props;
        const filteredKotos = kotosArray.filter(koto => {
            return koto.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if(isPending) {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='app tc'> 
                    <h1 className='f1'>kotofriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll> 
                        <CardList kotos={filteredKotos}/>
                    </Scroll>
                </div>
            );
        }
    };
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// connect function are using to avoid store.subscribe
// using thia 'connect' function we subscribe smart-coponent to be aware of redux and
// and listen to any changes (where? in this component?) ...
// connect - its a HOF (higher order function), that retuns another function.
// connect f accepts 2 parameters ( 2functions): mapStateToProps & mapDispatchToProps
//
// using 'connect(mapStateToProps, mapDispatchToProps)(App)' we have just connected 
//  the <App/> component to the STORE(?) and said to it:
//  subcribe to any STATE changes in the redux store!
// so, every time if there will be changes in that STORE - the <App/> component will know about those changes
//
// in order to say to the <App/> component WHAT STATE and ACTION should it listen to - 
// we need define these 2 functions right up over here in this file (above of 'App class').
// 
// after we`ve defined those 2 functions, connect() function is going to run these functions and say:
// 1)ok. i`m listening to this part of the STATE and 2) i`m interested in these actions.
// and THEN it`s going to give those PROPS to the <App/> component. 