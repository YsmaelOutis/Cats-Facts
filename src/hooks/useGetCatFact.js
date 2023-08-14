import { useState, useEffect } from 'react'
import { getRandomFact} from './../utils/facts'


export function useGetCatFact() {
    const [fact, setFact] = useState()
  
    function refreshFact () {
      getRandomFact().then(newFact => setFact(newFact))
    }
  
    useEffect(refreshFact, [])
  
    return {fact, refreshFact}
  }