const slides = [];

for ( let i = 1; i <= 10; i++ ) {
  slides.push( {
    'id': i,
    'title': 'Sample#' + i,
    'price': Math.floor(Math.random() * 10000)
  } );
}

export default slides;