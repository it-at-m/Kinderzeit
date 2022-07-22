const ROOT_GEOCODE_API_URL =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const MAPBOX_API_TOKEN =
    'sk.eyJ1IjoiYW5kcmVpYnJhdHUiLCJhIjoiY2w1d2VudmtzMGV4ZTNkbTV0czg3cWZ4NiJ9.1laBmGRRvXS6Jw0BRCilhA'
let MAPBOX_TYPING_TIMEOUT = null

export function geocodeUserInput(
    userInput: string,
    callback: (geocodes: { coordinates: number[]; placeName: string }[]) => void
) {
    // TODO: Refactor to use Promises instead of callback
    if (userInput.length == 0) return
    const newTimeout = setTimeout(() => {
        const encoding = encodeURI(userInput)
        fetch(
            `${ROOT_GEOCODE_API_URL}/${encoding}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAPBOX_API_TOKEN}`
        )
            .then((v) => v.json())
            .then((v: object[]) =>
                callback(
                    v['features'].map((o) => ({
                        placeName: o['place_name'],
                        coordinates: o['geometry']['coordinates'],
                    }))
                )
            )
    }, 1000)
    if (MAPBOX_TYPING_TIMEOUT) {
        clearTimeout(MAPBOX_TYPING_TIMEOUT)
    }
    MAPBOX_TYPING_TIMEOUT = newTimeout
}

export async function geocodeUserInputServer(userInput: string) {
    // TODO: Refactor to use Promises instead of callback
    if (userInput.length == 0) return
    const encoding = encodeURI(userInput)
    const res: { placeName: string; coordinates: number[] }[] = await fetch(
        `${ROOT_GEOCODE_API_URL}/${encoding}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAPBOX_API_TOKEN}`
    )
        .then((v) => v.json())
        .then((v: object[]) =>
            v['features'].map<{ placeName: string; coordinates: number[] }[]>(
                (o) => ({
                    placeName: o['place_name'],
                    coordinates: o['geometry']['coordinates'],
                })
            )
        )
    return res
}

export async function matrixDistance(coords: number[][]) {
    // Return time in seconds from first point to all others in array of arrays
    const query = coords.map((v) => v.join(',')).join(';')
    const res = await fetch(
        `https://api.mapbox.com/directions-matrix/v1/mapbox/driving/${query}?sources=0&annotations=distance,duration&access_token=${MAPBOX_API_TOKEN}`
    ).then((res) => res.json())
    return res
}
