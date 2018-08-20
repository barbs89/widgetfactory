import React from 'react';

// TODO: Import CSS
import './WidgetPage.css';

//components
import {WidgetForm} from './widgetsForm/widgetForm';
import {WidgetOutput} from './widgetOutput/WidgetOutput';
import {WidgetCarousel} from './carouselWidget/WidgetCarousel';

class WidgetPage extends React.Component {
  state = {
    title: false,
    price: false,
    description: false,
    callToAction: false,
    callToActionDesc: 'Buy Now',
    borderOutline: 'none',
    borderStyle: '.3em',
    cardColor: '#F0F0F0',
    backgroundColor: '#C4C4C4',
    buttonColor: '#5CC5CF',
    font: 'Roboto',
    fontStyle: 'italic',
    fontColor: 'F0F0F0',
    fontSize: '14px',
    fontAlignment: 'left'
  }

// Functions

handleFormChange = (e) => {
  const target = e.target
  const value = target.type === 'checkbox' ? target.checked : target.type === 'radio' ? target.value : target.value
  const name = target.name
  e.preventDefault()
  console.log(`Key is ${name} with a value of ${value}`)
  this.setState({
    [name]: value,
  })
}

handleCheckboxChange = (e) => {
  const target = e.target
  const name = target.name
  if(target.checked === true) {
    this.setState({ 
      // [name]: target.checked = true
      [name]: target.value = true
    })
  } else {
    this.setState({ 
      // [name]: target.checked = false
      [name]: target.value = false
    })
  }
}

handleRadioChange = (e) => {
  const target = e.target
  const value = target.value
  const name = target.name
  this.setState({
    [name]: value,
  })
  console.log(name, value, target)
}

handleFormSubmit = (e) => {
  e.preventDefault()
  const target = e.target
  const value = target.type === 'checkbox' ? target.checked : target.type === 'radio' ? target.id : target.value
  const name = target.name
  this.setState({
    [name]: value,
  })
  console.log(this.state)
}



updateOutputProperty = (e) => {
  e.preventDefault()
  const keys = Object.keys(this.state)
  const values = Object.values(this.state)
  const arrayLength = keys.length
  // console.log(keys)
  // console.log(values)
  // console.log(document.styleSheets[1])
  for (let i = 0; i < arrayLength; i++) {
    // console.log(keys[i])
    // console.log(values[i])
    document.documentElement.style.setProperty(`--${keys[i]}`, values[i])
  }
}

// Support Functions

hexToRgb = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let value = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  }
  return `rgb(${Object.values(value).join(`, `)})`
}

handleFormColorChange = (e) => {
  const target = e.target
  const value = target.value
  const name = target.name
  const rgbVal = this.hexToRgb(value)
  e.preventDefault()
  console.log(`Key is ${name} with a value of ${rgbVal}`)
  this.setState({
    [name]: rgbVal,
  })
}

// TODO: handleShow

// handleShow = () => {
//   const ctaChecked = document.getElementsByName('callToAction')
//   const ctaDesc = document.getElementsByName('callToActionDesc')
//   if (ctaChecked.checked !== true) {
//     ctaDesc.style.display = 'none'
//   } else {
//     ctaDesc.style.display = 'block'
//   }
// }



// TODO: Render Widget Code Snippet

  render() 
  {
    return (
      <div className="widget-page-container">

        {/* // TODO: handleShow on event checkedCTA */}
        <section className="widget-form-section">
          <h1>Widget Form</h1>
          <WidgetForm
            handleSubmit={this.handleFormSubmit}
            handleChange={this.handleFormChange}
            handleColor={this.handleFormColorChange}            
            handleHex={this.hexToRgb}
            handleCheck={this.handleCheckboxChange}
            handleRadio={this.handleRadioChange}
          />
          <button onClick={this.updateOutputProperty}>Render Widget</button>

        </section>

        <section className="widget-render-section">
          <h1>Rendered Widget</h1>
          <WidgetCarousel />
        </section>
        {/* // TODO: Render Exportable Code */}
        <section className='widget-out-section'>
        <div>
          <h1>Widget Output</h1>
        </div>
          < WidgetOutput />
        </section>
      </div>
    );
  }
}

export { WidgetPage };
