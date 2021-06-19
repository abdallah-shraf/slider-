//Get Slid Item
var SImag= Array.from(document.querySelectorAll(".containar img"));
//Get Number of slide    
var SCount = SImag.length;
//Set current Slide
var current=1;
//Slide Number Element
var NumberElement = document.getElementById('number');

//previous and Next 

var next = document.getElementById("next");
var prev = document.getElementById("prev");
//Handle Click on previous and Next Buttons
next.onclick=Next;
prev.onclick=previous;


//creat The Main UlElrment 
var pa =document.createElement('ul');
pa.setAttribute('id','pa-ul');


// Creat Li Item Bassed on slider count


for(var l=1; l<=SCount;l++){

    var creat_Li =document.createElement('li');

    creat_Li.setAttribute('data',l);

    creat_Li.appendChild(document.createTextNode(l));

    pa.appendChild(creat_Li);


}

//Add The Created Ul Element to page
document.getElementById('indic').appendChild(pa);
//Get the new created ul
var paCreatUl = document.getElementById('pa-ul');


//Get pagination item 
var paginationBullets=Array.from(document.querySelectorAll('#pa-ul li'));

for (var i = 0; i<paginationBullets.length; i++){
    paginationBullets[i].onclick = function () {
        current = parseInt(this.getAttribute('data'));
        checker();
    }
}

//Trigger the checker function
checker();

//Next and Previous slide functhion
function Next()
{
    if(next.classList.contains('disabled')){
        return false;

    }
    else{
        current++;
        checker()
    }
}

function previous(){
    if(prev.classList.contains('disabled')){
        return false;

    }
    else{
        current--;
        checker()
    }
}

//creat checker function
function checker(){
    //set slider number
    NumberElement.textContent='Slide #' +(current) + ' of ' + (SCount);
    //test_remove()
    //set active class
    test_remove();
    SImag[current - 1].classList.add('active');
    //set active class 
    paCreatUl.children[current - 1].classList.add('active');
    //remove all active cllasses
  
    //Check if current slide is first
    if(current == 1){
        //add disabled slass previous
        prev.classList.add('disabled');
    }
    else{
        prev.classList.remove('disabled');
    }
    if(current == SCount){
        //add disabled slass previous
        next.classList.add('disabled');
    }
    else{
        next.classList.remove('disabled');
    }
  
    
    //remove all active cllasses
   // removeo()

    
}
//remove all active cllasses
function test_remove(){
    //loop through images
   SImag.forEach(function name(img) {
       img.classList.remove('active');
   });

   paginationBullets.forEach(function (bullet) {
       bullet.classList.remove('active')
   });

}