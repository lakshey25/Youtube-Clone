addEventListener('load', () => {
    // API call
    const xhr = new XMLHttpRequest()

    
    let url1 = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyC6oV0NYq_30clC5VhFb5x14Ei67Cevzr0&part=snippet&maxResults=50&chart=mostPopular&regionCode=US`


    xhr.open('GET', url1)

    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)

            let output = ''
            for (let i = 0; i < response.items.length; i++) {
                output += `
                <div id="video_box">
                    <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank" >
                        <img
                        src=${response.items[i].snippet.thumbnails.high.url} />
                    </a>
                    
                    <h3>${response.items[i].snippet.title}</h3>
                    <p>${response.items[i].snippet.description}</p>
                </div>
            `
            }

            document.querySelector('#videos').innerHTML = output
        }
    }

    xhr.send()
})



document.querySelector('#button').addEventListener('click', () => {
    // API call
    const xhr = new XMLHttpRequest()
    const value = document.querySelector('#search').value

    let url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC6oV0NYq_30clC5VhFb5x14Ei67Cevzr0&part=snippet&q=${value}&regionCode=IN&maxResults=50`
    


    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)

            let output = ''
            for (let i = 0; i < response.items.length; i++) {
                output += `
                <div id="video_box">
                    <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank" >
                        <img
                        src=${response.items[i].snippet.thumbnails.high.url} />
                    </a>
                    
                    <h5>${response.items[i].snippet.title}</h5>
                    <p>${response.items[i].snippet.description}</p>
                </div>
            `
            }

            document.querySelector('#videos').innerHTML = output
        }
    }

    xhr.send()
})

