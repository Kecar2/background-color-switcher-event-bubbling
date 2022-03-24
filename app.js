// Happy coding!
// Happy coding!

const swatches = document.querySelector(".canvas");

swatches.addEventListener("click", function (event) {

    // currentTarget
    console.log("currentTarget", event.currentTarget);

    // target
    console.log("target", event.target);

    //document.body.style.backgroundColor = event.target.id;
    document.body.style.backgroundColor = window.getComputedStyle(event.target).backgroundColor;
});