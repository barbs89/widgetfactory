import React from 'react'

class WidgetForm extends React.Component {

  render () {
    return (
      <div className='widget-form-container'>
        <form onSubmit={this.props.handleSubmit}>
          <div className='widget-form-options'>
            <label>Product Title
              <input type="checkbox" checked="checked" value={this.state.productTitle} onChange={this.handleOnChange}/>
              <span class="checkmark"></span>
            </label>

          </div>
          <div className='loc-submit'>
                  <input type='submit' value='Save Changes'/>
          </div>
        </form>
      </div>

    )
  }
}

export default WidgetForm