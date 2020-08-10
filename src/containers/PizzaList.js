import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends React.Component {

  render() {
    return (
      <table className="ui inverted blue table">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            {/* <th scope="col">Vegetarian?</th> */}
            <th scope="col">Edit</th>
            {/* <th scope="col">Create</th> */}
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.pizzas.map(pizza => <Pizza editPizza={this.props.editPizza} pizza={pizza} />)}
        </tbody>
      </table>
    );
  };

};

export default PizzaList;
