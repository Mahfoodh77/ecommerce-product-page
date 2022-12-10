const cartContainer = document.querySelector('.cart-container')
const cartIcon = document.querySelector('.cart-icon')
const cartDiv = document.querySelector('.close-cartDiv')
const body = document.querySelector('body')
const emptyHeader = document.querySelector('.empty-title')
const checkout = document.querySelector('.checkout')
const error = document.querySelector('.error')

const menuICon = document.querySelector('.menu')
const navExpand = document.querySelector('.navbar-expand')
const navItems = document.querySelector('.nav-item')
const closeICon = document.querySelector('.close-menu')

menuICon.addEventListener('click',()=>{
    navExpand.style.left = '0px'
    body.style.overflow = 'hidden'
})

closeICon.addEventListener('click',()=>{
    navExpand.style.left = '-300px'
    body.style.overflow = 'auto'
})

let countImg = 0

cartIcon.addEventListener('click', ()=>{
    cartContainer.classList.toggle('active')
    cartDiv.style.display = "block"
})

cartDiv.addEventListener('click',()=>{
    cartContainer.classList.remove('active')
    cartDiv.style.display = "none"  
})

const amoutContainer = document.querySelector('.amount-container')
const plus = document.querySelector('.plus')
const mines = document.querySelector('.mines')
const display = document.querySelector('.display')

var count = 0

plus.addEventListener('click',()=>{
    amoutContainer.classList.remove('amount-error')
    count++
    display.innerHTML = count
})
mines.addEventListener('click',()=>{
    amoutContainer.classList.remove('amount-error')
    if(count !== -0){
    count--
    display.innerHTML = count
    }
})



const productSection = document.querySelector('.product');

const mainImage = document.querySelectorAll('.main-image')
const productName = document.querySelector('.product-name')
const mainprice = document.querySelector('.price')
const amountS = document.querySelector('.display')
const amountToggle = document.querySelector('.amount-toggle')




const adToCart = document.querySelector('.add-to-cart-button').addEventListener('click',()=>{
    if(amountS.innerText == 0)
    {amoutContainer.classList.add('amount-error')}else{

        if(emptyHeader.style.display === "none" ){
                    alert("The Cart's Full")
                }else{
                const getImage = mainImage[0].src
                const nameItem = productName.innerHTML
                const prices = mainprice.innerText
                const amounte = amountS.innerText
                const equalCalc = prices * amounte
                emptyHeader.style.display = "none"
                addToCart(getImage, nameItem, prices, amounte, equalCalc,amounte)
                amountToggle.style.display = "block"
                checkout.style.display = "block"
                count = 0
                display.innerHTML = 0
        }
}
})


function addToCart(image, name, price,amount,equalty,amountTog){
    const row = document.createElement('div')
    row.classList.add('content')
    productSection.appendChild(row)
    const rowContent = ` 
    <img src=${image} alt="" width="50px">
    <div class="product-name">${name}</div>
    <span class="delete-icon"><i class="bi bi-trash"></i></span>
    <div class="price-section">
      <div class="price">${price} x <span class="amount">${amount}</span> <span class="equal">$${equalty}</span></div>
    </div>`;
    amountToggle.innerHTML = amountTog
    row.innerHTML = rowContent
    const deleteIcon = document.querySelector('.delete-icon').addEventListener('click',()=>{
        row.remove()
        amountToggle.style.display = "none"
        emptyHeader.style.display = "block"
        checkout.style.display = "none"
    })
    
}

// Images changes

const mainImg = document.querySelector('#big-image')
const smallImages = document.querySelectorAll('.small-imagess')
const mainImgPopUp = document.querySelector('#main-image-popup')
const smallImagesPopUp = document.querySelectorAll('.small-imagess-popup')

smallImages.forEach((img)=>{
    img.addEventListener('click',()=>{
        const lastImage = document.querySelectorAll('.selected')
        if(lastImage){
            lastImage[0].classList.remove('selected')
        }
        img.classList.add('selected')
        const selectImg = document.querySelector('.selected')
        switch (selectImg.getAttribute('src')){
            case "images/image-product-1-thumbnail.jpg":
                mainImg.src = "./images/image-product-1.jpg"
                break;
            case "images/image-product-2-thumbnail.jpg":
                mainImg.src = "./images/image-product-2.jpg"
                break;
            case "images/image-product-3-thumbnail.jpg":
                mainImg.src = "./images/image-product-3.jpg"
                break;
            case "images/image-product-4-thumbnail.jpg":
                mainImg.src = "./images/image-product-4.jpg"
                break;
        }
    })
})

const popupContainer = document.querySelector('.images-popup')
const closeBtnPopup = document.querySelector('.close-icon-popup')

mainImg.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    popupContainer.style.display = "flex";
})

closeBtnPopup.addEventListener('click',()=>{
    popupContainer.style.display = "none"
    body.style.overflow = 'auto'
});


smallImagesPopUp.forEach((img)=>{
    img.addEventListener('click',()=>{
        const lastImage = document.querySelectorAll('.selected')
        if(lastImage){
            lastImage[0].classList.remove('selected')
        }
        img.classList.add('selected')
        const selectImg = document.querySelector('.selected')
        switch (selectImg.getAttribute('src')){
            case "images/image-product-1-thumbnail.jpg":
                mainImgPopUp.src = "images/image-product-1.jpg"
                break;
            case "images/image-product-2-thumbnail.jpg":
                mainImgPopUp.src = "images/image-product-2.jpg"
                break;
            case "images/image-product-3-thumbnail.jpg":
                mainImgPopUp.src = "images/image-product-3.jpg"
                break;
            case "images/image-product-4-thumbnail.jpg":
                mainImgPopUp.src = "images/image-product-4.jpg"
                break;
        }
    })
})


const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
function next(){
    if(countImg == 4){
        countImg = 1
    }else{
        countImg++
    }
    mainImgPopUp.src = `images/image-product-${countImg}.jpg`
}

function prev(){
    if(countImg == 1){
        countImg = 4
    }else{
    countImg--
    }
    mainImgPopUp.src = `images/image-product-${countImg}.jpg`
}

nextBtn.addEventListener('click', next)
prevBtn.addEventListener('click', prev)


const nextMob = document.querySelector('.next-mob')
const prevMob = document.querySelector('.prev-mob')
const mainImgMob = document.querySelector('.main-img-mob')

function nextmob(){
    if(countImg == 4){
        countImg = 1
    }else{
        countImg++
    }
    mainImgMob.src = `images/image-product-${countImg}.jpg`
}

function prevmob(){
    if(countImg == 1){
        countImg = 4
    }else{
    countImg--
    }
    mainImgMob.src = `images/image-product-${countImg}.jpg`
}





nextMob.addEventListener('click', nextmob)
prevMob.addEventListener('click', prevmob)