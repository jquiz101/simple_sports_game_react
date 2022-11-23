import React from "react"

class Counter extends React.Component{

    // predefined object with properties, only available with class component
    state = {
        counter: this.props.counterStart || 0,
        name: "Joe"
    }

    incrementClicked = (event) => {
        this.setState((state, props) => (
            {                     
                counter: state.counter + 1
            }
        ))
    }

    decrementClicked = (event) => {
        if (this.state.counter <= 0) {
            return
        }

        this.setState((state, props) => (
            {                     
                counter: state.counter - 1
            }
        ))
    }

    render(){
        console.log(this.state)
        return (
            <div className="Counter">
                <button onClick={this.decrementClicked}>-</button>
                &nbsp;{this.state.counter}&nbsp;
                <button onClick={this.incrementClicked}>+</button>                        
            </div>
        )

    }
}

export default Counter;