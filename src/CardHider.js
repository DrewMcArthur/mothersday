import React from 'react';

export default class CardHider extends React.Component
{
  constructor ( props )
  {
    super( props )
    if ( props.ref )
    {
      props.ref( this )
    }
    this.hiderWidth = ( window.innerWidth / 2 ) - 3;
  }

  handleFlip ( pageNumber )
  {
    console.log( pageNumber )
  }

  hide ()
  {
    this.cardHider.hide()
  }

  render ()
  {
    return ( <div
      className='cardHider'
      style={{ width: this.hiderWidth + "px" }}
      ref={( component ) =>
      {
        this.cardHider = component
      }} /> )
  }
}
