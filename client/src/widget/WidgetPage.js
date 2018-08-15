import React from 'react'

// TODO: Import CSS
import './WidgetPage.css'

//components
import WidgetForm from './widgetsForm/widgetForm'
import WidgetOutput from './widgetOutput/WidgetOutput'


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
  fontSize: '',
  alignment: ''
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


// handleFormSubmit = (e) => {
//   e.preventDefault()
//   const target = e.target
//   const value = target.type === 'checkbox' ? target.checked : target.type === 'radio' ? target.id : target.value
//   const name = target.name

//   e.preventDefault()
//   this.setState({
//     [name]: value,
//   })
//   console.log(this.state)
// }

handleFormSubmit = (e) => {
  e.preventDefault()
  const target = e.target
  const value = target.type === 'checkbox' ? target.checked : target.type === 'radio' ? target.id : target.value
  const name = target.name

  e.preventDefault()
  this.setState({
    [name]: value,
  })
  console.log(this.state)
}

// TODO: handleShow

// TODO: Handle Update prop

updateOutputProperty = (e) => {
  e.style.setProperty('--color', this.state.backgroundColor.value)
}

// TODO: Render Widget Form

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
        </section>

      {/* // TODO: Render Exportable Code */}

        <section className='widget-out-section'>
          <h1>Widget Output</h1>

          < WidgetOutput 
          updateProp={this.updateOutputProperty}
          />
        </section>
    </div>
    )
  }
}

export { WidgetPage }