import React from 'react'

class Pet extends React.Component {
  render() {
    
    //object destructuring
    const {name, type, age, weight, gender, isAdopted, id} = this.props.pet

    let button;
    if (isAdopted){ 
      button = <button className="ui disabled button">Already adopted</button>
    } else {
      button = <button className="ui primary button" onClick={() => this.props.onAdoptPet(id)}>Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {name}
            { gender === "female"? ' ♀': ' ♂' }
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
         {button}
        </div>
      </div>
    )
  }
}

export default Pet
