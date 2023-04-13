import basicinnerworkingsofcamera from '../images/lifestyle/basicinnerworkingsofcamera.jpg'
import vintagebeautyindecorations from '../images/lifestyle/vintagebeautyindecorations.jpg'
import myshinynewbackpack from '../images/fashion/myshinynewbackpack.jpg'
import aguidetolatestinfashion from '../images/beauty/aguidetolatestinfashion.jpg'
import prosconsofbeingamodel from '../images/fashion/pros&consofbeingamodel.jpg'
import morningcoffeesmellssweet from '../images/lifestyle/morningcoffeesmellssweet.jpg'
import bloomingflowersinthehouse from '../images/lifestyle/bloomingflowersinthehouse.jpg'

const listItemCard = [
    {
        title:'Basic Inner Workings of Camera',
        pertain:'lifestyle',
        date:'MAY 15, 2016',
        intro:'More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.',
        path:'/blog/my-new-yoga-pants',
        img:basicinnerworkingsofcamera,
    },
    {
        title:'Vintage Beauty in Decorations',
        pertain:'lifestyle',
        date:'MAY 15, 2016',
        intro:'More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.',
        path:'/blog/taking-a-short-walk',
        img:vintagebeautyindecorations,
    },
    {
        title:'My Shiny New Backpack',
        pertain:'fashion',
        date:'MAY 15, 2016',
        intro:'More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.',
        path:'/blog/how-i-met-derpina',
        img:myshinynewbackpack,
    },
    {
        title:'A Guide to Latest in Fashion',
        pertain:'beauty',
        date:'MAY 15, 2016',
        intro:'More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.',
        path:'/blog/and-i-like-onions-too',
        img:aguidetolatestinfashion,
    },
    {
        title:'Pros & Cons of Being a Model',
        pertain:'fashion',
        date:'MAY 15, 2016',
        intro:'More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.',
        path:'/blog/hello-world',
        img:prosconsofbeingamodel,
    },
    {
        title:'Morning Coffee Smells Sweet',
        pertain:'lifestyle',
        date:'MAY 15, 2016',
        intro:'More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.',
        path:'/blog/plant-at-my-table',
        img:morningcoffeesmellssweet,
    },
    {
        title:'Minimalist Interior Makeover',
        pertain:'lifestyle',
        date:'MAY 15, 2016',
        intro:'More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.',
        path:'/blog/out-on-a-windy-day',
        img:vintagebeautyindecorations,
    },
    {
        title:'Blooming Flowers in The House',
        pertain:'lifestyle',
        date:'MAY 15, 2016',
        intro:'More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.',
        path:'/blog/relax-by-the-lake',
        img:bloomingflowersinthehouse,
    }
] 

export const getPost = () => {
    return listItemCard[Math.floor(Math.random()*listItemCard.length)]
}

export const getAllPost = () => {
    return listItemCard
}


export const getFourElement = (arr,index) => {
    let result = []
    for(let i = index; i< index + 4; i++){
        if(index >= arr.length) break
        result.push(arr[i])
    }
    return result
}

export const getNextFoureElement = (arr,index) => {
    let result = []
    let fourElement = getFourElement(arr,index)
    result = result.concat(fourElement)
    if(fourElement.length === 4){
        let newIndex = index + 4
        let nextFourElement = getFourElement(arr,newIndex)
        result = result.concat(nextFourElement)
    }
    return result
}
