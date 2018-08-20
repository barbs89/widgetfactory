import React from 'react'
import './WidgetOutput.css'

//import style variables

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
      <div className='container'>
        <div className='carousel-card'>
         <h1>the code output will go here</h1>           
        </div>   
      </div>
    </div>  
    
    )
  }
}

export {WidgetOutput}