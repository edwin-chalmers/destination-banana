

function fetchHTML(endpoint) {
    return fetch(`https://en.wikipedia.org/api/rest_v1/page/html/${endpoint}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${endpoint}`)
            }
            return response.text()
        })
        .catch(error => {
            console.log(`Error fetching ${endpoint}:`, error)
        })
}

function fetchPage(pageTitle) {
    const url = new URL('https://en.wikipedia.org/w/api.php');
    const params = {
        action: 'parse',
        page: 'Mike Phipps',
        prop: 'links',
        format: 'json',
        origin: '*' // Necessary for CORS
    };

    url.search = new URLSearchParams(params).toString();


    return fetch(url)
        .then(response => response.json()) 
        .then(data => {
            console.log("data", data)
            if (data.parse && data.parse.links) {
                
                const linksArray = data.parse.links.map(link => {
                    const title = link['*'];
                    const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(title).replace(/%20/g, '_')}`;
                    return { title, url };
                });
                return linksArray;
            } else {
                console.log("No links found or error in response.");
                return [];
            }
        })
        .catch(error => {
            console.error("Error fetching Wikipedia links:", error);
            return [];
        });
}




export { fetchPage, fetchHTML }