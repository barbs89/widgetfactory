import React from 'react'

// TODO: Import CSS

//components
import WidgetForm from './widgetsForm/widgetForm'


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


handleFormSubmit = (e) => {
  e.preventDefault()
  const target = e.target
  const value = target.type === 'checkbox' ? target.checked : target.type === 'radio' ? target.id : target.value
  const name = target.name

  e.preventDefault()
  console.log(`input nams ${name}. input value is ${value}`)
  this.setState({
    [name]: value,
  })
  console.log(this.state)
}


// TODO: create form handlers

  // TODO: handleShow

  // TODO: HandleSubmit

  // TODO: HandleOnChange

  // TODO: Render Widget Form

  render() {
    return (
      <WidgetForm 
      handleSubmit={this.handleFormSubmit}
      handleChange={this.handleFormChange}
      // handleShow={this.state.handleShow}
      />

  // TODO: Redner Widget

    // <Widget />
    

  // TODO: Render Exportable Code

    // <ClientCode />
  

    )
  }
}

export { WidgetPage }