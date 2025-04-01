import React, { Component, useRef, useState } from "react";
import '../styles/App.css';

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {
   
//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Start</button>
// 		}
//     }

//     // bind ArrowRight keydown event
//     componentDidMount() {
      
//     }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }
// }

const App = () => {
    const [showBall, setShowBall] = useState(false)
    const [position, setPosition] = useState(0)
    const ball = useRef(null)
    function handleClick(){
        setShowBall(true)
    }
    document.addEventListener("keydown", (e) => {
        if(showBall && e.key === "ArrowRight"){
            setPosition(pos => pos + 5)
            ball.current.style.transform = `translateX(${position}px)`
        }
    })
    return (
        <div>
            <button className={showBall ? "hide" : "start"} onClick={handleClick}>Start</button>
            {showBall && <div className="ball" ref={ball}></div>}
        </div>
    )
}

export default App;
