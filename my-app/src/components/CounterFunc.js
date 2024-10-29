import { useState } from "react";


function CounterFunc (){
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    const plusFive = () => {       
            setCount((count) => count + 5)        
    }

    const minFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((count) => count - 1)
        }
    }

    return (
      <div className="col-md-6 border-end">
        <h2>Functional Coponent</h2>
        <h1>{count}</h1>
        <button className="btn btn-primary" onClick={increment}>
          +
        </button>
        <button className="btn btn-danger m-3" onClick={decrement}>
          -
        </button>
        <button className="btn btn-success" onClick={plusFive}>
            +5
        </button>
        <button className="btn btn-warning m-3" onClick={minFive}>
            -5
        </button>
        {/* <button className="btn btn-primary me-3" onClick={() => setCount(count + 1)}>+</button>
            <button className="btn btn-danger" onClick={() => setCount(count - 1)}>-</button> */}
      </div>
    );
}

export default CounterFunc;