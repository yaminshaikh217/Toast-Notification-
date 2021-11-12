const toasts = document.getElementById("toasts")
const btn = document.getElementById("btn")

let message = ['Hi there', 'Have a Nice Day', 'Follow me ', 'Thanks!']

btn.addEventListener("click", () => createNotification())


function createNotification() {

    let notification = document.createElement("div")
    notification.classList.add("toast")
    notification.innerText = getRandomMessage()
    toasts.appendChild(notification)

    setTimeout(() => notification.remove(), 3000)


}

function getRandomMessage() {
    return message[Math.floor(Math.random() * message.length)]
}