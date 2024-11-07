import React from "react";

export default class ButtonChange extends React.Component {
    render() {
        return(
            <>
                <button onClick={this.props.changeEventListener}>Click Me</button>
            </>
        )
    }
}