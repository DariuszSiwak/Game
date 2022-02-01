const container = document.getElementsByClassName('container__background')[0]

// const game = Array.from(Array(20)).map(() => {
//     url: ("https://artimento.pl/environment/cache/images/1200_1200_productGfx_1305/Neonowy-kotek-Artimento.webp")
// })

const game = Array.from(Array(20))

game.forEach(item => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('card')
    container.appendChild(newDiv)

    newDiv.addEventListener('click', () => {
        
        newDiv.classList.add('back')
        newDiv.style['animation-name'] ='rotate'
        // newDiv.classList.remove('card')

    })
})
