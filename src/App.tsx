import './App.scss'
import { BackgroundInfo, Intention, Links, Quote, Settings, Weather } from "./components";


function App() {
  return (
    <div className="pageContainer">
      <Links />
      <Weather />
      <Settings />
      <Quote />
      <BackgroundInfo />
      <Intention />
    </div>
  )
}

export default App
