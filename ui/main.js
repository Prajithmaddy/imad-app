// Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    
    // make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    
    // Render the variable in the correct span
   counter = counter + 1;
   var span = document.getElementById('count');
   span.innerHTML = counter.toString();
   
};  // Submit name
var nameinput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('Submit_btn');
submit.onclick = function (){
    // make a request to the server and send the name
    
    // Capture a list of names and render it as a list
var names = ['name11' , 'name22' , 'name33' , 'name4'];    
var list = '';
for(var i=0; i< names.length; i++) {
    list +- '<li>' + names[i] + '</li>';
}
var ul = document.getElementById('namelist');
ul.innerHTML = list;
};
