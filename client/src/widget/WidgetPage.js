import React from 'react';

// TODO: Import CSS
import './WidgetPage.css';

//components
import { WidgetForm } from './widgetsForm/widgetForm';
import { WidgetOutput } from './widgetOutput/WidgetOutput';
import { WidgetCarousel } from './carouselWidget/WidgetCarousel';

class WidgetPage extends React.Component {
  state = {
    titleCard: '',
    priceCard: '',
    descCard: '',
    ctaCard: '',
    callToActionDesc: '',
    borderOutline: '',
    borderStyle: '',
    cardColor: '',
    backgroundColor: '',
    buttonColor: '',
    font: '',
    fontStyle: '',
    fontColor: '',
    fontSize: '',
    fontAlignment: ''
  }
  
  componentDidMount() {
    const localkeys = Object.keys(localStorage)
    const localvalues = Object.values(localStorage)
    // console.log(localkeys, localvalues)
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localkeys[i], localvalues[i]);
      
      this.setState({
        [localkeys[i]]: localvalues[i]
      })
    }
    console.log(this.state)
  }

  

// Form Handlers //

//Handle Input Change
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

// Handle Checkbox Inputs
handleShowCheckbox = (e) => {
  const target = e.target
  const name = target.name
  if(target.checked === true) {
    this.setState({ 
      [name]: target.value = 'visible'
    })
    console.log(this.state)
  } else if(target.checked === false) {
    this.setState({ 
      [name]: target.value = 'hidden'
    })
    console.log(this.state)
  }
}
  handleCheckboxChange = (e) => {
    const target = e.target
    const name = target.name
    const value = target.value
    if(target.checked === true) {
      this.setState({ 
        [name]: value
      });
    };
  }

  // Handle Checkbox Inputs

  handleShowCheckbox = (e) => {
    const target = e.target;
    const name = target.name;
    if (target.checked === true) {
      this.setState({
        [name]: (target.value = 'visible')
      });
      console.log(this.state);
    } else if (target.checked === false) {
      this.setState({
        [name]: (target.value = 'hidden')
      });
        // update to local storage
      console.log(this.state);
    }
  };

  handleCheckboxChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    if (target.checked === true) {
      this.setState({
        [name]: value
      });
      console.log(this.state);
    } else if (target.checked === false) {
      this.setState({
        [name]: 'normal'
      });
      console.log(this.state);
    }
  };

  // Handle Radio Inputs

  handleRadioChange = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: 'normal'
  })
    console.log(this.state)
  }


// Handle Radio Inputs
  handleRadioChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
    console.log(name, value, target)
    console.log(this.state)
  }

// Handle Colour Input
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

// Convert Hexadecimal to RGB 
  hexToRgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let value = {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    return `rgb(${Object.values(value).join(`, `)})`
  }

// Handle Form Submission
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

// Render Widget
  updateOutputProperty = (e) => {
    e.preventDefault()
    const keys = Object.keys(this.state)
    const values = Object.values(this.state)
    const arrayLength = keys.length
    
    for (let i = 0; i < arrayLength; i++) {
      document.documentElement.style.setProperty(`--${keys[i]}`, values[i])
    }
    console.log(this.state)
  }


  updatelocalcache = (e) => {
    e.preventDefault()
    const keys = Object.keys(this.state)
    const values = Object.values(this.state)
    // const localkeys = Object.keys(localStorage)
    // const localvalues = Object.values(localStorage)
    const storageLength = Storage.length
    for (let i = 0; i < storageLength; i++) {
      localStorage.setItem([keys[i]], values[i]);
      // console.log(localkeys, localvalues);
    }
  }

  updateIframe = () => {
    document.getElementById('iframeRefresher').addEventListener('click', function() {
        var ifr = document.getElementsByClassName('widget-iframe')[0];
        ifr.src = ifr.src;
    });
  }
  
// TODO: Render Widget Code Snippet

  getCodeSnippet = (e) => {
    e.preventDefault()
    const snippet = document.getElementsByClassName('iframe-container')[0]
    console.log(snippet)
  }
      //find iframe
      // const iframe = document.body.querySelector('iframe')
      // document.getElementsByClassName("widget-iframe").style.setProperty(`--${keys[i]}`, values[i])
      // console.log(keys[i], values[i])

  render() {
    return (   
        
      <div className="widget-page-container">
        {/* // TODO: handleShow on event checkedCTA */}
        <section className="widget-form-section">
          <WidgetForm
            handleSubmit={this.handleFormSubmit}
            handleChange={this.handleFormChange}
            handleColor={this.handleFormColorChange}
            handleHex={this.hexToRgb}
            handleCheck={this.handleCheckboxChange}
            handleRadio={this.handleRadioChange}
            handleShow={this.handleShowCheckbox}
          />
          <button onClick={this.updateOutputProperty}>Preview Widget</button>
          <input onClick={this.handleFormChange} type='submit' defaultValue='Save to Cache'/>
        </section>

        <section className="widget-render-section">
          <h1>Rendered Widget</h1>
          <WidgetCarousel callToActionDesc={this.state.callToActionDesc} />
        </section>
        {/* // TODO: Render Exportable Code */}
        <section className='widget-out-section'>
        <div>
          <h1>iframe</h1>
        </div>
        < WidgetOutput
        getCodeSnippet={this.getCodeSnippet}
        /> 
        <button onClick={this.updateIframe}id="iframeRefresher">Refresh Iframe</button>
        <button onClick={this.getCodeSnippet}id="codecapture">Capture Code</button>
        
        </section>
      </div>
    );
  }
}

export default WidgetPage;
