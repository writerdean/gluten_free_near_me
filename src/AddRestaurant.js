import React from 'react'


export default function AddRestaurant(props) {

return (

  <form action="#">
    <p>
      <label>
        <input type="checkbox" />
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" checked="checked" />
        <span>Yellow</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" class="filled-in" checked="checked" />
        <span>Filled in</span>
      </label>
    </p>
    <p>
      <label>
        <input id="indeterminate-checkbox" type="checkbox" />
        <span>Indeterminate Style</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" checked="checked" disabled="disabled" />
        <span>Green</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" disabled="disabled" />
        <span>Brown</span>
      </label>
    </p>
  </form>




)
}
