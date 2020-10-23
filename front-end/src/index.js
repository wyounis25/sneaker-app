console.log("HERE")

// URLS
const urlbase = "http://localhost:3000/api/v1/sneakers/"
const urluser = "http://localhost:3000/api/v1/users/"
const urllike = "http://localhost:3000/api/v1/sneaker"
const urlbid = "http://localhost:3000/api/v1/bids/"



    const final = document.querySelector(".final")

    
            const userForm = document.createElement("form")
                    userForm.className = "neForm"
                    userForm.innerText = "Sign In"
            const nameinput = document.createElement("input")
            nameinput.className = "newPriceinput"
            nameinput.placeholder = "Name"
            const sizeinput = document.createElement("input")
            sizeinput.className = "newPriceinput"
            sizeinput.placeholder = "Shoe Size"
            const styleinput = document.createElement("input")
            styleinput.className = "newPriceinput"
            styleinput.placeholder = "Style"
            const newUserButton = document.createElement("button")
                newUserButton.className = "newButton"
                newUserButton.innerText = "Sign Up"
            userForm.append(nameinput,sizeinput,styleinput,newUserButton)
            final.append(userForm)

            userForm.addEventListener("submit" , event => {
                const usernave = document.querySelector(".navbar-brand")
                event.preventDefault()
                console.log("post")
                fetch(urluser, {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                            "Accept": "application/json"
                        },
                        
                        body: JSON.stringify ({
                            "name": nameinput.value,
                            "size": sizeinput.value,
                            "style": styleinput.value 
                         })
                }).then(response => response.json()).then(newUser =>  {

                            // darkdiv.innerHTML = ""
                        usernave.innerText = newUser.name
                }) 
            })
    





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
const ogDIv = document.querySelector('.ogDiv')






 // NEW POST 
 const newForm = document.createElement("form")
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








    fetch(urlbase).then(res => res.json()).then(sneakers => sneakers.forEach(sneaker => 
        {
            
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
//NEW SNEAKER
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
if (newSneaker.bids = [ ]) {
    console.log("Active bids")
} else {
    newSneaker.bids.forEach( bid => {
        const li = document.createElement("li")
        li.className = "bids"
        li.innerText = `${bid.amount}`

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








const br = document.createElement("br")
const likDiv = document.createElement("div")
    likDiv.className = "likDiv"
    likDiv.append(likes,likbtn)
//APPENDS
nametitle.append(name)
// showdiv.append()
const sneakne = document.querySelector(".sneakne")
const scrollne = document.querySelector(".scrollne")
sneakne.append(img,price,nametitle,likDiv)
scrollne.append(showdiv)
const sneaker_id = sneaker.id

    img.addEventListener('click', event=> {
        console.log(event)

        const buy = document.createElement("button")
            buy.className = "buy"
            buy.innerText = "BUY"
        
        const buyprice = document.createElement("h2")
            buyprice.className = "buyprice"
        buyprice.innerText = `$${sneaker.retail}`

        const purch = document.createElement("p")
        purch.className = "purch"
        const purcCont = document.createElement("div")
        purcCont.className = "purchc"
        const bidimg = document.createElement("img")
        // BID HEADER
        const bidheader = document.createElement("h1")
        bidheader.className = "bidHeader"
        bidheader.innerText = "Place Bid"
        //NEW BID FORM
        const Bidform = document.createElement("form")
        Bidform.className = "bidForm"
        const bid = document.createElement("input")
        bid.name = "bid"
        bid.placeholder = "Amount"
        bid.className = "bids"
        const submitBid = document.createElement("button")
        submitBid.className = "bidInput"
        submitBid.innerText = "BID"
        submitBid.type = "submit"
        submitBid.value = "Submit"
        Bidform.append(bid,submitBid)
        //bidDiv.append(bidheader,Bidform)
        bidimg.className = "bidimg"
        bidimg.src = sneaker.image

        const exitbtn = document.createElement("button")
        exitbtn.className = "exitbtn"
        exitbtn.innerText = 'X'
        const bidpost = document.createElement("h3")
            bidpost.className = "activeb"
            bidpost.innerText = "Active Bids"
            console.log(bidDiv)
        purch.append(exitbtn,bidimg,buy,buyprice,bidheader,bidpost,bidDiv,Bidform)
        //purch.append(bidimg,bidDiv)
        purcCont.append(purch)
        sneakn.append(purcCont)
        
        
                exitbtn.addEventListener("click", event => {
                    purch.remove()
                })

        Bidform.addEventListener("submit", event=>  {
            event.preventDefault()
            console.log(event)
            fetch(urlbid , {
                method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            
            body: JSON.stringify ({
                "user_id": null,
                "sneaker_id": sneaker_id,
                "amount": amount.value 
             })
    }).then(response => response.json()).then(newbid => {
        renderbid(newbid)
    }) 

            
        })

        
    })

    function renderbid(newbid) {
        const pur = document.querySelector(".purch")
        const bidForm = document.createElement('div')
            bidForm.className = "finalform"
        const price = document.createElement('h3')
            price.className = "finalbid"
            const name = document.querySelector('.navbar-brand')
        const bidname = name.innerText
            bidname.className = "bidname"
            price.innerText = `$${newbid.amount}`
            bidForm.append(bidname,price)
        pur.append(bidForm)
            
    }


}























    // ADDIAS
    const aName = document.querySelector(".AName")
    const branda = document.createElement("h1")
    branda.className = "brand"
    aName.append(branda)






function renderAddias(sneaker) {
    const showdiv = document.createElement('div')
    showdiv.className = "show"

    const bidDiv = document.createElement("div")
    bidDiv.className = "bidDiv"

    // SNEAKER IMAGE
    const img = document.createElement("img")
    img.className = ("image")

    img.src = sneaker.image

    const bidpost = document.createElement("h3")
    bidpost.className = "activeb"
    bidpost.innerText = "Active Bids"
    const sneaker_id = sneaker.id

    img.addEventListener("click" , event => {
        console.log(event)

        const buy = document.createElement("button")
        buy.className = "buy"
        buy.innerText = "BUY"
    
        const buyprice = document.createElement("h2")
        buyprice.className = "buyprice"
        buyprice.innerText = `$${sneaker.retail}`
        const purch = document.createElement("p")
        purch.className = "purch"
        const purcCont = document.createElement("div")
        purcCont.className = "purchc"
        const bidimg = document.createElement("img")
        // BID HEADER
        const bidheader = document.createElement("h1")
        bidheader.className = "bidHeader"
        bidheader.innerText = "Place Bid"
        //NEW BID FORM
        const Bidform = document.createElement("form")
        Bidform.className = "bidForm"
        const bid = document.createElement("input")
        bid.name = "amount"
        bid.placeholder = "amount"
        bid.className = "bids"
        const submitBid = document.createElement("button")
        submitBid.className = "bidInput"
        submitBid.innerText = "BID"
        submitBid.type = "submit"
        submitBid.value = "Submit"
        Bidform.append(bid,submitBid)
        //bidDiv.append(bidheader,Bidform)
        bidimg.className = "bidimg"
        bidimg.src = sneaker.image
        const exitbtn = document.createElement("button")
        exitbtn.className = "exitbtn"
        exitbtn.innerText = 'X'
        console.log(bidDiv)
        purch.append(exitbtn,bidimg,buy,buyprice,bidheader,bidpost,bidDiv,Bidform)
        //purch.append(bidimg,bidDiv)
        purcCont.append(purch)
        sneakn.append(purcCont)

         exitbtn.addEventListener("click", event => {
                    purch.remove()
                
                
         })
        Bidform.addEventListener("submit", event=>  {
                    event.preventDefault()
                    console.log(event)
                    fetch(urlbid , {
                        method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "Accept": "application/json"
                    },
                    
                    body: JSON.stringify ({
                        "user_id": null,
                        "sneaker_id": sneaker_id,
                        "amount": amount.value 
                     })
            }).then(response => response.json()).then(newbid => {
                renderbid(newbid)
            }) 
        
                    
         })
        
                
     })
        
    function renderbid(newbid) {
                const pur = document.querySelector(".purch")
                const bidForm = document.createElement('div')
                    bidForm.className = "finalform"
                const price = document.createElement('h3')
                    price.className = "finalbid"
                    const name = document.querySelector('.navbar-brand')
                const bidname = name.innerText
                    bidname.className = "bidname"
                    price.innerText = `$${newbid.amount}`
                    bidForm.append(bidname,price)
                pur.append(bidForm)
                    
     }
        







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

    



    const br = document.createElement("br")
    const likDiv = document.createElement("div")
    likDiv.className = "likDiv"
    likDiv.append(likes,likbtn)
    //APPENDS
    nametitle.append(name)
    // showdiv.append()

    sneakcontain.append(img,price,nametitle,likDiv)
    scrolldiv.append(sneakcontain)
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

    // SNEAKER NAME
    const name = document.createElement("h2")
    name.className = "name"
    name.innerText = sneaker.name

    const nametitle = document.createElement("div")
    nametitle.className = "nametitle"

    const bidpost = document.createElement("h3")
    bidpost.className = "activeb"
    bidpost.innerText = "Active Bids"

    const hr = document.createElement("hr")

    // SNEAKER NAME 
    const namediv = document.createElement("div")
    namediv.className = "namediv"

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



   

    const br = document.createElement("br")
    const likDiv = document.createElement("div")
    likDiv.className = "likDiv"
    likDiv.append(likes,likbtn)
    //APPENDS
    nametitle.append(name)
    // showdiv.append()
    const sneaker_id = sneaker.id
    img.addEventListener('click', event=> {
        console.log(event)

    //BID CONTAINER
    const bidDiv = document.createElement("div")
    bidDiv.className = "bidDiv"


    // ALL BIDS
    sneaker.bids.forEach( bid => {
    const li = document.createElement("li")
    li.className = "bids"
    li.innerText = `${bid.amount}`

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
        const buy = document.createElement("button")
            buy.className = "buy"
            buy.innerText = "BUY"
        
        const buyprice = document.createElement("h2")
            buyprice.className = "buyprice"
        buyprice.innerText = `$${sneaker.retail}`
        const purch = document.createElement("p")
        purch.className = "purch"
        const purcCont = document.createElement("div")
        purcCont.className = "purchc"
        const bidimg = document.createElement("img")
        // BID HEADER
        const bidheader = document.createElement("h1")
        bidheader.className = "bidHeader"
        bidheader.innerText = "Place Bid"
        //NEW BID FORM
        const Bidform = document.createElement("form")
        Bidform.className = "bidForm"
        const bid = document.createElement("input")
        bid.name = "amount"
        bid.placeholder = "amount"
        bid.className = "bids"
        const submitBid = document.createElement("button")
        submitBid.className = "bidInput"
        submitBid.innerText = "BID"
        submitBid.type = "submit"
        submitBid.value = "Submit"
        Bidform.append(bid,submitBid)
        //bidDiv.append(bidheader,Bidform)
        bidimg.className = "bidimg"
        bidimg.src = sneaker.image
        const exitbtn = document.createElement("button")
        exitbtn.className = "exitbtn"
        exitbtn.innerText = 'X'
        purch.append(exitbtn,bidimg,buy,buyprice,bidheader,bidpost,bidDiv,Bidform)
        //purch.append(bidimg,bidDiv)
        purcCont.append(purch)
        sneakn.append(purcCont)
        exitbtn.addEventListener("click", event => {
            purch.remove()
        })
        Bidform.addEventListener("submit", event=>  {
            event.preventDefault()
            console.log(event)
            fetch(urlbid , {
                method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            
            body: JSON.stringify ({
                "user_id": null,
                "sneaker_id": sneaker_id,
                "amount": event.target[0].value
             })
    }).then(response => response.json()).then(newbid => {
        renderbid(newbid)
    }) 

            
        })

        
    })

    function renderbid(newbid) {
        const pur = document.querySelector(".purch")
        const bidForm = document.createElement('div')
            bidForm.className = "finalform"
        const price = document.createElement('h3')
            price.className = "finalbid"
            const name = document.querySelector('.navbar-brand')
        const bidname = name.innerText
            bidname.className = "bidname"
            price.innerText = `$${newbid.amount}`
            bidForm.append(bidname,price)
        pur.append(bidForm)
            
    }


    

    sneakj.append(img,price,nametitle,likDiv)
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

    // SNEAKER NAME
    const name = document.createElement("h2")
    name.className = "name"
    name.innerText = sneaker.name

    const nametitle = document.createElement("div")
    nametitle.className = "nametitle"

    const bidpost = document.createElement("h3")
    bidpost.className = "activeb"
    bidpost.innerText = "Active Bids"

    const hr = document.createElement("hr")

    // SNEAKER NAME 
    const namediv = document.createElement("div")
    namediv.className = "namediv"

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

    
    const br = document.createElement("br")
    const likDiv = document.createElement("div")
        likDiv.className = "likDiv"
        likDiv.append(likes,likbtn)
    //APPENDS
    nametitle.append(name)
    // showdiv.append()
    const sneaker_id = sneaker.id
    img.addEventListener('click', event=> {
        console.log(event)
        //BID CONTAINER
    const bidDiv = document.createElement("div")
    bidDiv.className = "bidDiv"

    // ALL BIDS
    sneaker.bids.forEach( bid => {
        const li = document.createElement("li")
        li.className = "bids"
        li.innerText = `${bid.amount}`

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

        const buy = document.createElement("button")
            buy.className = "buy"
            buy.innerText = "BUY"
        
        const buyprice = document.createElement("h2")
            buyprice.className = "buyprice"
        buyprice.innerText = `$${sneaker.retail}`
        const purch = document.createElement("p")
        purch.className = "purch"
        const purcCont = document.createElement("div")
        purcCont.className = "purchc"
        const bidimg = document.createElement("img")
        // BID HEADER
        const bidheader = document.createElement("h1")
        bidheader.className = "bidHeader"
        bidheader.innerText = "Place Bid"
        //NEW BID FORM
        const Bidform = document.createElement("form")
        Bidform.className = "bidForm"
        const bid = document.createElement("input")
        bid.name = "amount"
        bid.placeholder = "amount"
        bid.className = "bids"
        const submitBid = document.createElement("button")
        submitBid.className = "bidInput"
        submitBid.innerText = "BID"
        submitBid.type = "submit"
        submitBid.value = "Submit"
        Bidform.append(bid,submitBid)
        //bidDiv.append(bidheader,Bidform)
        bidimg.className = "bidimg"
        bidimg.src = sneaker.image
        const exitbtn = document.createElement("button")
        exitbtn.className = "exitbtn"
        exitbtn.innerText = 'X'
        purch.append(exitbtn,bidimg,buy,buyprice,bidheader,bidpost,bidDiv,Bidform)
        //purch.append(bidimg,bidDiv)
        purcCont.append(purch)
        sneakn.append(purcCont)
        exitbtn.addEventListener("click", event => {
            purch.remove()
        })
        Bidform.addEventListener("submit", event=>  {
            event.preventDefault()
            console.log(event)
            fetch(urlbid , {
                method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            
            body: JSON.stringify ({
                "user_id": null,
                "sneaker_id": sneaker_id,
                "amount": event.target[0].value
             })
    }).then(response => response.json()).then(newbid => {
        renderbid(newbid)
    }) 

            
        })

        
    })

    function renderbid(newbid) {
        const pur = document.querySelector(".purch")
        const bidForm = document.createElement('div')
            bidForm.className = "finalform"
        const price = document.createElement('h3')
            price.className = "finalbid"
            const name = document.querySelector('.navbar-brand')
        const bidname = name.innerText
            bidname.className = "bidname"
            price.innerText = `$${newbid.amount}`
            bidForm.append(bidname,price)
        pur.append(bidForm)
            
    }


        
    

    sneakn.append(img,price,nametitle,likDiv)
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
    
        const bidpost = document.createElement("h3")
        bidpost.className = "activeb"
        bidpost.innerText = "Active Bids"
        
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
      
    
        
        const br = document.createElement("br")
        const likDiv = document.createElement("div")
            likDiv.className = "likDiv"
            likDiv.append(likes,likbtn)
        //APPENDS
        nametitle.append(name)
        // showdiv.append()
        const sneaker_id = sneaker.id
        img.addEventListener('click', event=> 

        {
              
        //BID CONTAINER
        const bidDiv = document.createElement("div")
        bidDiv.className = "bidDiv"
        
        // ALL BIDS
        sneaker.bids.forEach( bid => {
            const li = document.createElement("li")
            li.className = "bids"
            li.innerText = `${bid.amount}`
        
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
        
            console.log(event)

        const buy = document.createElement("button")
        buy.className = "buy"
        buy.innerText = "BUY"
    
    const buyprice = document.createElement("h2")
        buyprice.className = "buyprice"
    buyprice.innerText = `$${sneaker.retail}`
        const purch = document.createElement("p")
        purch.className = "purch"
        const purcCont = document.createElement("div")
        purcCont.className = "purchc"
        const bidimg = document.createElement("img")
        // BID HEADER
        const bidheader = document.createElement("h1")
        bidheader.className = "bidHeader"
        bidheader.innerText = "Place Bid"
        //NEW BID FORM
        const Bidform = document.createElement("form")
        Bidform.className = "bidForm"
        const bid = document.createElement("input")
        bid.name = "amount"
        bid.placeholder = "amount"
        bid.className = "bids"
        const submitBid = document.createElement("button")
        submitBid.className = "bidInput"
        submitBid.innerText = "BID"
        submitBid.type = "submit"
        submitBid.value = "Submit"
        Bidform.append(bid,submitBid)
        //bidDiv.append(bidheader,Bidform)
        bidimg.className = "bidimg"
        bidimg.src = sneaker.image
        const exitbtn = document.createElement("button")
        exitbtn.className = "exitbtn"
        exitbtn.innerText = 'X'
        purch.append(exitbtn,bidimg,buy,buyprice,bidheader,bidpost,bidDiv,Bidform)
        //purch.append(bidimg,bidDiv)
        purcCont.append(purch)
        sneakn.append(purcCont)
        exitbtn.addEventListener("click", event => {
            purch.remove()
        })
        Bidform.addEventListener("submit", event=>  {
            event.preventDefault()
            console.log(event)
            fetch(urlbid , {
                method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            
            body: JSON.stringify ({
                "user_id": null,
                "sneaker_id": sneaker_id,
                "amount": amount.value 
             })
    }).then(response => response.json()).then(newbid => {
        renderbid(newbid)
    }) 

            
        })

        
    })

    function renderbid(newbid) {
        const pur = document.querySelector(".purch")
        const bidForm = document.createElement('div')
            bidForm.className = "finalform"
        const price = document.createElement('h3')
            price.className = "finalbid"
            const name = document.querySelector('.navbar-brand')
        const bidname = name.innerText
            bidname.className = "bidname"
            price.innerText = `$${newbid.amount}`
            bidForm.append(bidname,price)
        pur.append(bidForm)
            
    }

        
        sneakv.append(img,price,nametitle,likDiv)
        showdiv.append
        scrollv.append(showdiv)
}
























        




// 
            
            










































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
