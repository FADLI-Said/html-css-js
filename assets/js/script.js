document.getElementById("liveButton").addEventListener("click", function() {
    let texte = document.getElementById("text").value
    document.getElementById("liveText").innerText = texte
})

// document.getElementById("blueText").addEventListener("click", function () {
//     let blue = document.getElementById("liveText")
//     blue.removeAttribute("class")
//     blue.classList.value("text-primary","text-success", "text-danger")
//     blue.classList.value=""
//     blue.classList.add("text-primary")
// })

// document.getElementById("greenText").addEventListener("click", function () {
//     let blue = document.getElementById("liveText")
//     blue.removeAttribute("class")
//     blue.classList.remove("text-primary","text-success", "text-danger")
//     blue.classList.value=""
//     blue.classList.add("text-success")
// })

// document.getElementById("redText").addEventListener("click", function () {
//     let blue = document.getElementById("liveText")
//     blue.removeAttribute("class")
//     blue.classList.remove("text-primary","text-success", "text-danger")
//     blue.classList.value=""
//     blue.classList.add("text-danger")
// })

function updateClass(className) {
    let textcolor = document.getElementById("liveText")
    textcolor.removeAttribute("class")
    textcolor.classList.add(className)
}

document.getElementById("blueText").addEventListener("click", function () {
    updateClass("text-primary")
})

document.getElementById("greenText").addEventListener("click", function () {
    updateClass("text-success")
})

document.getElementById("redText").addEventListener("click", function () {
    updateClass("text-danger")
})