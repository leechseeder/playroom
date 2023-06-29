
// initialising page
generateSlate(4);

function popUp() {
    let dimension = prompt("What new dimension would you like to use?");
    document.getElementById("slate").remove();
    let slate = document.createElement("div");
    slate.id = "slate";
    container.append(slate);
    document.getElementById("slate").style.gridTemplateColumns = "50px";
    generateSlate(dimension);
}

function generateSlate(dimension) {
    let pdim = Math.abs(960/dimension);
    for (let i = 0; i < dimension**2; ++i){
        let pixel = document.createElement("div");
        pixel.id = "pixel";
        pixel.style.height = pdim + "px";
        pixel.style.width = pdim + "px";
        pixel.onmouseover = function () {
            this.style.backgroundColor = "black";
        }
        slate.appendChild(pixel);
    }
}
