var input = document.getElementById("input-1");

var addBtn = document.getElementsByTagName("button")[0];

var ul = document.querySelector("ul");

//function to check input length
function inputLength(){
   return input.value.length;
   
}

// function to create list element and append it to the ul
function create_list_element(){
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(input.value));
      ul.appendChild(li);
      input.value = "";
}

function add_item_button(){
   if(inputLength()> 0){
      create_list_element();
   }
}

function add_item_keyboard(event){
   if(inputLength()> 0 && event.keyCode === 13){
      create_list_element()
     }
}

addBtn.addEventListener("click", add_item_button);

input.addEventListener("keypress", add_item_keyboard);

