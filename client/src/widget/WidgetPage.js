import React from 'react';

// TODO: Import CSS
import './WidgetPage.css';

//components
import { WidgetForm } from './widgetsForm/widgetForm';
import { WidgetOutput } from './widgetOutput/WidgetOutput';
import { WidgetCarousel } from './carouselWidget/WidgetCarousel';

class WidgetPage extends React.Component {

  constructor(props) {
    super(props)
    
    const localkeys = Object.keys(localStorage)
    const localvalues = Object.values(localStorage)
    const initialisedSate = {}

    localkeys.forEach((key,value) => initialisedSate[key] = localvalues[value])

    console.log(initialisedSate)
    this.state = initialisedSate 
  }
// Multiple Singe Arrays into a single object
  // const arraysToObject = (locKey, locVal, object) => {
  //   locKey.forEach((key,value) => object[key] = locVal[value])
  // }
  
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
  
  arraysToObject = (locKey, locVal, object) => {
    locKey.forEach((key,value) => object[key] = locVal[value])
  }
  

// Update the Local Storage
  updatelocalStorage = (e) => {
    e.preventDefault()
    const keys = Object.keys(this.state)
    const values = Object.values(this.state)
    const storageLength = values.length

    for (let i = 0; i < storageLength; i++) {
      console.log([keys[i]], values[i])
      localStorage.setItem([keys[i]], values[i])
    }
    // localStorage.clear()
  }

  // updateIframe = () => {
  //   document.getElementById('iframeRefresher').addEventListener('click', function() {
  //       var ifr = document.getElementsByClassName('widget-iframe')[0]
  //       ifr.src = ifr.src
  //   })
  // }

  getCodeSnippet = (e) => {
    e.preventDefault()
    const iframeElement = document.getElementsByClassName('iframe-container')[0]
    const codeSnippet = document.createTextNode(iframeElement.outerHTML)
    const codeSnippetContainer = document.getElementsByClassName('output-script-string')[0]
    console.log(codeSnippetContainer)
    codeSnippetContainer.appendChild(codeSnippet)
    // document.body.appendChild(codeSnippetContainer)
    // console.log(codeSnippet)
  }

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
          <input onClick={this.updatelocalStorage} type='submit' defaultValue='Save to Cache'/>
        </section>

        <section className="widget-render-section">
          <div className='page-banner'>
            <h1>Rendered Widget</h1>
          </div>
          {/* <h1>Rendered Widget</h1> */}
          <WidgetCarousel callToActionDesc={this.state.callToActionDesc} />
          
          <div className='page-banner'>
            <h1>Widget iFrame</h1>
          </div>
          <div className='iframe-container'>
            <iframe title='widget-iframe' className='widget-iframe' src="/widgets/carousel" allowFullScreen></iframe>
          </div>
        </section>

        <section className='widget-out-section'>
          <div className='page-banner'>
            <h1>Widget Output</h1>
          </div>
          < WidgetOutput
          getSnippet={this.getCodeSnippet}
          refresh={this.updateIframe}
          /> 
          
        </section>
      </div>
    );
  }
}

export default WidgetPage;
