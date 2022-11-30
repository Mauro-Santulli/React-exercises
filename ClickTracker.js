import React from "react";

export default class ClickTracker extends React.Component {
    
    state={
        lastButtonClicked:""
    }
    getButtonClicked = (e) => {
        this.setState(state=>{
            return{ 
                lastButtonClicked: e.target.innerText 
            }
        })
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.getButtonClicked} className="first-btn">First Button</button>
                    <button onClick={this.getButtonClicked} className="second-btn">Second Button</button>
                    <button onClick={this.getButtonClicked} className="third-btn">Third Button</button>
                </div>
                {this.state.lastButtonClicked &&<h1>The last button clicked is: {this.state.lastButtonClicked}</h1>}
            </div>
        )
    }
}