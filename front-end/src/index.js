console.log("HERE")

const urlbase = "http://localhost:3000/api/v1/sneakers/"
const urluser = "http://localhost:3000/api/v1/users/"
const urllike = "http://localhost:3000/api/v1/sneaker"
const urlbid = "http://localhost:3000/api/v1/bids/"

















//SCROLL DIVS
const scrolldiv = document.querySelector(".scroll")
const sneakcontain = document.querySelector(".sneak")
const container = document.querySelector(".main")
const logdiv = document.querySelector(".login")
const profilediv = document.querySelector(".profile")
const sneakerDiv = document.querySelector(".sneakerDiv")
const newpostDiv = document.createElement("div")
newpostDiv.className = "newPostDiv"



//let showPage = false;


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
fetch(urlbase).then(res => res.json()).then(sneakers => sneakers.forEach(sneaker => renderSneaker(sneaker)))

fetch(urluser).then(res => res.json()).then(users => users.forEach(user => {
    userProfile(user)
    }))

function userProfile (user) {

   const username = document.createElement("h2")
   username.className = "user"
   username.innerText = user.name

   const sizename = document.createElement("h3")
   sizename.className = "sizename"
   sizename.innerText = user.size

   const stylename = document.createElement("h3")
   stylename.className = "stylename"
   stylename.innerText = user.style

   const userhr = document.createElement("hr")
    userhr.className = "userhr"
   profilediv.append(username,sizename,stylename,userhr)


 }

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
            
            
function renderSneaker(sneaker) {

// SNEAKER CONTAINERS

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
likbtn.innerText = "like"
likbtn.addEventListener('click' , e => {

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


// // BID HEADER
// const bidheader = document.createElement("h1")
// bidheader.className = "bidHeader"
// bidheader.innerText = "New Bid"

// //NEW BID FORM
// const form = document.createElement("form")
// form.className = "bidForm"

// const buyer = document.createElement("textarea")
// buyer.className = "bidderName"

// const bid = document.createElement("textfield")
// bid.className = "bids"

// const input = document.createElement("input")
// input.className = "bidInput"
// input.type = "submit"
// input.value = "Submit"
// form.append(buyer,bid,input)

const br = document.createElement("br")
const likDiv = document.createElement("div")
    likDiv.className = "likDiv"
    likDiv.append(likes,likbtn)
//APPENDS
nametitle.append(name)
// showdiv.append()
sneakcontain.append(img,price,nametitle,likDiv)
scrolldiv.append(showdiv)


}




 // NEW POST 

//  const newForm = document.createElement("form")
//  newForm.className = "newForm"
//  newForm.innerText = "POST NEW SNEAKER"

// const brandinput = document.createElement("input")
// brandinput.type = "text"
// brandinput.className = "brandinput"
// brandinput.name = "brand"
// brandinput.placeholder = "brand"

// const shoeName = document.createElement("input")
// shoeName.type = "text"
// shoeName.className = "shoeinput"
// shoeName.name = "name"
// shoeName.placeholder = "name"

// const newSize = document.createElement("input")
// newSize.type = "text"
// newSize.className = "neSizeinput"
// newSize.name = "size"
// newSize.placeholder = "size"

// const newStyle = document.createElement("input")
// newStyle.type = "text"
// newStyle.className = "newStyleinput"
// newStyle.name = "style"
// newStyle.placeholder = "style"

// const newPrice = document.createElement("input")
// newPrice.type = "text"
// newPrice.className = "newPriceinput"
// newPrice.name = "price"
// newPrice.placeholder = "price"

// const newImg = document.createElement("input")
// newImg.type = "text"
// newImg.className = "newImginput"
// newImg.name = "image"
// newImg.placeholder = "image"


// const newUser = document.createElement("input")
// newUser.type = "text"
// newUser.className = "newUser"
// newUser.name = "user"
// newUser.placeholder = "Seller"


// const postSneaker = document.createElement("button")
// postSneaker.className = "newButton"
// postSneaker.innerText = "NEW POST"

// newForm.append(brandinput,shoeName,newSize,newStyle,newPrice,newImg,postSneaker)
// newpostDiv.append(newForm)
// profilediv.append(newpostDiv)

//container.append(newpostDiv)

    // newForm.addEventListener("submit", e => {
    //     e.preventDefault()
    //     console.log(e)
    //     console.log(brandinput)
    //     console.log(newStyle)

    //     fetch(urlbase, {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json",
    //             "Accept": "application/json"
    //         }, 
    //     body:JSON.stringify ({
    //         brand: brandinput.value,
    //         name:  shoeName.value,
    //         size:  newSize.value, 
    //         style: newStyle.value,
    //         price: newPrice.value, 
    //         image: newImg.value,
    //         likes: 0, 
    //         // user_id: user_id
            
    //     })
        
    //     }).then(res => res.json()).then(newSneaker => renderSneaker(newSneaker))
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
