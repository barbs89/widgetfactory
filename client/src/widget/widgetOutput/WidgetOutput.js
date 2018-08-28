import React from 'react'
import './WidgetOutput.css'

//import style variables

class WidgetOutput extends React.Component {
render()
  {
    return (
    <div className='widget-output-container'>
    {/* //TODO: Create custom code that links to the variables selected */}
      <div className='iframe-container'>
         <iframe title='widget-iframe' className='widget-iframe' src="http://localhost:3000/widgets/carousel" allowFullScreen></iframe>
      </div>
      <div className='output-container'>
        <h1>Place the script below into your HTML doc</h1>
        <p className='output-script'>Your Iframe script is: </p>
      </div>
    </div>  
    
    )
  }
}

export {WidgetOutput}