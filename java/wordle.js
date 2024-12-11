document.addEventListener("DOMcontentloaded" , () => {
    createsquares();
    
    function createsquares() {
       
     const gameboard = document.getElementById("board") 

    for (let index = 0; index < 30; index++) {
        let square = document.createElement(div)
        square.classlist.add("square")
        square.setattribute("id", index + 1)
        gameboard.appendChild(square);
 

    }
    }
})