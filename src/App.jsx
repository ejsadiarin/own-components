import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RecipeList from './components/Recipe'
import Clock from './components/Clock'
import StoryTray from './components/StoryTray'
import Quotes from './components/Quotes'

function App() {
  const [count, setCount] = useState(0)
  const time = new Date();

  return (
    <div className="App">
      <p>testestsetstest</p>

      <RecipeList />

      {/* Pass time props in Clock component */}
      <Clock time={time}/> 
      <StoryTray />
      <hr />
      <Quotes />
    </div>
  )
}

export default App
