import React, { Component } from 'react';
import { Connect} from 'react-redux'
import { addRecipe, removeFromCalender } from '../actions'
import { capitalize } from '../utils/helpers'
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o'

class App extends Component {
  render() {
    return (
      <div>
        hello leon
      </div>
    );
  }
}

function mapStateToProps({food, calender}) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday','thursday','friday','saturday']
  return {
    calender: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? food[calendar[day][meal]]
          : null

          return meals
      }, {})
    }))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    removeRecipe: (data) => dispatch(removeFromCalender(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
