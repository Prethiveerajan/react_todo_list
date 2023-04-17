import React from 'react';
import './DropDownComponent.css'
const Dropdown = (props) => {
  return (
    <select className={`hello`}>
      <option class="rec">Recently ADDED</option>
      <option class ="prog">In Progress</option>
      <option class ="Complete">Completed</option>
    </select>
  );
}

export default Dropdown;