const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function getRandomFact() {
    return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then((response) => response.json())
    .then((data) => {
        return data.fact})
}