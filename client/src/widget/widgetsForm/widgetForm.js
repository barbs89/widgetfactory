import React from 'react'

// css
import './widgetForm.css'


class WidgetForm extends React.Component {

// hexToRgb = (hex) => {
//   let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   let value = {
//     r: parseInt(result[1], 16),
//     g: parseInt(result[2], 16),
//     b: parseInt(result[3], 16),
//   }
//   return Object.values(value).join(`, `)
// }

  render () {
    return (
      <div className='widget-form-container'>
        <form className='widget-form' onSubmit={this.props.handleSubmit}>
        <div className='widget-form-banner'>
              <h2>Form Options</h2>
        </div>
          <section className='widget-form-section'>
            
            <input onClick={this.props.handleCheck} type='checkbox' id='title' name='title'/>
            <label htmlFor='title' >Include Title</label>
            
            <input onChange={this.props.handleChange} type='checkbox' name='description' id='description'/>
            <label htmlFor='description'>Include Description</label>
            
            <input onChange={this.props.handleChange} type='checkbox' name='price'/>
            <label htmlFor='price'>Include Price</label>

            <input onChange={this.props.handleChange} type='checkbox' name='callToAction'/>
            <label htmlFor='callToAction' >Include Call to Action</label>
            <input onChange={this.props.handleChange} type='text' name='callToActionDesc' placeholder="e.g. 'Buy Now'"/>

          </section>

          <div className='widget-form-banner'>
              <h2>Card Styles</h2>
          </div>
          <section className='widget-form-section'>
          
          <label>Background Colour
            <input onChange={this.props.handleColor.bind(this)} type='color' name='backgroundColor' defaultValue='#C4C4C4'/>
          </label>

          <label>Card Colour
            <input onChange={this.props.handleColor.bind(this)} type='color' defaultValue='#F0F0F0' name='cardColor'/>
          </label>

          <label>Button Colour
            <input onChange={this.props.handleColor.bind(this)} type='color' defaultValue='#5CC5CF' name='buttonColor'/>
          </label>

          <label>Border
            <select name='borderOutline' onChange={this.props.handleChange}>
              <option value="none">none</option>
              <option value="solid">solid</option>
              <option value="inset">inset</option>
              <option value="outset">outset</option>
            </select>
          </label>

          <label>Border Style
            <input onChange={this.props.handleRadio} type='radio' value='0' name='borderStyle'/>
            <input onChange={this.props.handleRadio} type='radio' value='.3em' name='borderStyle'/>
          </label>

          {/* // TODO: remove radio default */}

          </section>

          <div className='widget-form-banner'>
              <h2>Font Styles</h2>
          </div>

          <section className='widget-form-section'>

            <label>Font
              <select name='font' onChange={this.props.handleChange} >
                <option value='null'>Select a font</option>
                <option value='Roboto'>Roboto</option>
                <option value='Segoe UI'>Segoe UI</option>
                <option value='Ubuntu'>Ubuntu</option>
                <option value='Open Sans'>Open Sans</option>
                <option value='Helvetica Neue'>Helvetica Neue</option>
              </select>
            </label>

            <label>Size
              <select name='fontSize' onChange={this.props.handleChange}>
                <option value='null'>Select a size</option>
                <option value='10px'>10px</option>
                <option value='12px'>12px</option>
                <option value='14px'>14px</option>
                <option value='16px'>16px</option>
                <option value='18px'>18px</option>
              </select>
            </label>

            <label>Alignment
              <input onChange={this.props.handleRadio} type='radio' value="left" name='fontAlignment'/>
              <input onChange={this.props.handleRadio} type='radio' value="center" name='fontAlignment'/>
              <input onChange={this.props.handleRadio} type='radio' value="right" name='fontAlignment'/>
              <input onChange={this.props.handleRadio} type='radio' value="justify" name='fontAlignment'/>
            </label>

            <label>Style
              <input onChange={this.props.handleRadio} type='radio' value="bold" name='fontStyle'/>
              <input onChange={this.props.handleRadio} type='radio' value="italics" name='fontStyle'/>
            </label>

            <label>Font Colour
              <input onChange={this.props.handleColor.bind(this)} type='color' defaultValue='#5CC5CF' name='fontColor'/>
            </label>

          </section>

          <div className='submit-button'>
              <input onChange={this.props.handleChange} type='submit' defaultValue='Generate Code Snippet'/>
          </div>
        </form>
      </div>

    )
  }
}

export {WidgetForm}