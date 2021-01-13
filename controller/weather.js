const request = require('request-promise')
const cheerio = require('cheerio')


exports.readWeather = function(req, res) {
    let lala = request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
        console.log(body.url);
        console.log(body.explanation);
        console.log(res.body)
        
    });
    res.send({
        message: 'success',
        data: lala.body
    })
    // (async () => {
    //     let weatherData = []
    //     const response = await request({
    //         uri: "https://www.nea.gov.sg/weather",
    //         headers: {
    //             accept: "text/html",
    //             "accept-encoding": "gzip, deflate, br",
    //             "accept-language": "en-US,en;q=0.9"
    //         },
    //         gzip: true
    //     })
    //     let $ = cheerio.load(response)
    //     let day = $('div.content > div > span.day').text()
    //     $('div.stats-data--4days__item').each((i, el) => {
    //         // console.log($(el))
    //         const item = $(el).find('div.icon > img').attr('alt')
    //         console.log(item)
    //     })

    //     weatherData.push({
    //         day
    //     })
    //     console.log(weatherData)
    //     res.send({
    //         message: "success",
    //         data: weatherData
    //     })
    // })()
}