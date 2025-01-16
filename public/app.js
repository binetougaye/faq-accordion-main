// get elements
const plus = document.querySelectorAll(".plus")
const para = document.querySelectorAll('p')
for (let index = 0; index < plus.length; index++) {
    plus[index].addEventListener("click", () => {
        if (plus[index].getAttribute("src") === "./assets/images/icon-plus.svg") {
            plus[index].setAttribute("src", "./assets/images/icon-minus.svg")
            para[index].style.display = 'block'

        } else {
            plus[index].setAttribute("src", "./assets/images/icon-plus.svg")
            para[index].style.display = 'none'
        }
    })
}