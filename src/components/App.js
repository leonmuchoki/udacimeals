import React, { Component } from 'react';
import { Connect} from 'react-redux'

class App extends Component {
  

  render() {
    return (
      <div>
        hello leon
      </div>
    );
  }
}

function mapStateToProps(calender) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday','thursday','friday','saturday']
  return {
    calender: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? calendar[day][meal]
          : null

          return meals
      }, {})
    }))
  }
}

export default connect(mapStateToProps)(App);
