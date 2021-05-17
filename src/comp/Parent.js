
import React, { Component } from 'react'
import RegComponent from "./RegComponent";
import Purecomponent from "./PureComponent";

class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'dayoung'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'dayoung'
            })
        }, 2000)
    }


    render() {
        console.log('*****************parent comp render')
        return (
            <div className="App">
                Parent Comp
                <RegComponent name={this.state.name} />
                <Purecomponent name={this.state.name} />
            </div>
        );
    }

}

export default Parent;
