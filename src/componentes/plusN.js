import React from "react";
import './plusN.css';

class Formi extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    });
  }

  render() {
    return (
      <form>
        <label>
          Guano
          <input
            name="Guano" type="checkbox"
            checked={this.state.Guano}
            onChange={this.handleInputChange} />
        </label>
        <br />
           <label>
          Microrizas
          <input
            name="Micro" type="checkbox"
            checked={this.state.Micro}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
         Fertilizantes usados:
          <input
            name="ferti"  type="number"
            value={this.state.ferti}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default Formi;