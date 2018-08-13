import React from 'react'

// css
import './widgetForm.css'


class WidgetForm extends React.Component {

  render () {
    return (
      <div className='widget-form-container'>
        <form className='widget-form' onSubmit={this.props.handleSubmit}>
        <div className='widget-form-banner'>
              <h2>Form Options</h2>
        </div>
          <section className='widget-form-section'>
            
            <input type='checkbox' name='product-title' onChange={this.handleOnChange}/>
            <label for='product-title'>Include Product Title</label>
            
            <input type='checkbox' name='product-description' onChange={this.handleOnChange}/>
            <label for='product-descrition'>Include Product Description</label>
            
            <input type='checkbox' name='product-price' onChange={this.handleOnChange}/>
            <label for='product-price'>Include Product Price</label>

            <input type='checkbox' name='call-to-action' onChange={this.handleOnChange}/>
            <label for='call-to-action'>Include Call to Action</label>
            <input type='text' name='call-to-action-desc' placeholder='Buy Now...' onChange={this.handleOnChange} handleShow={this.handleShow}/>

          </section>

          <div className='widget-form-banner'>
              <h2>Card Styles</h2>
          </div>
          <section className='widget-form-section'>
          
          <label>Background Colour
            <input type='color' name='background-colour' value='#C4C4C4' onChange={this.handleOnChange}/>
          </label>

          <label>Card Colour
            <input type='color' value='#F0F0F0' name='card-colour' onChange={this.handleOnChange}/>
          </label>

          <label>Button Colour
            <input type='color' value='#5CC5CF' name='button-colour' onChange={this.handleOnChange}/>
          </label>

          <label>Border
            <select name='border' onChange={this.handleOnChange}>
              <option value="">none</option>
              <option value="border-thin">thin</option>
              <option value="border-thick">thick</option>
            </select>
          </label>

          <label>Border Style
            <input type='radio' id="border-style-1" name='border-style' onChange={this.handleOnChange}/>
            <input type='radio' id="border-style-2" name='border-style' onChange={this.handleOnChange}/>
          </label>
          {/* // TODO: remove radio default */}

          </section>

          <div className='widget-form-banner'>
              <h2>Font Styles</h2>
          </div>

          <section className='widget-form-section'>

            <label>Font
              <select name='font-selector' onChange={this.handleOnChange}>
                <option value='Roboto'>Roboto</option>
                <option value='Segoe UI'>Segoe UI</option>
                <option value='Ubuntu'>Ubuntu</option>
                <option value='Open Sans'>Open Sans</option>
                <option value='Helvetica Neue'>Helvetica Neue</option>
              </select>
            </label>

            <label>Size
              <select name='size-selector' onChange={this.handleOnChange}>
                <option value='14px'>14px</option>
                <option value='16px'>16px</option>
                <option value='18px'>18px</option>
                <option value='20px'>20px</option>
                <option value='24px'>24px</option>
              </select>
            </label>

            <label>Alignment
              <input type='radio' id="font-alignment-1" name='font-alignment' onChange={this.handleOnChange}/>
              <input type='radio' id="font-alignment-2" name='font-alignment' onChange={this.handleOnChange}/>
              <input type='radio' id="font-alignment-3" name='font-alignment' onChange={this.handleOnChange}/>
              <input type='radio' id="font-alignment-4" name='font-alignment' onChange={this.handleOnChange}/>
            </label>

            <label>Style
              <input type='radio' id="bold" name='font-style' onChange={this.handleOnChange}/>
              <input type='radio' id="italics" name='font-style' onChange={this.handleOnChange}/>
            </label>

            <label>Font Colour
              <input type='color' value='#5CC5CF' name='font-colour' onChange={this.handleOnChange}/>
            </label>

          </section>

          <div className='widget-form-submit'>
                  <input type='submit' value='Generate Code Snippet' onSubmit={this.handleSumbit}/>
          </div>
        </form>
      </div>

    )
  }
}

export default WidgetForm