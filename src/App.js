import logo from './logo.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/title'

function App() {
  const redTitle = true
  return (
    <div className="App">
      <h1>react com css</h1>
      <MyComponent />
      <p>paragrafo appjs</p>
      <h2 className={redTitle ? 'red-title' : 'title'}>
        Esse titulo vai ter classe dinamica
      </h2>
      <Title />
    </div>
  )
}

export default App
