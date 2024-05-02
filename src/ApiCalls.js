const localServer = 'http://localhost:3001'
const externalServer = 'https://calmingbe-850b1d5e55e9.herokuapp.com'

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
        page: pageTitle,
        prop: 'links',
        format: 'json',
        origin: '*' // Necessary for CORS
    };

    url.search = new URLSearchParams(params).toString();
    return fetch(url)
        .then(response => response.json()) 
        .then(data => {
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

const fetchPhotos = async (endpoint) => {
    const getPics = await fetch(`https://en.wikipedia.org/api/rest_v1/page/media-list/${endpoint}`)
    .then(response => response.json())
    return getPics
}

const getFeatured = async (endpoint) => {
    const fetchFeat = await fetch(`https://en.wikipedia.org/api/rest_v1/feed/featured/${endpoint}`)
    .then(response => response.json())
    console.log(fetchFeat)
    return fetchFeat
}

const postUser = async (gameData) => {
    console.log(gameData)
    try {
        const response = await fetch(`${externalServer}/api/v1/banana/users/${gameData.id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data) {
            console.log(data);
            return postUserData(gameData); // Ensure you return here to catch any errors from postUserData
        } else {
            console.log("No data received:", data);
        }
    } catch (error) {
        console.error("Error fetching user data:", error.message);
    }
};


const postUserData = async (gameData) => {
    console.log(gameData)
        const userData = {
            "user_id": gameData.id,
            "date": gameData.date,
            "gameId": gameData.gameId,
            "gameType": gameData.gameType,
            "topic": gameData.topic,
            "clicks": gameData.clicks,
            "links": gameData.links
        }
    try {
        const response = await fetch(`${externalServer}/api/v1/banana/users/${gameData.id}`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(userData) 
        });
        const data = await response.json();

        if (response.ok) {
            return data;
        } else {
            throw new Error(`Failed to create user: ${response.status} ${data.message}`);
        }
    } catch (error) {
        console.error('Error creating user:', error.message);
    }
}

function getAlphanumericCharacters(input) {
    const regex = /[a-zA-Z0-9]/g;
    const matches = input.match(regex); 
    return matches || [];
}

async function deterministicEncryptData(data, cryptoModule) {
    const encoder = new TextEncoder();
    const passphrase = 'your-secret-passphrase';
    const hash = await cryptoModule.subtle.digest('SHA-256', encoder.encode(passphrase));
    const key = await cryptoModule.subtle.importKey(
        'raw',
        hash,
        { name: 'AES-GCM' },
        false,
        ['encrypt', 'decrypt']
    );
    const iv = new Uint8Array(12); 
    const encryptedData = await cryptoModule.subtle.encrypt(
        { name: 'AES-GCM', iv },
        key,
        encoder.encode(JSON.stringify(data))
    );

    return { encryptedData, iv, key };
}

const getIP = async () => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const { encryptedData, iv, key } = await deterministicEncryptData(data, window.crypto);
        const encryptedString = btoa(String.fromCharCode(...new Uint8Array(encryptedData)));
        return encryptedString;
    } catch (error) {
        console.log('Error fetching IP:', error);
        return null; 
    }
}

const checkUser = async () => { 
    const existingUser = JSON.parse(localStorage.getItem('bananaUser'));
    if (!existingUser) {
        const encrIP = await getIP(); 
        return encrIP; 
    }
}

checkUser().then((encrIP) => {
    if (encrIP) {
        const cleanEncrIP = getAlphanumericCharacters(encrIP).join('')
        const newUser = {
            id: cleanEncrIP,
            name: ''
        }
        localStorage.setItem('bananaUser', JSON.stringify(newUser))
    } else {
        // console.log('No new user needed to fetch or failed to fetch IP.');
    }
}).catch((error) => {
    console.error('Error during user check:', error);
});
  
export { fetchPage, fetchHTML, fetchPhotos, getFeatured, postUser}