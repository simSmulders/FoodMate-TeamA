import React, {Component} from 'react';
import './Filter.css';

let employee = [{
    "employeeId": "1",
    "name": "bob",
    "MealType" : "Lunch",
    "PriceRange": 30

},{
    "employeeId": "2",
    "name": "steve",
    "MealType" : "Dinner",
    "PriceRange": 15
},

{
    "employeeId": "3",
    "name": "steve",
    "MealType" : "Dinner",
    "PriceRange": 150
},

{
    "employeeId": "4",
    "name": "steve",
    "MealType" : "Lunch",
    "PriceRange": 66
}
];



class Filter extends Component{
    constructor(props) {
        super(props);
        this.state = { checked: true };
      }
    
      handleChange(event) {
        this.setState( {checked: !this.state.checked} );
      }
    render(){
        return(
               <div>
                <h1>I Want to HAVE</h1>
                <div class ="Check">
                <input  type="checkbox" name="MealType" value="LUNCH" checked={this.state.value} onChange={this.handleChange} />Lunch
                <br/>
                <input  type="checkbox" name="MealType" value="DINNER" checked={this.state.value} onChange={this.handleChange} />Dinner
                <br/>
                <h3>Price Range</h3>
                <input  type="checkbox" name="PriceRange" value="15-25" checked={this.state.value} onChange={this.handleChange} />15-25
                <br/>
                <input  type="checkbox" name="PriceRange" value="26-40" checked={this.state.value} onChange={this.handleChange}/>26-40
                <br/>
                <input  type="checkbox" name="PriceRange" value="41-65" checked={this.state.value} onChange={this.handleChange} />41-65
                <br/>
                <input  type="checkbox" name="PriceRange" value="66-100" checked={this.state.value} onChange={this.handleChange}/>66-100
                <br/>
                <input  type="checkbox" name="PriceRange" value="Higher" checked={this.state.value} onChange={this.handleChange} />Higher
                <br/>
                <br/>
                <button>Submit</button>
                </div>
               </div>
            
        )
    }

}

export default Filter;