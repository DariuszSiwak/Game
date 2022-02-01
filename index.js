const [element] = document.getElementsByClassName('container__background')

const game = Array.from(Array(20))

game.forEach(() => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('card')
    element.appendChild(newDiv)

    newDiv.addEventListener('click', () => {
        if(newDiv.classList.contains('card__back')) {
            newDiv.classList.remove('card__back')
            newDiv.classList.add('card__back--animation')
            newDiv.style['animation-name'] ='rotate'
        } else {
            newDiv.classList.add('card__back')
            newDiv.classList.remove('card__back--animation')
            newDiv.style['animation-name'] ='rotate__back'
        }
    })
})
