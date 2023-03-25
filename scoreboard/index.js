let homeCount = document.getElementById("scoreh")
let guestCount = document.getElementById("scoreg")
countHome = 0
countGuest = 0

function add1h() {
   
    countHome += +1
    homeCount.textContent = countHome
}

function add2h() {
   
    countHome += +2
    homeCount.textContent = countHome
}

function add3h() {
   
    countHome += +3
    homeCount.textContent = countHome
}

function add1g() {
   
    countGuest += +1
    guestCount.textContent = countGuest
}

function add2g() {
   
    countGuest += +2
    guestCount.textContent = countGuest
}

function add3g() {
   
    countGuest += +3
    guestCount.textContent = countGuest
}




