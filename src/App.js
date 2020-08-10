import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import CreateForm from './components/CreateForm'

class App extends React.Component {
  state = {
    pizzas: [],
    editPizza: {},
    topping: "",
    size: "",
    vegetarian: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
      .then(r => r.json())
      .then(pizzas => this.setState({pizzas}))
  }

  handleEditClick = (id) => {
    console.log("editPizza's ID:", id)
    let newArr = [...this.state.pizzas]
    let pizzaX = newArr.find(obj => obj.id === id)
    this.setState({editPizza: pizzaX})
  }

  handleChange = e => {
    console.log("Handling in progress.. ")
    this.setState({[e.target.name]: e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("App.handleSubmit: Current State: ", this.state)
    fetch(`http://localhost:3000/pizzas/${this.state.editPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }, 
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })})
      .then(r => r.json())
      .then(updatedPizzaObject => {
        let newArray = [...this.state.pizzas]
        let updatedPizza = newArray.find(obj => obj.id === updatedPizzaObject.id)
        this.setState({pizzas: newArray})
        this.setState({
          editPizza: {},
          topping: "",
          size: "",
          vegetarian: ""
        })
      })
  }

  addNewPizza = (newPizza) => {
    console.log(newPizza)
    let newArray = [...this.state.pizzas, newPizza]
    this.setState({pizzas: newArray})
  }

  // .then(data => {
  //   let pizzas = this.state.pizzas.map(pizza => { 
                            
  //     if(pizza.id === data.id)
  //     {
  //       let updatedPizza = data
  //       return updatedPizza
  //     } 
  //       return pizza
  //   })
  // })
  
  render() {
    // console.log(this.state.editPizza)
    // let pizzaX = this.state.editPizza 
    return (
      <Fragment>
        <Header/>
        <br></br>
        {/* <h3>Make Your Own Pizza:</h3> */}
        <div>
          {/* <button style={{display: 'flex', justifyContent: 'center'}} class="ui mini green button">Make Your Own Pizza!</button><br></br><br></br> */}
        </div>

        <div class="ui inverted two item menu">
    <a class="item">
        <PizzaForm pizzaX={this.state.pizzaX} handleChange={this.handleChange} handleSubmit={this.handleSubmit} topping={this.state.topping} size={this.state.size}/>
    </a>
    <a class="item">
        <CreateForm addNewPizza={this.addNewPizza}/>
    <div class="floating ui teal label">Free Delivery!</div>
    </a>
</div>


        
        






        <PizzaList pizzas={this.state.pizzas} editPizza={this.handleEditClick}/> 
        {/* <div className="footer-copyright text-center py-3" onClick={()=>{window.open('http://chayagreisman.com/','_blank')}}>
          Copyright © {new Date().toISOString().substring(0, 4)} | Chaya M. Greisman
        </div>  */}
        <div className="footer-copyright text-center py-3" onClick={()=>{window.open('http://google.com/','_blank')}}>
          Copyright © {new Date().toISOString().substring(0, 4)} | Julian Cedric
        </div> 
      </Fragment>
    );
  }
}

export default App;
//