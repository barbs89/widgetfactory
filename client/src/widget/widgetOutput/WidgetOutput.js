import React from 'react'

//import style variables

import './WidgetOutput.css'




class WidgetOutput extends React.Component {


logState = (e) => {
  e.preventDefault()
  console.log(this.state)
}

render()
  {
    return (
    <div className='widget-output-container'>

    {/* //TODO: Create custom code that links to the variables selected */}
      <div className='carousel-container'>
        <h1 className='title'>this is a test title</h1>      
      </div>
    </div>  
    
    )
  }
}

export default WidgetOutput