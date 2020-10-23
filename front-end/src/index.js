console.log("HERE")

// URLS
const urlbase = "http://localhost:3000/api/v1/sneakers/"
const urluser = "http://localhost:3000/api/v1/users/"
const urllike = "http://localhost:3000/api/v1/sneaker"
const urlbid = "http://localhost:3000/api/v1/bids/"


//SCROLL DIVS
const scrolldiv = document.querySelector(".scroll")
const sneakcontain = document.querySelector(".sneak")
const scrollj = document.querySelector(".scrollj")
const sneakj = document.querySelector(".sneakj")
const scrolln = document.querySelector(".scrolln")
const sneakn = document.querySelector(".sneakn")
const scrollv = document.querySelector(".scrollv")
const sneakv = document.querySelector(".sneakv")




// MAIN CONTAINERS
const container = document.querySelector(".main")
const logdiv = document.querySelector(".login")
const profilediv = document.querySelector(".profile")
const sneakerDiv = document.querySelector(".sneakerDiv")
const newpostDiv = document.querySelector(".newPostDiv")
console.log(newpostDiv)
const ogDIv = document.querySelector('.ogDiv')






 // NEW POST 
 const newForm = document.createElement("form")
 console.log(newForm)
 newForm.className = "newForm"
 newForm.innerText = "POST NEW SNEAKER"
// SHOE NAME
const shoeName = document.createElement("input")
shoeName.type = "text"
shoeName.className = "shoeinput"
shoeName.name = "name"
shoeName.placeholder = "name"
// PRICE
const newPrice = document.createElement("input")
newPrice.type = "text"
newPrice.className = "newPriceinput"
newPrice.name = "price"
newPrice.placeholder = "price"
//IMAGE
const newImg = document.createElement("input")
newImg.type = "text"
newImg.className = "newImginput"
newImg.name = "image"
newImg.placeholder = "image"
//BUTTON
const postSneaker = document.createElement("button")
console.log(postSneaker)
postSneaker.className = "newButton"
postSneaker.innerText = "NEW POST"
console.log(newpostDiv)
// APPENDS
newForm.append(shoeName,newPrice,newImg,postSneaker)
newpostDiv.append(newForm)
//ADD EVENT LISENTER
newForm.addEventListener("submit", e => {
    e.preventDefault()
    console.log(e)

    fetch(urlbase, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }, 
    body:JSON.stringify ({
        name:  e.target[0].value,
        retail: e.target[1].value, 
        image: e.target[2].value,
        likes: 0, 
        releaseDate: "2020-10-25",
        bids:[]
        
    })
    
    }).then(res => res.json()).then(newSneaker => 
        {renderNew(newSneaker)
    })
})

