
import React, { PureComponent } from 'react'

class Purecomponent extends PureComponent {
    render() {
        console.log('*****************pure comp render')
        return (
            <div className="App">
                Pure Comp {this.props.name}
            </div>
        );
    }

}

export default Purecomponent;
