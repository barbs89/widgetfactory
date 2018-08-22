import React from 'react'

// css
import './widgetForm.css'
// icon comps
import {BorderRoundIcon, BorderSharpIcon, AlignCentreIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon, FontItalicsIcon, FontBoldIcon, CheckboxTickIcon} from '../../Assets/icons/icons.js'


class WidgetForm extends React.Component {

  render () {
    return (
      <div className='widget-form-container'>
        <form className='widget-form' onSubmit={this.props.handleSubmit}>
        <div className='widget-form-banner'>
              <h2>Form Options</h2>
        </div>
        <section className='widget-form-section'>
          
          <h4>Include Title</h4>
          <input onClick={this.props.handleShow} id='card-show-title' type='checkbox' name='titleCard'/>
          <label htmlFor='card-show-title'>
          <CheckboxTickIcon />
          </label>
          
          <h4>Include Description</h4>
          <input onClick={this.props.handleShow} id='card-show-description' type='checkbox' name='descCard'/>
          <label htmlFor='card-show-description'>
          <CheckboxTickIcon />
          </label>
          
          <h4>Include Price</h4>
          <input onClick={this.props.handleShow} id='card-show-price' type='checkbox' name='priceCard'/>
          <label htmlFor='card-show-price'> 
          <CheckboxTickIcon />
          </label>


          <h4>Include Call to Action</h4>
          <input onClick={this.props.handleShow} id='card-show-cta' type='checkbox' name='ctaCard'/>
          <label htmlFor='card-show-cta' >
          <CheckboxTickIcon />
          </label>

          <h4>Call to Action</h4>
          <input onChange={this.props.handleChange} type='text' name='callToActionDesc' placeholder='Buy Now...'/>

        </section>

        <div className='widget-form-banner'>
            <h2>Card Styles</h2>
        </div>

        <section className='widget-form-section'>
          <h4>Background Colour</h4>
          <input onChange={this.props.handleColor.bind(this)} type='color' name='backgroundColor' defaultValue='#C4C4C4'/>

          <h4>Card Colour</h4>
          <input onChange={this.props.handleColor.bind(this)} type='color' defaultValue='#F0F0F0' name='cardColor'/>

          <h4>Button Colour</h4>
          <input onChange={this.props.handleColor.bind(this)} type='color' defaultValue='#5CC5CF' name='buttonColor'/>
          
          <h4>Border Outline</h4>
          <section className='border-outline'>
            <select name='borderOutline' onChange={this.props.handleChange}>
              <option value="none">none</option>
              <option value="solid">solid</option>
              <option value="inset">inset</option>
              <option value="outset">outset</option>
            </select>
          </section>
          
          <section className='border-styles'>
            <h4>Border Styles</h4>
            <input onChange={this.props.handleRadio} type='radio' value='0' id='border-sharp' name='borderStyle'/>
            <label htmlFor='border-sharp'>
              <BorderSharpIcon />
            </label>
            <input className='border-smooth' onChange={this.props.handleRadio} type='radio' value='.3em' id='border-smooth' name='borderStyle'/>
            <label htmlFor='border-smooth'>
              <BorderRoundIcon />
            </label>
          </section>

        </section>

          <div className='widget-form-banner'>
              <h2>Font Styles</h2>
          </div>

          <section className='widget-form-section'>
            <h4>Font Family</h4>  
              <select name='font' onChange={this.props.handleChange} >
                <option value='null'>Select a font</option>
                <option value='Roboto'>Roboto</option>
                <option value='Segoe UI'>Segoe UI</option>
                <option value='Ubuntu'>Ubuntu</option>
                <option value='Open Sans'>Open Sans</option>
                <option value='Helvetica Neue'>Helvetica Neue</option>
              </select>

            <h4>Font Size</h4>  
              <select name='fontSize' onChange={this.props.handleChange}>
                <option value='null'>Select a size</option>
                <option value='10px'>10px</option>
                <option value='12px'>12px</option>
                <option value='14px'>14px</option>
                <option value='16px'>16px</option>
                <option value='18px'>18px</option>
              </select>

            <h4>Text Alignment</h4>
              <input onChange={this.props.handleRadio} id='align-left' type='radio' value="left" name='fontAlignment'/>
              <label htmlFor='align-left'>
                <AlignLeftIcon />
              </label>

              <input onChange={this.props.handleRadio} id='align-center'type='radio' value="center" name='fontAlignment'/>
              <label htmlFor='align-center'>
                <AlignCentreIcon />
              </label>

              <input onChange={this.props.handleRadio} id='align-right' type='radio' value="right" name='fontAlignment'/>
              <label htmlFor='align-right'>
                <AlignRightIcon />
              </label>

              <input onChange={this.props.handleRadio} id='align-justify' type='radio' value="justify" name='fontAlignment'/>
              <label htmlFor='align-justify'>
                  <AlignJustifyIcon />
              </label>

          
            <h4>Font Style</h4>  
              <input onChange={this.props.handleCheck} id='font-italics' type='checkbox' value="italic" name='fontStyle'/>
              <label htmlFor='font-italics'>
                <FontItalicsIcon />
              </label>

              <input onChange={this.props.handleCheck} id='font-bold' type='checkbox' value="bold" name='fontWeight'/>
              <label htmlFor='font-bold'>
                <FontBoldIcon />
              </label>

            <h4>Font Colour</h4>  
            <input onChange={this.props.handleColor.bind(this)} type='color' defaultValue='#5CC5CF' name='fontColor'/>

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