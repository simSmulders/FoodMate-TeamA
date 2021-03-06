import React from 'react';
import Swipeable from 'react-swipeable';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import img1 from '../images/home.png'
import img2 from '../images/mail.png'
import img3 from '../images/message.png'
import img4 from '../images/chat.png'
import img5 from '../images/profile.png'
import './carousel.css';

const IMG_WIDTH = "100vw";
const IMG_HEIGHT = "68vh";

const RIGHT = '-1';
const LEFT = '+1';

class SimpleCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { imageIdx: 0 };
  }

  onSwiped(direction) {
    const change = direction === RIGHT ? RIGHT : LEFT;
    const adjustedIdx = this.state.imageIdx + Number(change);
    let newIdx;
    if (adjustedIdx >= this.props.image.length) {
      newIdx = 0;
    } else if (adjustedIdx < 0) {
      newIdx = this.props.image.length - 1
    } else {
      newIdx = adjustedIdx;
    }
    this.setState({ imageIdx: newIdx });
  }

  clickedFood() {
  
  }

  render() {
    const { imageIdx = 0 } = this.state;
    const imageStyles = {
      width: IMG_WIDTH,
      height: IMG_HEIGHT,
      backgroundImage: `url(${this.props.image[imageIdx]})`,
    };
    return (
      <div>
      <div >
      <h2>What type of cuisine </h2>
      <h2 id="styling">you prefer?</h2>
      </div>
        <Swipeable
          trackMouse
          preventDefaultTouchmoveEvent
          onSwipedLeft={() => this.onSwiped(LEFT)}
          onSwipedRight={() => this.onSwiped(RIGHT)}
        >
          <div style={imageStyles} >
            <button
              onClick={() => this.onSwiped(RIGHT)}
              >⇦</button>
            <button
              onClick={() => this.onSwiped(LEFT)}
              >⇨</button>
          </div>
        </Swipeable>
        <div >
        <Link to={"/filter"}><button id="button" onClick={() => this.clickedFood()}>Choose cuisine</button></Link>
        </div>
        <div className ="menu-icons">
          <img src={img1} alt="Home" width ="30" hspace ="25" height="30"/> 
          <img src={img2} alt="Home" width ="30" hspace ="25" height="30"/>
          <img src={img3} alt="Home"  width ="30" hspace ="25" height="30"/>
          <img src={img4} alt="Home"  width ="30" hspace ="25" height="30"/>
          <img src={img5} alt="Home"  width ="30" hspace ="25" height="30"/>        
        
        </div> 
      </div>
    )
  }
}

const mapStateToProps = ({image}) => ({image}) 


export default connect(mapStateToProps)(SimpleCarousel)


