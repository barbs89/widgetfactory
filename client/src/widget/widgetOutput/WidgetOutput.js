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
        <div id='123456' className='carousel-card'>

            <section className='card-header'>
              <h2 className='cardTitle'>Latvian Wooden Chair</h2>          
              <h2 className='card-price'>$299</h2>
            </section>

            <section className='card-body'>
              <p className='card-copy'>this is a special lativan chair. It is made by Ron Swonson</p>
            </section>

            <section className='botton'>
              <button className='cta-button'>Buy Now</button>
            </section>
                    
        </div>   
      </div>
    </div>  
    
    )
  }
}

export default WidgetOutput