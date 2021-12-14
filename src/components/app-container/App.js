import React, { Component } from "react";
import CardList from "../card-list/CardList";
import SearchBox from "../search-box/SearchBox";
import Scroll from "../scroll-box/ScrollBox";
import "./App.css";
import { setSearchField, requestKotos } from "../../common/actions.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchKotos.searchField,
    kotosArray: state.requestKotos.kotos,
    isPending: state.requestKotos.isPending,
    error: state.requestKotos.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestKotos: () => dispatch(requestKotos()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestKotos();
  }

  render() {
    const { kotosArray, searchField, onSearchChange, isPending } = this.props;
    const filteredKotos = kotosArray.filter((koto) => {
      return koto.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="app tc">
          <h1 className="f1">kotofriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList kotos={filteredKotos} />
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
