import React from 'react';


export default class CounterClass extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        
    }

    increment = ()=>{
        this.setState({ count: this.state.count + 1 })
    }
    decrement = ()=>{
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <div className="col-md-6">
                <h2>Class Component</h2>
                <h1>{this.state.count}</h1>
                <button className="btn btn-primary me-3" onClick={this.increment}>+</button>
                <button className="btn btn-danger" onClick={this.decrement}>-</button>
                {/* <button className="btn btn-primary me-3" onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                <button className="btn btn-danger" onClick={() => this.setState({ count: this.state.count - 1 })}>-</button> */}
            </div>
        )
    }
}