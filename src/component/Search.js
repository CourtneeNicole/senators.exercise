import React from 'react'
import senators from '../data/senators'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      senatorState: '',
    }
  }

  handleChange = e => {
    const senatorState = e.target.value
    this.setState(({ senatorState  }))
    this.props.onSelected(senatorState)
  }

  render() {
    return (
      <form className="search">
        Search by State
        <select onChange={this.handleChange}>
          <option value="">-None-</option>
          <option value="AL">ALABAMA</option>
          <option value="AK">ALASKA</option>
          <option value="AZ">ARIZONA</option>
          <option value="AK">ARKANSAS</option>
          <option value="CA">CALIFORNIA</option>
          <option value="CO">COLORADO</option>
          <option value="CT">CONNECTICUT</option>
          <option value="DE">DELAWARE</option>
          <option value="FL">FLORIDA</option>
          <option value="GA">GEORGIA</option>
          <option value="HI">HAWAII</option>
          <option value="ID">IDAHO</option>
          <option value="IL">ILLINOIS</option>
          <option value="IN">INDIANA</option>
          <option value="IA">IOWA</option>
          <option value="KS">KANSAS</option>
          <option value="KY">KENTUCKY</option>
          <option value="LA">LOUISIANA</option>
          <option value="ME">MAINE</option>
          <option value="MD">MARYLAND</option>
          <option value="MA">MASSACHUSETTS</option>
          <option value="MI">MICHIGAN</option>
          <option value="MN">MINNESOTA</option>
          <option value="MS">MISSISSIPPI</option>
          <option value="MO">MISSOURI</option>
          <option value="MT">MONTANA</option>
          <option value="NE">NEBRASKA</option>
          <option value="NV">NEVADA</option>
          <option value="NH">NEW HAMPSHIRE</option>
          <option value="NJ">NEW JERSEY</option>
          <option value="NM">NEW MEXICO</option>
          <option value="NY">NEW YORK</option>
          <option value="NC">NORTH CAROLINA</option>
          <option value="ND">NORTH DAKOTA</option>
          <option value="OH">OHIO</option>
          <option value="OK">OKLAHOMA</option>
          <option value="OR">OREGON</option>
          <option value="PA">PENNSYLVANIA</option>
          <option value="RI">RHODE ISLAND</option>
          <option value="SC">SOUTH CAROLINA</option>
          <option value="SD">SOUTH DAKOTA</option>
          <option value="TN">TENNESSEE</option>
          <option value="TX">TEXAS</option>
          <option value="UT">UTAH</option>
          <option value="VT">VERMONT</option>
          <option value="VA">VIRGINIA</option>
          <option value="WA">WASHINGTON</option>
          <option value="WV">WEST VIRGINIA</option>
          <option value="WI">WISCONSIN</option>
          <option value="WY">WYOMING</option>
        </select>
      </form>
    )
  }
}
