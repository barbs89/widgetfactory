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
    
    const statePopulator = (locKey, locVal, object) => {
      locKey.forEach((key,value) => object[key] = locVal[value])
    }
          
    let finalobject = {}
    localkeys.forEach((key,value) => finalobject[key] = localvalues[value])

    console.log(finalobject)
    // let finalKey = Object.keys(finalobject)

    // const filter = (object) => {
    //   object.forEach((key,value) => this.state[key] = object[value])
    // }

    // let variable = []
    // for (let i = 0; i < localStorage.length; ++i) {
    //   let variable = {[localkeys[i]]: localvalues[i]}
    //   // let object = JSON.parse(variable)
    //   // console.log(variable)
    //   // console.log(variable[i])
    //   let result = Object.assign({}, Object.keys(variable): Object.values(variable))
    //     // , ...Object.values(variable)
      
    //   let stringifiedJSON = JSON.stringify(variable)
    //   let parsedObject = JSON.parse(stringifiedJSON)
    //   console.log(result)
    //   // let singleObj = {...{[localkeys[i]]: localvalues[i]}}
    //   // console.log(allObj)
      

    //   // console.log(allObj)
    //   // let obj1 = {[localkeys[i]]: localvalues[i]}
    //   // let obj2 = Object.assign({}, obj1)
    //   // array.push(obj)
    //   // console.log(obj2)
    //   // console.log(localvalues[i])
    //   // let cache = {[localkeys[i]]: localvalues[i]}
    //   // let object = Object.assign(cache)
    //   // console.log(object)      
    // }
    
    // const picked = (({ finalKey }) => ({ finalobject }))(finalobject)
    // console.log(picked)
    this.state = finalobject
      
  }
    
  

  // state = {
  //   // titleCard: '',
  //   // priceCard: '',
  //   // descCard: '',
  //   // ctaCard: '',
  //   // callToActionDesc: '',
  //   // borderOutline: '',
  //   // borderStyle: '',
  //   // cardColor: '',
  //   // backgroundColor: '',
  //   // buttonColor: '',
  //   // font: '',
  //   // fontStyle: '',
  //   // fontColor: '',
  //   // fontSize: '',
  //   // fontAlignment: ''
  // }

  // createVariables = (key, value) => {
  //   for (let i = 0; localStorage.length; ++i) {
  //       variable[i] = {[key]: value};
  //   }
  //   return variable;
  // }

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
    console.log(keys)
    console.log(values)
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
          <input onClick={this.updatelocalcache} type='submit' defaultValue='Save to Cache'/>
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