function renderNew(newSneaker) {
// SNEAKER CONTAINERS

const showdiv = document.createElement('div')
showdiv.className = "show"

// SNEAKER IMAGE
const img = document.createElement("img")
img.className = ("image")
img.src = newSneaker.image


// SNEAKER NAME
const name = document.createElement("h2")
name.className = "name"
name.innerText = newSneaker.name

const nametitle = document.createElement("div")
nametitle.className = "nametitle"


const hr = document.createElement("hr")

// SNEAKER NAME 
const namediv = document.createElement("div")
namediv.className = "namediv"


// /SNEAKER LIKES
const likes = document.createElement("span")
likes.className = "likes"
likes.innerText = `${newSneaker.likes} likes`

//LIKE BUTTON
const likbtn = document.createElement("button")
likbtn.className = "likebtn"
likbtn.innerText = "like"
likbtn.addEventListener('click' , e => {
    //console.log("CLICK")
    e.preventDefault()
    let newlike = parseInt(likes.innerText) + 1


    fetch(`http://localhost:3000/api/v1/sneakers/${newSneaker.id}`, {
        method: "PATCH",
        headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify ({
            "likes": newlike
        })
    }).then(res => res.json()).then((sneaker) => likes.innerText = `${sneaker.likes} likes`)
})


//PRICE
const price = document.createElement("h1")
price.className = "price"
price.innerText =  `$${newSneaker.retail}`

//BID CONTAINER
const bidDiv = document.createElement("div")
bidDiv.className = "bidDiv"

// BID TITLE
const bidTitle = document.createElement("h1")
bidTitle.className = "bidTitle"
bidTitle.innerText = "Bids"

// ALL BIDS
if (newSneaker.bids = []) {
    console.log("Active bids")
} else {
    newSneaker.bids.forEach( bid => {
        const li = document.createElement("li")
        li.className = "bids"
        li.innerText = `${bid.bid}`

        dltbit = document.createElement("button")
        dltbit.className = "delete"
        dltbit.innerText = "X"
        li.append(dltbit)
        bidDiv.append(li)

        dltbit.addEventListener("click" , event => {

            fetch(urlbid + bid.id ,{
                method: "DELETE"
            })
            li.remove()

            })
    })

}



// BID HEADER
const bidheader = document.createElement("h1")
bidheader.className = "bidHeader"
bidheader.innerText = "New Bid"

//NEW BID FORM
const Bidform = document.createElement("form")
Bidform.className = "bidForm"

const buyer = document.createElement("textarea")
buyer.className = "bidderName"

const bid = document.createElement("textfield")
bid.className = "bids"

const input = document.createElement("input")
input.className = "bidInput"
input.type = "submit"
input.value = "Submit"






Bidform.append(buyer,bid,input)
bidDiv.append(Bidform)

const br = document.createElement("br")
const likDiv = document.createElement("div")
    likDiv.className = "likDiv"
    likDiv.append(likes,likbtn)
//APPENDS
nametitle.append(name)
// showdiv.append()
const sneakne = document.querySelector(".sneakne")
const scrollne = document.querySelector(".scrollne")
sneakne.append(img,price,nametitle,likDiv,bidDiv)
scrollne.append(showdiv)

    img.addEventListener('click', event=> {

        
            showPage = !showPage;

            if (showPage) {
                bidDiv.style.display = "block"
            }
            else {
                bidDiv.style.display = "none"
            }
        
    })


}







let showPage = false;


// LOGIN FORM
// const userForm = document.createElement("form")
// userForm.className = "userForm"
// userForm.innerText = "SNEAKER-APP"

// const nameinput = document.createElement("input")
// nameinput.type = "text"
// nameinput.className = "nameinput"
// nameinput.name = "name"
// nameinput.placeholder = "name"

// const sizeinput = document.createElement("input")
// sizeinput.type = "text"
// sizeinput.className = "sizeinput"
// sizeinput.name = "size"
// sizeinput.placeholder = "size"

// const styleinput = document.createElement("input")
// styleinput.type = "text"
// styleinput.className = "styleinput"
// styleinput.name = "style"
// styleinput.placeholder = "style"

// const loginbtn = document.createElement("button")
// loginbtn.className = "Press"
// loginbtn.innerText = "WELCOME"

// const inputdiv = document.createElement("div")
// inputdiv.className = "inputdiv"

// inputdiv.append(nameinput,sizeinput,styleinput)
// userForm.append(inputdiv,loginbtn)
// logdiv.append(userForm)

