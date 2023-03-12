const body = document.querySelector('body');
const sketchScreen = document.querySelector('#sketchScreen');
const rightContainer = document.querySelector('.rightButtons');
const slider = document.querySelector('#myRange');



let slideNum = document.createElement('div');
slideNum.setAttribute('class', 'slideNum');
rightContainer.append(slideNum);
//^^ Adds a display for the slider the user is changing

console.log(1200/slider.value);

slideNum.textContent = slider.value;
//^^ This will eventually set the slide number to be equal to the value of the slider


let column = [];
let row = [];
//^^ Initial arrays for rows and columns

//___________________________________________________________________________

function gridClear()
{
    for (let i = 0;i<row.length; i++)
    {
        row[i].remove('#row');
    }
}
//^^ This will clear out the grid to prepare for the new grid value


function gridChange(sliderNumber)
{

    gridClear();
    //^^Clear all divs in the sketch screen

    slideNum.textContent = slider.value + 'X' + slider.value;
    //^^number under slider changes here

    for (let j = 0; j<sliderNumber; j++)

    {
        row[j] = document.createElement('div');
        row[j].setAttribute('id','row');
        sketchScreen.append(row[j]);
        //^^ This for loop creates the initial container for each row

        for (let i = 0; i<sliderNumber; i++ )
            {
             column [i + (slider.value*j)]= document.createElement('div');
             column [i+ (slider.value*j)].setAttribute('id','grid');

             column[i + (slider.value*j)].addEventListener('mouseover', function(e){
                column[i + (slider.value*j)].classList.add('filled');
             })

             column[i+(slider.value*j)].setAttribute('style','padding:' + 400/(slider.value) + 'px;' );
             row[j].append(column[i + (slider.value*j)]);
             //>> Need to set something here to alter the css grid padding to 1200/slideNumber
            } 
        //^^This for loop creates each item in each row
    }
    
    //console.log(1200/(slider.value*slider.value));
}
//^^ This creates the new grid

gridChange(slider.value);
//^^ Running this function once during initialization to spawn first grid


slider.addEventListener('change', function(e){

    gridChange(slider.value);
})

//document.getElementById('grid').addEventListener('mouseover', function(e){
  //  document.getElementById('grid').classList.add('filled');
//})