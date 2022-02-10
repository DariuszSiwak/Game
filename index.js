const [element] = document.getElementsByClassName('container__background')
const defaultImg = 'https://static.fajnyzwierzak.pl/media/uploads/media_image/original/wpis/663/kot.jpg'
let clicked = []
const [score] = document.getElementsByClassName('container__number')
const cats = [
    {
        imageURL: 'https://cdn.pixabay.com/photo/2013/07/12/19/22/cat-154642__340.png',
        imageId: 'catOne'
    },
    {
        imageURL: 'https://cdn.pixabay.com/photo/2013/07/13/13/14/tiger-160601__340.png',
        imageId: 'catTwo' 
    },
    {
        imageURL: 'https://cdn.pixabay.com/photo/2012/05/03/23/13/cat-46676__340.png',
        imageId: 'catThree'
    },
    {
        imageURL: 'https://cdn.pixabay.com/photo/2012/05/07/12/24/tiger-48301__340.png',
        imageId: 'catFour'
    },
    {
        imageURL: 'https://cdn.pixabay.com/photo/2012/04/26/10/43/jaguar-42010__340.png',
        imageId: 'catFive'
    },
    {
        imageURL: 'https://cdn.pixabay.com/photo/2015/03/29/18/19/cat-697522__340.png',
        imageId: 'catSix'
    },
    {
        imageURL: 'https://cdn.pixabay.com/photo/2016/03/31/23/37/animal-1297724__340.png',
        imageId: 'catSeven'
    },
    {
        imageURL: 'https://cdn.pixabay.com/photo/2013/07/12/17/17/kitty-151949__340.png',
        imageId: 'catEight'
    },
    {
        imageURL: 'https://cdn.pixabay.com/photo/2021/12/31/21/18/animal-6906608__340.png',
        imageId: 'catNine'
    },
    {
        imageURL: 'https://cdn.pixabay.com/photo/2016/03/31/21/12/cartoon-1296251__340.png',
        imageId: 'catTen'
    }
]

const reloadPage = (() => {
    window.location.reload(true)
})
    
cats
    .concat(cats)
    .sort((a,b) => 0.5 - Math.random())
    .forEach(item => {
        const newDiv = document.createElement('div')
        newDiv.classList.add('card')
        newDiv.style.backgroundImage = `url(${defaultImg})`
        newDiv.setAttribute('iconId', item.imageId)
        element.appendChild(newDiv)

        const changePicture = picture => {
            newDiv.style.backgroundImage = `url(${picture})`
        }
        newDiv.addEventListener('click', event => {  
            if (clicked.length === 2) {
                return
            }
            if(newDiv.classList.contains('card__back')){
                return
            }

            const listen = event.target.getAttribute('iconId')
            clicked = [...clicked, listen] 

            if(!newDiv.classList.contains('card__back')) {
                newDiv.classList.add('card__back')
                newDiv.classList.remove('card__back--animation')
                setTimeout(() => changePicture(item.imageURL),500)
                
                if (clicked.length === 2 && clicked[0] === clicked[1]){
                    return
                }
     
                setTimeout(() => {
                    if (clicked.length === 2 && clicked[0] === clicked[1]){
                        clicked = []
                        
                    score.innerHTML = Number(score.innerHTML) + 1
                        return
                    }
                    newDiv.classList.remove('card__back')
                    newDiv.classList.add('card__back--animation')
                    setTimeout(() => changePicture(defaultImg),500)
                    clicked = []
                },2000)
            } 
        })

})
