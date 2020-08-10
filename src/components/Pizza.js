import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      {/* <td>{props.pizza.vegetarian}</td> */}
      <td><button type="button" class="ui mini yellow button" onClick={() => props.editPizza(props.pizza.id)}>Edit</button></td>
      {/* <td><button type="button" class="ui mini green button"> + </button></td> */}
      <td><button type="button" class="ui mini red button">Delete</button></td>

    </tr>
  )
}

export default Pizza
