let bookMarkName = document.getElementById('Name')
let bookMarkUrl = document.getElementById('URL')
let valuesContainer =[];


if(localStorage.getItem('products') == null)
{
    valuesContainer = [] ;
}else
{
    valuesContainer = JSON.parse(localStorage.getItem('products'))
    displayProduct()
}

document.getElementById("Submit").onclick = function getValue() 
{
    if(bookMarkName.value != "" && bookMarkName.value != null ) // != "" lw el user msh katb 7aga de htrg3 false anma != null lw el user msh katb 7aga btrg3 true 3shan kda lazm a7ot && 3shan lw || hwa hyd5ol 3shan w7da true w w7da false anma lw && msh hydkhol talma el != "" btrg3 false     
      { let bookMarkValue =
        {
            Name : bookMarkName.value ,
            url : bookMarkUrl.value
        }
        valuesContainer.push(bookMarkValue)
        localStorage.setItem('products' , JSON.stringify(valuesContainer))
        displayProduct()
        clearDate()
        document.getElementById('error').innerHTML = ``
        document.getElementById('urlError').innerHTML=``
        
    }
    else{
        document.getElementById('error').innerHTML = `<p id="error" class="error">Name is required</p>`
        document.getElementById('urlError').innerHTML=`<p id="errord" class="error">Url Field is required</p> `
        
       
    }
    console.log(bookMarkName.value != "" , bookMarkName.value != null , bookMarkName.value != undefined)

   
}

function displayProduct()
{
    let container = ``
    for(let i = 0 ; i < valuesContainer.length ; i++)
    {
        container += 
        `
        <div class="container myRowBg mb-4">
        <div class="row">
            <div class="myrow  py-4 px-3 d-flex">
                <h2 class="color my-3 ">${valuesContainer[i].Name}</h2>
                <a target="_blank" href="http://${valuesContainer[i].url}" class="btn btn-primary my-3 mx-2 ms-5 hover">Visit</a>
                <button class="btn btn-myDanger my-3" onclick="deleteMark(${i})">Delete</button> 
            </div>
            </div>
        </div>
        `
    }
    document.getElementById('myContainer').innerHTML = container;
}


function deleteMark(index) 
{
    valuesContainer.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(valuesContainer))
    displayProduct()
}
function clearDate()
{
    bookMarkName.value = ""
    bookMarkUrl.value = ""
}
// function validateBookMarkName() 
// {
//     let regex = /[a-z]{1,}$/i
//     if(regex.test(bookMarkName.value) && regex.test(bookMarkUrl.value))
//     {
//         return true ;
//     }
//     else
//     {
//         return false
//     }
// }