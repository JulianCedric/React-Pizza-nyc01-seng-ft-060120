import React from 'react';

class CreateForm extends React.Component {
    state = {
        topping: "",
        size: ""
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleClick = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/pizzas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }, 
          body: JSON.stringify({
            topping: this.state.topping,
            size: this.state.size,
          })})
          .then(r => r.json())
          .then(newPizza => {
            this.props.addNewPizza(newPizza)
            this.setState({
              topping: "",
              size: ""
            })
          })
      }

    render() { 
        return (
            <div className="form-row">
                <div className="col-5">
                    <input type="text" className="form-control" placeholder="Pizza Topping" name="topping" value={this.topping} onChange={this.handleChange}/>
                </div>
                <div className="col">
                    <select name="size" value={this.size} onChange={this.handleChange} className="form-control">
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-success" onClick={this.handleClick}>Add New Pizza</button>
                </div>
            </div>
        );
    };
};
 
export default CreateForm;