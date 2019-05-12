import React from 'react';
import FlipPage from 'react-flip-page';
import CardHider from './CardHider';

export class Card extends React.Component
{
  constructor ( props )
  {
    super( props )
    // this.cardHider = <CardHider ref={( component ) => { this.cardHider = component }} />
  }

  handleFlip ( pageNumber, direction )
  {
    this.cardHider.handleFlip( pageNumber )
  }

  render ()
  {
    return (
      <div className='cardContainer'>
        <FlipPage
          className='cardcard'
          height={600}
          width={1000}
          orientation={"horizontal"}
          pageBackground={"rgb(237, 229, 211)"}
          // onPageChange={this.handleFlip} // get this working later
          showHint={true}
          flipOnTouch={true}
          animationDuration={400}>

          {/* front page */}
          <article className='front'>
            <div className='left blank'>
              <img className='tulips' alt='tulips' src='/tulips.png' />
            </div>
            <div className='right'>
              <h1>Happy Mothers' Day!</h1>
              <img className='bmji n1' alt='bitmoji one' src='/front-bmji-1.png' />
              <img className='bmji n2' alt='bitmoji two' src='/front-bmji-2.png' />
              <img className='tulip' alt='tulip' src='/tulip.png' />
              <img className='tulip n2' alt='tulip' src='/tulip.png' />
              <img className='tulip n3' alt='tulip' src='/tulip.png' />
              <img className='tulip n4' alt='tulip' src='/tulip.png' />
              <img className='tulip n5' alt='tulip' src='/tulip.png' />
            </div>
          </article>

          {/* middle page */}
          <article className='middle'>
            <div className='left'>
              <p>Happy Mothers' Day!! I hope today is full of joy and happiness for both of you.</p>
              <p>I can't wait for the summer, when it's Mothers' day every day!</p>
              <p>Here's some bitmoji hugs to hold you over till next week! ❤️</p>
              <img className='abby bmji n4' alt='bitmoji one' src='/abby_bmji_4.png' />
              <img className='abby bmji n3' alt='bitmoji two' src='/abby_bmji_3.png' />
              <img className='drew bmji n3' alt='bitmoji three' src='/drew_bmji_3.png' />
            </div>
            <div className='right'>
              <p>See you soon!</p>
              <p>Love and miss you both!!</p>
              <img className='drew bmji n1' alt='bitmoji one' src='/drew_bmji_1.png' />
              <img className='drew bmji n2' alt='bitmoji two' src='/drew_bmji_2.png' />
              <img className='abby bmji n1' alt='bitmoji three' src='/abby_bmji_1.png' />
              <img className='abby bmji n2' alt='bitmoji four' src='/abby_bmji_2.png' />
              <div className='fromText'>
                <p>Happy Day!</p>
                <p>Love, Drew and Abby</p>
              </div>
            </div>
          </article>

          {/* back page */}
          <article className='back'>
            <div className='left'>
              <div className="back-text">
                <p>Made by Drew!</p>
                <a href='https://mcarthur.in/'>mcarthur.in/</a>
              </div>
            </div>
            <div className='right blank'>
            </div>
          </article>
        </FlipPage>
      </div>
    )
  }
}
