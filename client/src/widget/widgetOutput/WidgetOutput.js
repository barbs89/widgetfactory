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
        <div id='123456' className='carousel-card'>

            <section className='card-header'>
              <h2 className='cardTitle'>Data Name</h2>          
              <h2 className={'card-price'}>Data Price</h2>
            </section>

            <section className='card-body'>
              <p className='card-copy'>Data description ..... .... .... .... .... ... ..</p>
            </section>

            <section className='button'>
              <button className='cta-button'>Buy Now</button>
            </section>
                    
        </div>   
      </div>
    </div>  
    
    )
  }
}

export {WidgetOutput}