// function renderPage() {
//     userForm.reset()
//     showPage = !showPage;
//     if (showPage) {
//         loginbtn.innerText = "LOG OUT"
//         //inputdiv.style.display = "none"
//     }
//     else {
//         loginbtn.innerText = "WELCOME"
//         // container.innerHTML = ""
//         //inputdiv.style.display = "block"
//     }
// }








    fetch(urlbase).then(res => res.json()).then(sneakers => sneakers.forEach(sneaker => 
        {
                // const first = sneaker.brand
                // console.log(first)

                // if (sneaker.brand == "adidas") {
                //     console.log("HERE")
                // } else {
                //     console.log("NOT")
                // }
                    if (sneaker.brand == "adidas") {

                        renderAddias(sneaker)
                    }
                    else if (sneaker.brand == "Jordan") {

                        renderJordan(sneaker)
                    }
                    else if (sneaker.brand == "Nike") {

                        renderNike(sneaker)
                    }
                    else if (sneaker.brand == "Vans") {
                        renderVans(sneaker)

                    }
                    else 
                    console.log("NONE")
     }))
        
       
    // ADDIAS
    const aName = document.querySelector(".AName")
    const branda = document.createElement("h1")
    branda.className = "brand"
    aName.append(branda)
    function renderAddias(sneaker) {
    const showdiv = document.createElement('div')
    showdiv.className = "show"

    // SNEAKER IMAGE
    const img = document.createElement("img")
    img.className = ("image")
    img.src = sneaker.image



    // const divModel = document.createElement('div')
    // divModel.id = "popup-1"
    // divModel.className = "popup"

    // const divOver = document.createElement('div')
    // divOver.className = "overlay"

    // const divHead = document.createElement('div')
    // divHead.className = "content"


    // const divClose = document.createElement('div')
    // divClose.className = "close-btn"
    // divClose.onclick = "togglePopup()"
    // divClose.innerText = "&times;"

    // const divbidBody = document.createElement('h1')
    // divbidBody.innerText = sneaker.name

    // const divbod = document.createElement('img')
    // divbod.src = sneaker.image

    // const close = document.createElement("button")
    // // divOver.className = "active"
    // divOver.id = "overlay"
    // close.innerText = "&times;"

    // divHead.append(divClose,divbidBody,divbod)
    // ogDIv.append(divModel,divOver,divHead)

    // function togglePopup(){
    //     divModel.classList.toggle("active");
    //   }

    //   togglePopup()

    // img.addEventListener("click" , event => {

    //         //button
    //         //div contain

    //             //div head
    //                 //title
    //             //div head

    //             // div body
    //                 // body
    //             //div body
    //         //div contain

    //         // dv overlay



    //     })


    // SNEAKER NAME
    const name = document.createElement("h2")
    name.className = "name"
    name.innerText = sneaker.name

    const nametitle = document.createElement("div")
    nametitle.className = "nametitle"



    const hr = document.createElement("hr")

    // SNEAKER NAME 
    const namediv = document.createElement("div")
    namediv.className = "namediv"

    // SELLER
    // const seller = document.createElement("h1")
    // seller.className = "seller"
    // seller.innerText = `Seller: ${sneaker.user.name}`
    // namediv.append(seller)


    // /SNEAKER LIKES
    const likes = document.createElement("span")
    likes.className = "likes"
    likes.innerText = `${sneaker.likes} likes`

    //LIKE BUTTON
    const likbtn = document.createElement("button")
    likbtn.className = "likebtn"
    likbtn.innerText = "LIKE"
    likbtn.addEventListener('click' , e => {
    //console.log("CLICK")
    e.preventDefault()
    let newlike = parseInt(likes.innerText) + 1


    fetch(`http://localhost:3000/api/v1/sneakers/${sneaker.id}`, {
    method: "PATCH",
    headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
    },
    body: JSON.stringify ({
        "likes": newlike
    })
    }).then(res => res.json()).then((sneaker) => likes.innerText = `${sneaker.likes} likes`)
    })


    //PRICE
    const price = document.createElement("h1")
    price.className = "price"
    price.innerText =  `$${sneaker.retail}`

    //BID CONTAINER
    const bidDiv = document.createElement("div")
    bidDiv.className = "bidDiv"

    // BID TITLE
    const bidTitle = document.createElement("h1")
    bidTitle.className = "bidTitle"
    bidTitle.innerText = "Bids"

    // ALL BIDS
    sneaker.bids.forEach( bid => {
    const li = document.createElement("li")
    li.className = "bids"
    li.innerText = `${bid.bid}`

    dltbit = document.createElement("button")
    dltbit.className = "delete"
    dltbit.innerText = "X"
    li.append(dltbit)
    bidDiv.append(li)

    dltbit.addEventListener("click" , event => {

    fetch(urlbid + bid.id ,{
        method: "DELETE"
    })
    li.remove()

    })
    })


    // BID HEADER
    const bidheader = document.createElement("h1")
    bidheader.className = "bidHeader"
    bidheader.innerText = "New Bid"

    //NEW BID FORM
    const Bidform = document.createElement("form")
    Bidform.className = "bidForm"

    const buyer = document.createElement("textarea")
    buyer.className = "bidderName"

    const bid = document.createElement("textfield")
    bid.className = "bids"

    const input = document.createElement("input")
    input.className = "bidInput"
    input.type = "submit"
    input.value = "Submit"






    Bidform.append(buyer,bid,input)
    bidDiv.append(Bidform)

    const br = document.createElement("br")
    const likDiv = document.createElement("div")
    likDiv.className = "likDiv"
    likDiv.append(likes,likbtn)
    //APPENDS
    nametitle.append(name)
    // showdiv.append()

    img.addEventListener('click', event=> {


    showPage = !showPage;

    if (showPage) {
    bidDiv.style.display = "block"
    }
    else {
    bidDiv.style.display = "none"
    }

    })

    sneakcontain.append(img,price,nametitle,likDiv,bidDiv)
    scrolldiv.append(showdiv)
    }

    // JORDAN
    const jName = document.querySelector(".jName")
    const brandj = document.createElement("h1")
    brandj.innerText = sneaker.brand
    brandj.className = "brand"
    jName.append(brandj)
    function renderJordan(sneaker) {

 

    const showdiv = document.createElement('div')
    showdiv.className = "show"

    // SNEAKER IMAGE
    const img = document.createElement("img")
    img.className = ("image")
    img.src = sneaker.image



    // const divModel = document.createElement('div')
    // divModel.id = "popup-1"
    // divModel.className = "popup"

    // const divOver = document.createElement('div')
    // divOver.className = "overlay"

    // const divHead = document.createElement('div')
    // divHead.className = "content"


    // const divClose = document.createElement('div')
    // divClose.className = "close-btn"
    // divClose.onclick = "togglePopup()"
    // divClose.innerText = "&times;"

    // const divbidBody = document.createElement('h1')
    // divbidBody.innerText = sneaker.name

    // const divbod = document.createElement('img')
    // divbod.src = sneaker.image

    // const close = document.createElement("button")
    // // divOver.className = "active"
    // divOver.id = "overlay"
    // close.innerText = "&times;"

    // divHead.append(divClose,divbidBody,divbod)
    // ogDIv.append(divModel,divOver,divHead)

    // function togglePopup(){
    //     divModel.classList.toggle("active");
    //   }

    //   togglePopup()

    // img.addEventListener("click" , event => {
        
    //         //button
    //         //div contain

    //             //div head
    //                 //title
    //             //div head

    //             // div body
    //                 // body
    //             //div body
    //         //div contain

    //         // dv overlay



    //     })


    // SNEAKER NAME
    const name = document.createElement("h2")
    name.className = "name"
    name.innerText = sneaker.name

    const nametitle = document.createElement("div")
    nametitle.className = "nametitle"



    const hr = document.createElement("hr")

    // SNEAKER NAME 
    const namediv = document.createElement("div")
    namediv.className = "namediv"

    // SELLER
    // const seller = document.createElement("h1")
    // seller.className = "seller"
    // seller.innerText = `Seller: ${sneaker.user.name}`
    // namediv.append(seller)


    // /SNEAKER LIKES
    const likes = document.createElement("span")
    likes.className = "likes"
    likes.innerText = `${sneaker.likes} likes`

    //LIKE BUTTON
    const likbtn = document.createElement("button")
    likbtn.className = "likebtn"
    likbtn.innerText = "LIKE"
    likbtn.addEventListener('click' , e => {
    //console.log("CLICK")
    e.preventDefault()
    let newlike = parseInt(likes.innerText) + 1


    fetch(`http://localhost:3000/api/v1/sneakers/${sneaker.id}`, {
        method: "PATCH",
        headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify ({
            "likes": newlike
        })
    }).then(res => res.json()).then((sneaker) => likes.innerText = `${sneaker.likes} likes`)
    })


    //PRICE
    const price = document.createElement("h1")
    price.className = "price"
    price.innerText =  `$${sneaker.retail}`

    //BID CONTAINER
    const bidDiv = document.createElement("div")
    bidDiv.className = "bidDiv"

    // BID TITLE
    const bidTitle = document.createElement("h1")
    bidTitle.className = "bidTitle"
    bidTitle.innerText = "Bids"

    // ALL BIDS
    sneaker.bids.forEach( bid => {
    const li = document.createElement("li")
    li.className = "bids"
    li.innerText = `${bid.bid}`

    dltbit = document.createElement("button")
    dltbit.className = "delete"
    dltbit.innerText = "X"
    li.append(dltbit)
    bidDiv.append(li)

    dltbit.addEventListener("click" , event => {

        fetch(urlbid + bid.id ,{
            method: "DELETE"
        })
        li.remove()

        })
    })


    // BID HEADER
    const bidheader = document.createElement("h1")
    bidheader.className = "bidHeader"
    bidheader.innerText = "New Bid"

    //NEW BID FORM
    const Bidform = document.createElement("form")
    Bidform.className = "bidForm"

    const buyer = document.createElement("textarea")
    buyer.className = "bidderName"

    const bid = document.createElement("textfield")
    bid.className = "bids"

    const input = document.createElement("input")
    input.className = "bidInput"
    input.type = "submit"
    input.value = "Submit"






    Bidform.append(buyer,bid,input)
    bidDiv.append(Bidform)

    const br = document.createElement("br")
    const likDiv = document.createElement("div")
    likDiv.className = "likDiv"
    likDiv.append(likes,likbtn)
    //APPENDS
    nametitle.append(name)
    // showdiv.append()

    img.addEventListener('click', event=> {


    showPage = !showPage;

    if (showPage) {
        bidDiv.style.display = "block"
    }
    else {
        bidDiv.style.display = "none"
    }

    })

    sneakj.append(img,price,nametitle,likDiv,bidDiv)
    scrollj.append(showdiv)
    }


    // NIKE
