let body =document.querySelector('body')
let form =document.querySelector('form')
let input =document.querySelector('input')
let box = document.querySelector('.box')

let API_KEY = '32dc508ca01d4f7980b85717231104'

const getData = async(e) => {
    e.preventDefault()

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input.value}&aqi=yes`)
        const data = await response.json()
        let cityName = data.location.name
        let temp = data.current.temp_c
        let condition = data.current.condition.text
        let icon = data.current.condition.icon
        let cityHeading = document.querySelector('h3')
        let tempHeading = document.querySelector('h2')
        let conditionPara = document.querySelector('p')
        let iconImage = document.querySelector('img')
        cityHeading.innerText = cityName
        tempHeading.innerText = temp
        conditionPara.innerText = condition
        iconImage.setAttribute('src' , 'https:'+icon)
        // container.style.background = `url()`
    } catch (error) {
        window.alert("Please enter valid city name")
    }

    form.reset()

}



form.addEventListener('submit' , getData)