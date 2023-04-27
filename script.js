const email = document.querySelector(".mailFocus")
const password = document.querySelector(".pswdFocus")

email.addEventListener("click", () => {
    document.querySelector("#mailInput").focus();
})

password.addEventListener("click", () => {
    document.querySelector("#pswdInput").focus();
})