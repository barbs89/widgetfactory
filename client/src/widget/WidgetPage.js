import React from 'react'

// TODO: Import CSS
import './WidgetPage.css'

//components
import WidgetForm from './widgetsForm/widgetForm'
import WidgetOutput from './widgetOutput/WidgetOutput'
import WidgetCarousel from './carouselWidget/WidgetCarousel'


class WidgetPage extends React.Component {

state = {
  title: false,
  price: false,
  description: false,
  callToAction: false,
  callToActionDesc: '',
  backgroundColor: '#C4C4C4',
  cardColor: '#F0F0F0',
  buttonColor: '#5CC5CF',
  border: 'none',
  borderStyle: false,
  font: '',
  fontStyle: '',
  fontColor: '',
  headerFontSize: '',
  bodyFontSize: '',
  alignment: ''
}

// Functions
handleFormChange = (e) => {
  const target = e.target
  const value = target.type === 'checkbox' ? target.checked : target.type === 'radio' ? target.id : target.value
  const name = target.name

  e.preventDefault()
  console.log(`input namos ${name}. input value is ${value}`)
  this.setState({
    [name]: value,
  })
  console.log(this.state)
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

// TODO: Handle Update Property

// updateOutputProperty = (e) => {
//   e.preventDefault()
//   const element = document.getElementById(123456)
//   element.style.setProperty('--cardColor', this.state.cardColor)
// }


updateOutputProperty = (e) => {
  e.preventDefault()
  const keys = Object.keys(this.state)
  const values = Object.values(this.state)
  const arrayLength = keys.length
  console.log(keys)
  console.log(values)
  for (let i = 0; i < arrayLength; i++) {
    const element = document.getElementsByClassName(keys)
    element.style.setProperty(`--${keys[i]}`, values[i])
  }
  // const element = document.getElementsByClassName(keys)
  // console.log(element)
  // element.style.setProperty(`--${keys}`, values)
  
}

// TODO: Render Widget Code Snippet

  render() {
    return (
    <div className='widget-page-container'>
    {/* // TODO: handleShow on event checkedCTA */}

        <section className='widget-form-section'>
          <h1>Widget Form</h1>
          < WidgetForm 
          handleSubmit={this.handleFormSubmit}
          handleChange={this.handleFormChange}
          />
        </section>

    {/* // TODO: Render Widget */}

        <section className='widget-render-section'>
          <h1>Rendered Widget</h1>
          
          <WidgetCarousel />

        </section>

      {/* // TODO: Render Exportable Code */}

        <section className='widget-out-section'>
        <div>
          <h1>Widget Output</h1>
        </div>
          < WidgetOutput />
          <button onClick={this.updateOutputProperty}>I am a button, click me</button>
        </section>
    </div>
    )
  }
}

export { WidgetPage }