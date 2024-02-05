let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
    ul.classList.toggle("showData");
    if (ul.className == "showData") {
        document.getElementById("bar").className = "fa-solid fa-xmark"
    } else {
        document.getElementById("bar").className = "fa-solid fa-bars"
    }
})
let shops = document.getElementById("shops")
let reviews = document.getElementById("reviews")
let contacts = document.getElementById("contacts")


shops.addEventListener("click", () => {
    shops.style.color = "aqua"
    reviews.style.color = "white"
    contacts.style.color = "white"
})
reviews.addEventListener("click", () => {
    shops.style.color = "white"
    reviews.style.color = "aqua"
    contacts.style.color = "white"
})
contacts.addEventListener("click", () => {
    shops.style.color = "white"
    reviews.style.color = "white"
    contacts.style.color = "aqua"
})
let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage");
let commerce = document.querySelector(".commerce");
let imgItem = document.getElementById("imgItem");
let buyBtn = document.getElementById("buyBtn");

console.log(crd);


crd.forEach(function(curValue) {
    curValue.addEventListener("click", function() {
        itemPage.style.display = "flex";
        commerce.style.display = "none";


        let imgSrc = curValue.firstElementChild.src;
        imgItem.src = imgSrc;


        buyBtn.addEventListener("click", function() {

            document.querySelector(".buyPage").style.display = "block"
            document.querySelector(".buyText").innerHTML = ` 
            <h3>Enter Details :</h3>
            <input type="text" placeholder="ENTER YOUR NAME" id="name"><br>
            <input type="text" placeholder="ENTER YOUR NUMBER" id="num"><br>
            <input type="text" placeholder="ENTER YOUR ADDRESS" id="address"><br>
            <h3>Payment Option</h3>
            <select>
                <option value="UPI">UPI</option>
                <option value="Debit-card">Debit-card</option>
                <option value="Credit-card">credit-card</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
            </select><br>
           `
            let buyText = document.querySelector(".buyText")
            let button = document.createElement("button")
            button.innerText = "Submit"
            buyText.appendChild(button)

            button.addEventListener("click", function() {
                let name = document.getElementById("name")
                if (name.value == "" & address.value == "" & num.value == "") {
                    alert("please enter the details")
                } else {
                    alert("Successfully ordered")
                }

            })
            let cross = document.querySelector(".cross")
            cross.addEventListener("click", function() {
                document.querySelector(".buyPage").style.display = "none"

            })

        })

    })
})

function contact() {
    let names = document.getElementById("names")
    let number = document.getElementById("number")
    if (names.value == "" && number.value == "") {
        alert("please enter the details")
    } else {
        alert("Thank you for contacting")
    }
}