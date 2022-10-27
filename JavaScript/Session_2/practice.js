// document.querySelectorAll(".animal")[2].innerHTML = "dog";
// const animals = document.getElementById("animals");

// animals.innerHTML += "<li class = 'animals'>Cat</li>"

// document.querySelectorAll(".box")[0].classList.add("purple");

// document.querySelectorAll(".box")[0].classList.remove("purple");

// document.querySelectorAll(".box")[0].classList.toggle("yellow");
// document.querySelectorAll(".box")[0].classList.toggle("yellow");

// document.getElementById("btn").addEventListener("click",function () {
//     console.log("Click!!!!!!!");
// });

// var num = 0;
// document.getElementById('plus').addEventListener("click", function(){
//     num++; 
//     document.getElementById("num").innerHTML = num;
// });

// document.getElementById('minus').addEventListener("click", function(){
//     num--; 
//     document.getElementById("num").innerHTML = num;
// });

//> Event 1장
// document.querySelector('.bar').addEventListener("click", function() {
//     document.querySelector(".bar").innerHTML = "눌렀어!";
//     document.querySelector('.newBar').classList.toggle("show");
// });


document
    .querySelectorAll(".list")[0]
    .addEventListener("click", function(e) {

})


function tabBtn(a) {
    document
    .querySelectorAll('.tab-button')[a]
    .addEventListener("click", function() {
        for (let i = 0; i < document.querySelectorAll('.tab-button').length; i++){
            document.querySelectorAll('.tab-button')[i].classList.remove("here");
            document.querySelectorAll('.tab-button')[i].classList.remove("show");
        }
    
    document.querySelectorAll('.tab-button')[a].classList.add("here");
    document.querySelectorAll('.tab-button')[a].classList.add("show");
});

}
