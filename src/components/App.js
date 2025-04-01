import React, { Component, useEffect, useRef, useState } from "react";
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
    useEffect(() => {
        function handleKeyDown(e){
            if(e.key === "ArrowRight"){
                setPosition(prev => prev + 5)
                ball.current.style.transform = `translateX(${position + 5}px)`
            }
        }
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [position])
    return (
        <div>
            <button className={showBall ? "hide" : "start"} onClick={handleClick}>Start</button>
            {showBall && <div className="ball" ref={ball}></div>}
        </div>
    )
}

export default App;
