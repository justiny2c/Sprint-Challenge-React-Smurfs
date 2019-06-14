import React from 'react';
import {Link} from "react-router-dom";

const Smurf = props => {


  return (
    // <Link to={`/smurfs/${props.id}`}>
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} cm tall</strong>
      <p>{props.age} smurf-years old</p>
      <button
        onClick = {(e) => props.deleteSmurf(e, props.id)}>
          Delete</button>
    </div>
    // </Link>
  );

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};
}

export default Smurf;

