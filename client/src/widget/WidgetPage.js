import React from 'react';

// TODO: Import CSS
import './WidgetPage.css';

//components
import { WidgetForm } from './widgetsForm/widgetForm';
import { WidgetOutput } from './widgetOutput/WidgetOutput';
import { WidgetCarousel } from './carouselWidget/WidgetCarousel';

class WidgetPage extends React.Component {
  images = this.props.images
  state = {
    titleCard: 'hidden',
    priceCard: 'hidden',
    descCard: 'hidden',
    ctaCard: 'hidden',
    callToActionDesc: 'Buy Now',
    borderOutline: 'none',
    borderStyle: '.3em',
    cardColor: '#F0F0F0',
    backgroundColor: '#C4C4C4',
    buttonColor: '#5CC5CF',
    font: 'Roboto',
    fontStyle: 'normal',
    fontColor: 'F0F0F0',
    fontSize: '14px',
    fontAlignment: 'left'
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
  const iframe = document.body.querySelector('iframe')
  console.log(`the styles are as follows: ${iframe}`)
  for (let i = 0; i < arrayLength; i++) {
    document.documentElement.style.setProperty(`--${keys[i]}`, values[i])
    // document.getElementsByClassName("widget-iframe").style.setProperty(`--${keys[i]}`, values[i])
    // console.log(keys[i], values[i])
  }
  console.log(this.state)
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
          <button onClick={this.updateOutputProperty}>Render Widget</button>
        </section>

        <section className="widget-render-section">
          <h1>Rendered Widget</h1>
          <WidgetCarousel callToActionDesc={this.state.callToActionDesc} adverts={this.props.adverts} images={this.props.images}/>
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
