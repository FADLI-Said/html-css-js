document.getElementById("liveButton").addEventListener("click", function() {
    let texte = document.getElementById("text").value
    document.getElementById("liveText").innerText = texte
})

document.getElementById("blueText").addEventListener("click", function () {
    let blue = document.getElementById("liveText")
    // blue.removeAttribute('class')
    blue.classList.remove("text-primary","text-success", "text-danger")
    blue.classList.add("text-primary")
})

document.getElementById("greenText").addEventListener("click", function () {
    let blue = document.getElementById("liveText")
    // blue.removeAttribute('class')
    blue.classList.remove("text-primary","text-success", "text-danger")
    blue.classList.add("text-success")
})

document.getElementById("redText").addEventListener("click", function () {
    let blue = document.getElementById("liveText")
    // blue.removeAttribute('class')
    blue.classList.remove("text-primary","text-success", "text-danger")
    blue.classList.add("text-danger")
})