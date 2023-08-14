import './App.css'

import { useGetCatImageUrl } from './hooks/useGetCatImageUrl'
import { useGetCatFact } from './hooks/useGetCatFact'

function App() {
  const {fact, refreshFact} = useGetCatFact()
  const { imageUrl } = useGetCatImageUrl(fact)
  
  function getNewFact() {
    refreshFact()
  }

  return (
    <main>
      <h1>Facts & Cats</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="Image extracted using the three first words of the fact" />}
      <button onClick={getNewFact}>Another fact!</button>
    </main>
  )
}

export default App
