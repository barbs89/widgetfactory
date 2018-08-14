import React from 'react'

// TODO: Import CSS

//components
import WidgetForm from './widgetsForm/widgetForm'


class WidgetPage extends React.Component {

// TODO: declare state
state = {
  title: false,
  price: false,
  description: false,
  callToAction: false,
  callToActionDesc: '',
  backgroundColor: '',
  cardColor: '',
  buttonColor: '',
  border: '',
  borderStyle: false,
  font: '',
  fontStyle: '',
  fontColor: '',
  fontSize: '',
  alignment: ''
}


handleFormSubmit = (e) => {
  e.preventDefault()
  this.setState({
    title: e.target.value,
    price: e.target.value,
    description: e.target.value,
    callToAction: e.target.value,
    callToActionDesc: e.target.value,
    backgroundColor: e.target.value,
    cardColor: e.target.value,
    buttonColor: e.target.value,
    border: e.target.value,
    borderStyle: e.target.value,
    font: e.target.value,
    fontStyle: e.target.value,
    fontColor: e.target.value,
    fontSize: e.target.value,
    alignment: e.target.value
    
  })
  .then(() => {
    console.log(this.state)
  })
  .catch(err => {
    console.log(err)
  })
}

// TODO: create form handlers

  // TODO: handleShow

  // TODO: HandleSubmit

  // TODO: HandleOnChange

  // TODO: Render Widget Form

  render() {
    return (
      <WidgetForm 
      handleSubmit={this.state.handleFormSubmit}
      handleShow={this.state.handleShow}
      />

  // TODO: Redner Widget

    // <Widget />
    

  // TODO: Render Exportable Code

    // <ClientCode />
  

    )
  }
}

export { WidgetPage }