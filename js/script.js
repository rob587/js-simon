const form = document.getElementById('answers-form')
const input = document.querySelectorAll('input')
const countDown = document.getElementById('countdown')
const listNumber = document.getElementById('number-list')
const message = document.getElementById('message')
const instructions = document.getElementById('instructions')

const getRandomNumbers = (min, max, tot) => {
    const numbers = []
    while(numbers.length<tot){
        const randomNumber = Math.floor(Math.random()* (max-min+1)) + min
        if (!numbers.includes(randomNumber)) numbers.push(randomNumber)
    }
    return numbers;
}

const min = 1;
const max = 50;
const total = 5
let time = 10;