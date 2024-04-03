function fetchPage(endpoint) {
    return fetch(`https://en.wikipedia.org/api/rest_v1/page/html/${endpoint}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch ${endpoint}`)
        }
        console.log(response)
        return response
    })
    .catch(error => {
        console.log(`Error fetching ${endpoint}:`, error); 
    });
}

export { fetchPage }

