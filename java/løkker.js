
//for (let i = 1; i>9; i += 1){
//console.log (i)
   
  document.getElementById("addTaskButton").addEventListener("click", addtask);

   function addtask() {
       let task = document.getElementById("taskInput").value; 

       let listItem = document.createElement("li");
       listItem.textContent = task;

      document.getElementById("taskList").appendChild(listItem);
    }
   function tellBokstaver(str) {

      teller små bokstaver i en streng
      
      
      
      

   