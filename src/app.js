import {getRandomColor} from "./utils"

export default function initApp() {
    const btnColor = document.createElement("button")
    btnColor.textContent = "Изменить цвет страницы"
    btnColor.className = "button"
    document.body.append(btnColor)
    btnColor.addEventListener("click", event => {
        getRandomColor()
    })
}