import React from "react"

class Team extends React.Component{

    state = {
        numShots: 0,
        score: 0
    }

    handleShoot = (events) => {
        // this "props" is the same props available to component, eg, this.props.teamName
        this.setState((statex, props) => (
            {                     
                numShots: statex.numShots + 1
            }
        ))

        if(Math.random() > .5){
            this.setState((statex, props) => (
                {                     
                    score: statex.score + 1
                }
            ))
        }
    }

    // props is available because we're using a class - in constructor, we don't see it
    render(){
        return (
            <div className="Team">
                <div>Team Name: {this.props.teamName}</div>
                <div>Team Shots: {this.state.numShots}</div>
                <div>Team Score: {this.state.score}</div>
                <div><button onClick={this.handleShoot}>Shoot</button></div>
            </div>
        )
    }

}

export default Team;