const nName = document.querySelector(".nName")
const brandn = document.createElement("h1")
brandn.innerText = sneaker.brand
brandn.className = "brand"
nName.append(brandn)
    function renderNike(sneaker) {
    const showdiv = document.createElement('div')
    showdiv.className = "show"

    // SNEAKER IMAGE
    const img = document.createElement("img")
    img.className = ("image")
    img.src = sneaker.image



    // const divModel = document.createElement('div')
    // divModel.id = "popup-1"
    // divModel.className = "popup"

    // const divOver = document.createElement('div')
    // divOver.className = "overlay"

    // const divHead = document.createElement('div')
    // divHead.className = "content"


    // const divClose = document.createElement('div')
    // divClose.className = "close-btn"
    // divClose.onclick = "togglePopup()"
    // divClose.innerText = "&times;"

    // const divbidBody = document.createElement('h1')
    // divbidBody.innerText = sneaker.name

    // const divbod = document.createElement('img')
    // divbod.src = sneaker.image

    // const close = document.createElement("button")
    // // divOver.className = "active"
    // divOver.id = "overlay"
    // close.innerText = "&times;"

    // divHead.append(divClose,divbidBody,divbod)
    // ogDIv.append(divModel,divOver,divHead)

    // function togglePopup(){
    //     divModel.classList.toggle("active");
    //   }

    //   togglePopup()

    // img.addEventListener("click" , event => {
            
    //         //button
    //         //div contain

    //             //div head
    //                 //title
    //             //div head

    //             // div body
    //                 // body
    //             //div body
    //         //div contain

    //         // dv overlay



    //     })


    // SNEAKER NAME
    const name = document.createElement("h2")
    name.className = "name"
    name.innerText = sneaker.name

    const nametitle = document.createElement("div")
    nametitle.className = "nametitle"



    const hr = document.createElement("hr")

    // SNEAKER NAME 
    const namediv = document.createElement("div")
    namediv.className = "namediv"

    // SELLER
    // const seller = document.createElement("h1")
    // seller.className = "seller"
    // seller.innerText = `Seller: ${sneaker.user.name}`
    // namediv.append(seller)


    // /SNEAKER LIKES
    const likes = document.createElement("span")
    likes.className = "likes"
    likes.innerText = `${sneaker.likes} likes`

    //LIKE BUTTON
    const likbtn = document.createElement("button")
    likbtn.className = "likebtn"
    likbtn.innerText = "LIKE"
    likbtn.addEventListener('click' , e => {
        //console.log("CLICK")
        e.preventDefault()
        let newlike = parseInt(likes.innerText) + 1


        fetch(`http://localhost:3000/api/v1/sneakers/${sneaker.id}`, {
            method: "PATCH",
            headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
            },
            body: JSON.stringify ({
                "likes": newlike
            })
        }).then(res => res.json()).then((sneaker) => likes.innerText = `${sneaker.likes} likes`)
    })


    //PRICE
    const price = document.createElement("h1")
    price.className = "price"
    price.innerText =  `$${sneaker.retail}`

    //BID CONTAINER
    const bidDiv = document.createElement("div")
    bidDiv.className = "bidDiv"

    // BID TITLE
    const bidTitle = document.createElement("h1")
    bidTitle.className = "bidTitle"
    bidTitle.innerText = "Bids"

    // ALL BIDS
    sneaker.bids.forEach( bid => {
        const li = document.createElement("li")
        li.className = "bids"
        li.innerText = `${bid.bid}`

        dltbit = document.createElement("button")
        dltbit.className = "delete"
        dltbit.innerText = "X"
        li.append(dltbit)
        bidDiv.append(li)

        dltbit.addEventListener("click" , event => {

            fetch(urlbid + bid.id ,{
                method: "DELETE"
            })
            li.remove()

            })
    })


    // BID HEADER
    const bidheader = document.createElement("h1")
    bidheader.className = "bidHeader"
    bidheader.innerText = "New Bid"

    //NEW BID FORM
    const Bidform = document.createElement("form")
    Bidform.className = "bidForm"

    const buyer = document.createElement("textarea")
    buyer.className = "bidderName"

    const bid = document.createElement("textfield")
    bid.className = "bids"

    const input = document.createElement("input")
    input.className = "bidInput"
    input.type = "submit"
    input.value = "Submit"






    Bidform.append(buyer,bid,input)
    bidDiv.append(Bidform)

    const br = document.createElement("br")
    const likDiv = document.createElement("div")
        likDiv.className = "likDiv"
        likDiv.append(likes,likbtn)
    //APPENDS
    nametitle.append(name)
    // showdiv.append()

    img.addEventListener('click', event=> {
        
        
        showPage = !showPage;
        
        if (showPage) {
            bidDiv.style.display = "block"
        }
        else {
            bidDiv.style.display = "none"
        }
        
    })

    sneakn.append(img,price,nametitle,likDiv,bidDiv)
    scrolln.append(showdiv)
    }



    // VANS
