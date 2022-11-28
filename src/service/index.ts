

export async function get_all_province(){
    return fetch('http://122.9.66.251:5000/get_all_province')
    .then(data=>data.json())
}


export async function get_all_gender(){
    return fetch('http://122.9.66.251:5000/get_all_gender')
    .then(data=>data.json())
}

export async function get_top10_cat(){
    return fetch('http://122.9.66.251:5000/get_top10_cat')
    .then(data=>data.json())
}

export async function get_top10_item(){
    return fetch('http://122.9.66.251:5000/get_top10_item')
    .then(data=>data.json())
}

export async function get_top10_brand(){
    return fetch('http://122.9.66.251:5000/get_top10_brand')
    .then(data=>data.json())
}

export async function get_top10_merchant(){
    return fetch('http://122.9.66.251:5000/get_top10_merchant')
    .then(data=>data.json())
}

