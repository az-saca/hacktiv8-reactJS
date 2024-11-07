import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardName from './components/CardName'
import ButtonChange from './components/ButtonChange'
import axios from 'axios'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


class AppClass extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'John Doe'
    }
  }

  // change name => event listener => arrow function
  changeName = () => {
    // tidak bisa langsung mengubah state => this.state.name = 'Jane Doe'
    // harus menggunakan setState
    this.setState({
      name: 'Jane Doe'
    })
  }

  // harusnya berjalan ketika komponen di-render
  componentDidMount() {
    console.log('Component did mount')
  }
  
  // akan berjalan ketika ada state yang berubah
  componentDidUpdate(_, prevState) {
    if (prevState.name !== this.state.name) {
      console.log('Component did update')
    }
  }

  shouldComponentUpdate(_, nextState) {
    if (nextState.name === 'Jane Doe') {
      console.log('Component should update')
      return false
    }
    return true
  }

  // merender html
  render() {
    return (
        <>
          {/* <h1>Hello {this.state.name}!</h1> */}
          <CardName name={this.state.name}></CardName>
          <ButtonChange changeEventListener={this.changeName}></ButtonChange>
          {/* <button onClick={this.changeName}>Click Me</button> */}
        </>   
    )
  }
}


function AppFunction() {
  const [name, setName] = useState('John Doe') // mereturn array dengan 2 elemen
  // elemen 1 => state
  // elemen 2 => function untuk mengubah state

  const [age, setAge] = useState(20)

  // use effect akan berjalan ketika pertama kali di-render dan ketika state name berubah (componenDidUpdate)
  useEffect(() => {
    // apapun yang mau kita lakukan ketika lifecycle berjalan
  }, [name])

  // compponentDidUpdate
  useEffect(() => {
    // apapun yang mau kita lakukan ketika lifecycle berjalan
  }, [age])

  // componenDidMount => akan berjalan ketika komponen di-render => fetch API
  useEffect(() => {

  }, [])

  // akan berjalan ketika komponen di-render dan ketika ada state yang berubah
  useEffect(() => {})

  // https://api.currencyfreaks.com/v2.0/rates/latest?apikey=9fbb9a95bf16423797fcaae5e8f1024b

}


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    // fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=9fbb9a95bf16423797fcaae5e8f1024b')
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result.rates)
    //     let rates = [
    //       {
    //         currency: 'CAD',
    //         exchange_rate: result.rates.CAD,
    //         we_buy: 1.05 * result.rates.CAD, // hitung lagi
    //         we_sell: 1000 // nanti dihitung sendiri
    //       },
    //       {
    //         currency: 'IDR',
    //         exchange_rate: result.rates.IDR,
    //         we_buy: 1.05 * result.rates.IDR, // hitung lagi
    //         we_sell: 1000 // nanti dihitung sendiri
    //       }
    //     ]

    //     setData(rates)
    //   })

    axios.get('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=9fbb9a95bf16423797fcaae5e8f1024b')
    .then(response => {

      console.log(response.data)
      /**
       * {
       *  data: {}
       * }
       */
      // console.log(data.data.rates)
      let rates = [
        {
          currency: 'CAD',
          exchange_rate: response.data.rates.CAD,
          we_buy: 1.05 * response.data.rates.CAD, // hitung lagi
          we_sell: 1000 // nanti dihitung sendiri
        },
        {
          currency: 'IDR',
          exchange_rate: response.data.rates.IDR,
          we_buy: 1.05 * response.data.rates.IDR, // hitung lagi
          we_sell: 1000 // nanti dihitung sendiri
        }
      ]

      setData(rates)
    })

  }, [])

  // const data = [
  //   {
  //     currency: 'USD',
  //     we_buy: 14000,
  //     exchange_rate: 14050,
  //     we_sell: 14060
  //   },
  //   {
  //     currency: 'EUR',
  //     we_buy: 16000,
  //     exchange_rate: 16050,
  //     we_sell: 16060
  //   }
  // ]

  return(
    <>
    <table className='' style={{backgroundColor: 'black', font: 'caption'}}>
      <tr>
        <th>Currency</th>
        <th>Exchange Rate</th>
        <th>We Buy</th>
        <th>We Sell</th>
      </tr>
      {
        data.map((rate, index) => {
          return(
            <tr key={index}>
              <td>{rate.currency}</td>
              <td>{rate.exchange_rate}</td>
              <td>{rate.we_buy}</td>
              <td>{rate.we_sell}</td>
            </tr>
          )
        })
      }
    </table>
    </>
  )


}

export default App
