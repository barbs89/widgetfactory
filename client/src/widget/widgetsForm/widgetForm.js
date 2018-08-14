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
            
            <input type='checkbox' name='title' value={this.props.title}/>
            <label for='title'>Include Title</label>
            
            <input type='checkbox' name='description' value={false}/>
            <label for='description'>Include Description</label>
            
            <input type='checkbox' name='price'/>
            <label for='price'>Include Price</label>

            <input type='checkbox' name='callToAction'/>
            <label for='callToAction'>Include Call to Action</label>
            <input type='text' name='callToActionDesc' placeholder='Buy Now...' handleShow={this.props.handleShow}/>

          </section>

          <div className='widget-form-banner'>
              <h2>Card Styles</h2>
          </div>
          <section className='widget-form-section'>
          
          <label>Background Colour
            <input type='color' name='backgroundColor' value='#C4C4C4'/>
          </label>

          <label>Card Colour
            <input type='color' value='#F0F0F0' name='cardColor'/>
          </label>

          <label>Button Colour
            <input type='color' value='#5CC5CF' name='buttonColor'/>
          </label>

          <label>Border
            <select name='border'>
              <option value="">none</option>
              <option value="border-thin">thin</option>
              <option value="border-thick">thick</option>
            </select>
          </label>

          <label>Border Style
            <input type='radio' id="border-style-1" name='borderStyle'/>
            <input type='radio' id="border-style-2" name='borderStyle'/>
          </label>

          {/* // TODO: remove radio default */}

          </section>

          <div className='widget-form-banner'>
              <h2>Font Styles</h2>
          </div>

          <section className='widget-form-section'>

            <label>Font
              <select name='font'>
                <option value='Roboto'>Roboto</option>
                <option value='Segoe UI'>Segoe UI</option>
                <option value='Ubuntu'>Ubuntu</option>
                <option value='Open Sans'>Open Sans</option>
                <option value='Helvetica Neue'>Helvetica Neue</option>
              </select>
            </label>

            <label>Size
              <select name='fontSize'>
                <option value='14px'>14px</option>
                <option value='16px'>16px</option>
                <option value='18px'>18px</option>
                <option value='20px'>20px</option>
                <option value='24px'>24px</option>
              </select>
            </label>

            <label>Alignment
              <input type='radio' id="alignment1" name='alignment'/>
              <input type='radio' id="alignment2" name='alignment'/>
              <input type='radio' id="alignment3" name='alignment'/>
              <input type='radio' id="alignment4" name='alignment'/>
            </label>

            <label>Style
              <input type='radio' id="bold" name='fontStyle'/>
              <input type='radio' id="italics" name='fontStyle'/>
            </label>

            <label>Font Colour
              <input type='color' value='#5CC5CF' name='fontColor'/>
            </label>

          </section>

          <div className='submit-button'>
              <input type='submit' value='Generate Code Snippet'/>
          </div>
        </form>
      </div>

    )
  }
}

export default WidgetForm