import React from "react";

class PizzaForm extends React.Component {
  render(){
    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" name="topping" value={this.props.topping} onChange={this.props.handleChange}/>
        </div>
        <div className="col">
          <select name="size" value={this.props.size} onChange={this.props.handleChange} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        {/* <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={this.props.VegetarianSetToFalse}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div> */}
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.props.handleSubmit}>Submit Changes</button>
        </div>
      </div>
    );
  };
};

export default PizzaForm;
