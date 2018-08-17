import React from 'react'
import classNames from 'classnames'
import './WidgetOutput.css'

//import style variables

class WidgetOutput extends React.Component {


logState = (e) => {
  e.preventDefault()
  console.log(this.state)
}

render()
  {
    const cardProp = classNames('carousel-card', 'borderStyle', 'borderOutline', 'cardColor') 

    return (
    <div className='widget-output-container'>
    {/* //TODO: Create custom code that links to the variables selected */}
      <div className='carousel-container'>
        <div id='123456' className={cardProp}>

            <section className='card-header'>
              <h2 classNames='cardTitle'>Data Name</h2>          
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

export default WidgetOutput