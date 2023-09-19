const url = 'https://api.coincap.io/v2'


function getAssets() {
    const path = url + "/assets"
    return fetch(path + "?limit=20").then(
        res => res.json().then(
            res => res.data
        )
    )
}

function getAsset(id) {
    const path = url + "/assets/"
    return fetch(path + id).then(
        res => res.json().then(
            res => res.data
        )
    )
}

function getAssetHistory(id) {
    const now = new Date()
    const end = now.getTime()
    now.setDate(now.getDate() -1)
    const start = now.getTime()

    const path = url + "/assets/"
    return fetch(path + id+ "/history?interval=h1&start="+ start + "&end=" + end).then(
        res => res.json().then(
            res => res.data
        )
    )
}

function getMarkets(id) {
    const path = url + "/assets/"
    return fetch(path + id+ "/markets?limit=5").then(
        res => res.json().then(
            res => res.data
        )
    )
}

function getExchange(id) {
    const path = url + "/exchanges/"
    return fetch(path + id).then(
        res => res.json().then(
            res => res.data
        )
    )
}

export default {
    getAssets,
    getAsset,
    getAssetHistory,
    getMarkets,
    getExchange
}