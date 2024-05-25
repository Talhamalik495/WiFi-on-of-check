let meassage_a = document.querySelector(".meassage")
const online = () => {
    meassage_a.textContent = "You are Internet Conected"
    meassage_a.style = "color:white"
}
const ofline = () => {
    meassage_a.textContent = "You are Not Internet Conected"
    meassage_a.style = "color:white"

}
// navigator is lya use hota ha jaise browser ko detect karna ka lya 

if (window.navigator.onLine) {
    online()
} else {
    ofline()
}
window.addEventListener("online", online)
window.addEventListener("offline", ofline)