const vName = document.querySelector(".vName")
const brandv = document.createElement("h1")
brandv.innerText = sneaker.brand
brandv.className = "brand"
vName.append(brandv)
    function renderVans(sneaker) {

        const showdiv = document.createElement('div')
        showdiv.className = "show"
        
        // SNEAKER IMAGE
        const img = document.createElement("img")
        img.className = ("image")
        img.src = sneaker.image
        
        
        
        // const divModel = document.createElement('div')
        // divModel.id = "popup-1"
        // divModel.className = "popup"
        
        // const divOver = document.createElement('div')
        // divOver.className = "overlay"
        
        // const divHead = document.createElement('div')
        // divHead.className = "content"
        
        
        // const divClose = document.createElement('div')
        // divClose.className = "close-btn"
        // divClose.onclick = "togglePopup()"
        // divClose.innerText = "&times;"
        
        // const divbidBody = document.createElement('h1')
        // divbidBody.innerText = sneaker.name
        
        // const divbod = document.createElement('img')
        // divbod.src = sneaker.image
        
        // const close = document.createElement("button")
        // // divOver.className = "active"
        // divOver.id = "overlay"
        // close.innerText = "&times;"
        
        // divHead.append(divClose,divbidBody,divbod)
        // ogDIv.append(divModel,divOver,divHead)
        
        // function togglePopup(){
        //     divModel.classList.toggle("active");
        //   }
        
        //   togglePopup()
        
        // img.addEventListener("click" , event => {
                
        //         //button
        //         //div contain
        
        //             //div head
        //                 //title
        //             //div head
        
        //             // div body
        //                 // body
        //             //div body
        //         //div contain
        
        //         // dv overlay
        
        
        
        //     })
        
        
        // SNEAKER NAME
        const name = document.createElement("h2")
        name.className = "name"
        name.innerText = sneaker.name
        
        const nametitle = document.createElement("div")
        nametitle.className = "nametitle"
        
        
        
        const hr = document.createElement("hr")
        
        // SNEAKER NAME 
        const namediv = document.createElement("div")
        namediv.className = "namediv"
        
        // SELLER
        // const seller = document.createElement("h1")
        // seller.className = "seller"
        // seller.innerText = `Seller: ${sneaker.user.name}`
        // namediv.append(seller)
        
        
        // /SNEAKER LIKES
        const likes = document.createElement("span")
        likes.className = "likes"
        likes.innerText = `${sneaker.likes} likes`
        
        //LIKE BUTTON
        const likbtn = document.createElement("button")
        likbtn.className = "likebtn"
        likbtn.innerText = "LIKE"
        likbtn.addEventListener('click' , e => {
            //console.log("CLICK")
            e.preventDefault()
            let newlike = parseInt(likes.innerText) + 1
        
        
            fetch(`http://localhost:3000/api/v1/sneakers/${sneaker.id}`, {
                method: "PATCH",
                headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
                },
                body: JSON.stringify ({
                    "likes": newlike
                })
            }).then(res => res.json()).then((sneaker) => likes.innerText = `${sneaker.likes} likes`)
        })
        
        
        //PRICE
        const price = document.createElement("h1")
        price.className = "price"
        price.innerText =  `$${sneaker.retail}`
        
        //BID CONTAINER
        const bidDiv = document.createElement("div")
        bidDiv.className = "bidDiv"
        
        // BID TITLE
        const bidTitle = document.createElement("h1")
        bidTitle.className = "bidTitle"
        bidTitle.innerText = "Bids"
        
        // ALL BIDS
        sneaker.bids.forEach( bid => {
            const li = document.createElement("li")
            li.className = "bids"
            li.innerText = `${bid.bid}`
        
            dltbit = document.createElement("button")
            dltbit.className = "delete"
            dltbit.innerText = "X"
            li.append(dltbit)
            bidDiv.append(li)
        
            dltbit.addEventListener("click" , event => {
        
                fetch(urlbid + bid.id ,{
                    method: "DELETE"
                })
                li.remove()
        
                })
        })
        
        
        // BID HEADER
        const bidheader = document.createElement("h1")
        bidheader.className = "bidHeader"
        bidheader.innerText = "New Bid"
        
        //NEW BID FORM
        const Bidform = document.createElement("form")
        Bidform.className = "bidForm"
        
        const buyer = document.createElement("textarea")
        buyer.className = "bidderName"
        
        const bid = document.createElement("textfield")
        bid.className = "bids"
        
        const input = document.createElement("input")
        input.className = "bidInput"
        input.type = "submit"
        input.value = "Submit"
        
        
        
        
        
        
        Bidform.append(buyer,bid,input)
        bidDiv.append(Bidform)
        
        const br = document.createElement("br")
        const likDiv = document.createElement("div")
            likDiv.className = "likDiv"
            likDiv.append(likes,likbtn)
        //APPENDS
        nametitle.append(name)
        // showdiv.append()
        
        img.addEventListener('click', event=> {
            
            
            showPage = !showPage;
            
            if (showPage) {
                bidDiv.style.display = "block"
            }
            else {
                bidDiv.style.display = "none"
            }
            
        })
        
        sneakv.append(img,price,nametitle,likDiv,bidDiv)
        showdiv.append
        scrollv.append(showdiv)
        }
























        


