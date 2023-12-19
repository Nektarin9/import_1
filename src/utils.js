export function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let colorHex = "#"
    for(let i= 0; i < 6; i++ ){
        colorHex = colorHex + letters[Math.floor(Math.random() * 16)]
    }
    document.body.style.background = colorHex
}