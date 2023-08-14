import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'


export function useGetCatImageUrl(fact) {
    const [imageUrl, setImageUrl] = useState()
  
    // Fetch an image from the Cat as a Service API using the first three words of the fact
    useEffect(() => {
      if (!fact) return
  
      const firstThreeWords = fact.split(' ', 3).join(' ')
  
      fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
        .then((response) => response.json())
        .then((data) => setImageUrl(data.url))
    }, [fact])
  
    return {imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
  }