// fetch(urluser).then(res => res.json()).then(users => users.forEach(user => {
//     userProfile(user)
//     }))

// function userProfile (user) {

//    const username = document.createElement("h2")
//    username.className = "user"
//    username.innerText = user.name

//    const sizename = document.createElement("h3")
//    sizename.className = "sizename"
//    sizename.innerText = user.size

//    const stylename = document.createElement("h3")
//    stylename.className = "stylename"
//    stylename.innerText = user.style

//    const userhr = document.createElement("hr")
//     userhr.className = "userhr"
//    profilediv.append(username,sizename,stylename,userhr)


//  }

// userForm.addEventListener("submit" , event => {

//     event.preventDefault()
//     console.log("post")
//     fetch(urluser, {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json",
//                 "Accept": "application/json"
//             },
            
//             body: JSON.stringify ({
//                 "name": nameinput.value,
//                 "size": sizeinput.value,
//                 "style": styleinput.value 
//              })
//     }).then(response => response.json()).then(newUser =>  {
//         console.log(newUser)
//                    userProfile(newUser)
//                    renderPage()
//     }) 
// })
            
            










































// THINGS TO FINISH
// // CORE
// ----- DONE 3. UPDATE likes
// 2. DONE //CREATE A NEW user


// 5. //POST A NEW sneaker
// 4. //DELETE A bid

// 1. //POST A NEW bid
// 6. //UPDATE A NEW PRICE FOR SNEAKER 
// 7. STYLING

// STRECH
// 8. UNLIKE
// 9. SHOPPING Cart 
// 10. ROTATE SNEAKER
// 11. HOVER INFO
// 12. FILTER
// 13. SEARCH
// 14. MOST POPULAR
// 15. MOST LIKED 
