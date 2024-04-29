
import {SearchMeals,SearchMealsByFLetter} from '../js/APIs/searchApi.js'
import {DispalyData,DisplayDetails,DispalyAllCategories,DispalyMeals1ByCategories,DispalyAllAreas,DispalyAllIngreds} from '../js/UI/UiMeals.js'
import {MealDetails} from '../js/APIs/mealDetailApi.js'
import {AllCategory,GetMealsByCategory} from '../js/APIs/categoryApi.js'
import {GetAllArea,GetMealsByArea} from '../js/APIs/areaApi.js'
import {GetAllIngredient,GetMealsByIngredient} from '../js/APIs/ingredientApi.js'




let mealWillAddsection = document.querySelector('#mealWillAdd')
let loader = document.querySelector('#loader')
let searchUI=document.querySelector('#searchUI')


let loderInside=document.querySelector('#loderInside')
let loderInside2=document.querySelector('#loderInside2')







//******NAV ANIMATION */

// var to calculate width of nav 
let navMove= $('.tabs').outerWidth() ;
//move out depends on this width
// $('#sideNav').animate({left:-navMove},400);

let links = document.querySelectorAll('.nav li');

// console.log(links);
//move all links out as by default nav closed and all links slide down
links.forEach((link,i)=>{  
    $(link).animate({top:navMove},500)
})

// close and open action 

$('#closeAndOpenNav').click(function(){
    // console.log('clicked');
    
   //if nav opened and close icon clicked
    if ($('#sideNav').css('left')=='0px') {
        //close nav by move out depends on nav width
        $('#sideNav').animate({
            left: -navMove
        },600);
        // change icon 
        $('#closeAndOpenNav svg').removeClass('fa-x');
        $('#closeAndOpenNav svg').addClass('fa-bars');
        // animate links by slide all down
        links.forEach((link,i)=>{
  
            // console.log($(link) , i);
            $(link).animate({top:500},500)
        })
        //other way but not working well
        // links.forEach((link)=>{
        //     link.classList.add('animate__animated', 'animate__slideOutDown');
        //     link.style.setProperty('--animate-duration', '0.5s');
        // })
        
        
    }
    //else if the nav closed 
    else{
        //open it to the original area
        $('#sideNav').animate({
            left: '0'
        },700);
        //slide all links to up by diffrent duration
        links.forEach((link,i)=>{
  
            // console.log($(link) , i);
            $(link).animate({top:0},(i+1)*250)
        })

        //change icon 
        $('#closeAndOpenNav svg').addClass('fa-x');
        $('#closeAndOpenNav svg').removeClass('fa-bars');

       //other way but not working
        // links.forEach((link)=>{
        //     link.classList.add('animate__animated', 'animate__slideInDown');
        // })
                    // link.style.setProperty('--animate-duration', '0.5s');

    }
   

})


//************************************START PROGRAM**************** */

start();

async function start(){
    
    showLoader();
    $('#sideNav').animate({left:-navMove},400);
    $('#closeAndOpenNav svg').removeClass('fa-x');
    $('#closeAndOpenNav svg').addClass('fa-bars');
    let generalMmeals=new SearchMeals('');
    let data=await generalMmeals.fetchMealsByName()

    setTimeout(hideLoader, 300);
    

    displayMeals(data);


}

function displayMeals(data){
    
    // console.log(data);
     let showMeals=new DispalyData(data);
    let cartona= showMeals.display();
    // console.log(cartona);

    mealWillAddsection.innerHTML=cartona;
   

    let meals = document.querySelectorAll('.meal');

    meals.forEach((meal)=>{
        meal.addEventListener('click',async()=>{
            
            // console.log(meal.getAttribute('idMeal'));
            showLoader();
            $('#sideNav').animate({left:-navMove},400);
    $('#closeAndOpenNav svg').removeClass('fa-x');
    $('#closeAndOpenNav svg').addClass('fa-bars');
            let mealDetail=new MealDetails(meal.getAttribute('idMeal')) ;
            let fetchMealDetail =await mealDetail.fetchMealsById();
            // console.log(fetchMealDetail.meals);
            setTimeout(hideLoader, 200);
            displayMealDetails(fetchMealDetail.meals);
    
    
        })
    
    
    })

}
async function displayMealDetails(data){
    // console.log(data);
    searchUI.innerHTML=''
    let mealdata = new DisplayDetails(data);
    let cartona= mealdata.display();

    mealWillAddsection.innerHTML=cartona;



    if (mealWillAddsection.querySelector('#tag').textContent=='null') {
        
        mealWillAddsection.querySelector('#tag').classList.add('d-none')

        // console.log(mealWillAddsection.querySelector('#tag'));
        
   }

 let recips = mealWillAddsection.querySelectorAll('.recip');
 recips.forEach((recip)=>{
    
    if (recip.textContent.trim()=='') {
        recip.classList.add('d-none');
    }
 })

}







//  hide and show loader functions

function showLoader(){
    loader.classList.replace('d-none','d-block');
    loader.style.opacity = '.98';
}

function hideLoader() {
    
    loader.style.opacity = '0';
    setTimeout(function() {
        loader.classList.replace('d-block','d-none');
    }, 100); 
}
function showLoader2(){
    // loderInside.style.top =`${top}` ;
    loderInside.classList.replace('d-none','d-block');
    loderInside.style.opacity = '.98';
}

function hideLoader2() {
    
    loderInside.style.opacity = '0';
    setTimeout(function() {
        loderInside.classList.replace('d-block','d-none');
    }, 100); 
}
function showLoader3(){
    // loderInside.style.top =`${top}` ;
    loderInside2.classList.replace('d-none','d-block');
    loderInside2.style.opacity = '.98';
}

function hideLoader3() {
    
    loderInside2.style.opacity = '0';
    setTimeout(function() {
        loderInside2.classList.replace('d-block','d-none');
    }, 100); 
}



//  Handle Links Actions and Navigations

links.forEach((link)=>{
    link.addEventListener('click',function(){
        $('#sideNav').animate({left:-navMove},400);
        $('#closeAndOpenNav svg').removeClass('fa-x');
        $('#closeAndOpenNav svg').addClass('fa-bars');
        if (link.textContent=='Search') {
            mealWillAddsection.innerHTML=""
           
            // set search ui 
            searchUI.innerHTML=`
            <div class="container">
            <div class="row justify-content-center">
        <div class="col-6 mb-5">
          <input id='sByName' type="text" class="form-control bg-black border-2 py-2" placeholder="Search BY Name">
        </div>
        <div class="col-6">
          <input id='sByFLet' type="text" class="form-control bg-black border-2 py-2" placeholder="Search BY First Letter">
        </div>
      </div>
      </div>
     

            `     
           console.log(searchUI.offsetHeight);
           let searchByNameInput= searchUI.querySelector('#sByName');
           let SearchByFLetInput= searchUI.querySelector('#sByFLet');
         
           searchByNameInput.addEventListener('input',async()=>{
            $('#sideNav').animate({left:-navMove},400);
            $('#closeAndOpenNav svg').removeClass('fa-x');
            $('#closeAndOpenNav svg').addClass('fa-bars');
            showLoader2();
           
            let searchMeals=new SearchMeals(searchByNameInput.value);
            let data=await searchMeals.fetchMealsByName()
            
            console.log(data.meals);
            if (data.meals) {
                setTimeout(hideLoader2, 200);
        
                displayMeals(data);
            }else{
                
                setTimeout(hideLoader2, 200);
                mealWillAddsection.innerHTML='';
            }
           
          
        

           })


           SearchByFLetInput.addEventListener('input',async()=>{
            
            showLoader2();
            let input =SearchByFLetInput.value.charAt(0);

            if (input.trim()=='') {
                let searchMeals=new SearchMealsByFLetter('a');
                let data=await searchMeals.fetchMealsByFLetter()
                
                setTimeout(hideLoader2, 200);
                
            
                displayMeals(data);
            }else{
                let searchMeals=new SearchMealsByFLetter(input);
                let data=await searchMeals.fetchMealsByFLetter()
            
                setTimeout(hideLoader2, 200);
                
            
                displayMeals(data);
            }
            
            if (SearchByFLetInput.value.length > 1) {
                SearchByFLetInput.value = SearchByFLetInput.value.slice(0, 1);
            }
        

           })


        
        
        }else if(link.textContent=='Categories'){

            displayAllCategories()

        }else if(link.textContent=='Area'){

            displayAllAreas()

        }else if(link.textContent=='Ingredients'){
            displayAllIngredients()
        }else if(link.textContent=='Contact Us'){
            searchUI.innerHTML=''
            mealWillAddsection.innerHTML=""
            displayContactForm();
        }
    })
})


async function displayAllCategories(){
    searchUI.innerHTML=''
    showLoader3()
    mealWillAddsection.innerHTML=""
    $('#sideNav').animate({left:-navMove},400);
    $('#closeAndOpenNav svg').removeClass('fa-x');
    $('#closeAndOpenNav svg').addClass('fa-bars');
    let categories=new  AllCategory();
    let all= await categories.fetchAllCategory();
    
    console.log(all.categories);
    setTimeout(hideLoader3, 200);
    displayAllCats(all.categories);
}






function displayAllCats(data){
    // console.log(data);
    // if (data.length>20) {
    //     data = data.slice(0,20);
    // }
    searchUI.innerHTML=''
    let showCategories=new DispalyAllCategories(data);
    let cartona= showCategories.display();
    

    mealWillAddsection.innerHTML=cartona;
   

    let categories = document.querySelectorAll('.meal');

    categories.forEach((category)=>{

        category.addEventListener('click',async()=>{
            $('#sideNav').animate({left:-navMove},400);
            $('#closeAndOpenNav svg').removeClass('fa-x');
            $('#closeAndOpenNav svg').addClass('fa-bars');
        
            showLoader3();
        // GetMealsByCategory
        
        //
        
        let mealsByCat=new GetMealsByCategory(category.getAttribute('idCategory')) ;
        let fetchMeals =await mealsByCat.fetchAllCategory();
        
        fetchMeals=fetchMeals.meals;
        console.log(fetchMeals);
        if (fetchMeals.length>20) {
            fetchMeals = fetchMeals.slice(0,20);
        }
        console.log(fetchMeals);

        


        let meals = new DispalyMeals1ByCategories(fetchMeals);
        let categoryCartona= meals.display();
        
        mealWillAddsection.innerHTML=categoryCartona;
        setTimeout(hideLoader3, 200);
        
        
        
        let displayeMeals = document.querySelectorAll('.meal');
        console.log(displayeMeals);
        displayeMeals.forEach((meal)=>{
            meal.addEventListener('click',async()=>{
                $('#sideNav').animate({left:-navMove},400);
                $('#closeAndOpenNav svg').removeClass('fa-x');
                $('#closeAndOpenNav svg').addClass('fa-bars');
                console.log(meal.getAttribute('idMeal'));
                showLoader3();
                let mealDetail=new MealDetails(meal.getAttribute('idMeal')) ;
                let fetchMealDetail =await mealDetail.fetchMealsById();
                // console.log(fetchMealDetail.meals);
                setTimeout(hideLoader3, 200);
                displayMealDetails(fetchMealDetail.meals);
        
        
            })
            })



    })
    })






}
          
async function displayAllAreas(){
    searchUI.innerHTML=''
    showLoader3()
    mealWillAddsection.innerHTML=""
    $('#sideNav').animate({left:-navMove},400);
    $('#closeAndOpenNav svg').removeClass('fa-x');
    $('#closeAndOpenNav svg').addClass('fa-bars');
    let areas=new  GetAllArea();
    let all= await areas.fetchAllAreas();
    
    // console.log(all.meals);

    setTimeout(hideLoader3, 200);
    // displayAllAreas(all.categories);

    let showAreas=new DispalyAllAreas(all.meals);
    let cartona= showAreas.display();
    

    mealWillAddsection.innerHTML=cartona;

    let allareas = document.querySelectorAll('.meal');
    // console.log(allareas);
    allareas.forEach((area)=>{

        area.addEventListener('click',async()=>{
            $('#sideNav').animate({left:-navMove},400);
            $('#closeAndOpenNav svg').removeClass('fa-x');
            $('#closeAndOpenNav svg').addClass('fa-bars');
            showLoader3();
            // Get meals by area name 
            let mealsByArea=new GetMealsByArea(area.getAttribute('idArea')) ;
            let fetchMeals =await mealsByArea.fetchAllMeals();
            
            fetchMeals=fetchMeals.meals;
            console.log(fetchMeals);
            if (fetchMeals.length>20) {
                fetchMeals = fetchMeals.slice(0,20);
            }
            console.log(fetchMeals);
            

                  


        let meals = new DispalyMeals1ByCategories(fetchMeals);
        let areaCartona= meals.display();
        
        mealWillAddsection.innerHTML=areaCartona;
        
        setTimeout(hideLoader3, 200);
        
        
        
        let displayeMeals = document.querySelectorAll('.meal');
        // console.log(displayeMeals);
        displayeMeals.forEach((meal)=>{
            meal.addEventListener('click',async()=>{
                $('#sideNav').animate({left:-navMove},400);
                $('#closeAndOpenNav svg').removeClass('fa-x');
                $('#closeAndOpenNav svg').addClass('fa-bars');
                // console.log(meal.getAttribute('idMeal'));
                showLoader3();
                let mealDetail=new MealDetails(meal.getAttribute('idMeal')) ;
                let fetchMealDetail =await mealDetail.fetchMealsById();
                // console.log(fetchMealDetail.meals);
                setTimeout(hideLoader3, 200);
                displayMealDetails(fetchMealDetail.meals);
        
        
            })
            })






        })



    })
   

}
async function displayAllIngredients(){
    searchUI.innerHTML=''
    showLoader3()
    mealWillAddsection.innerHTML=""
    $('#sideNav').animate({left:-navMove},400);
    $('#closeAndOpenNav svg').removeClass('fa-x');
    $('#closeAndOpenNav svg').addClass('fa-bars');
    let ingredients=new  GetAllIngredient();
    let all= await ingredients.fetchAllIngreds();
    
    // console.log(all.meals);
    if (all.meals.length>20) {
        all = all.meals.slice(0,20);
    }
    // console.log(all);

    setTimeout(hideLoader3, 200);
    // displayAllAreas(all.categories);

    let showIngreds=new DispalyAllIngreds(all);
    let cartona= showIngreds.display();
    

    mealWillAddsection.innerHTML=cartona;

    let allIngreds = document.querySelectorAll('.meal');
    // console.log(allareas);
    allIngreds.forEach((Ingred)=>{

        Ingred.addEventListener('click',async()=>{
            $('#sideNav').animate({left:-navMove},400);
            $('#closeAndOpenNav svg').removeClass('fa-x');
            $('#closeAndOpenNav svg').addClass('fa-bars');
            showLoader3();
            // Get meals by Ingredient name 
            let mealsByIngred=new GetMealsByIngredient(Ingred.getAttribute('idIngred')) ;
            let fetchMeals =await mealsByIngred.fetchAllMeals();
            
            fetchMeals=fetchMeals.meals;
            // console.log(fetchMeals);
            if (fetchMeals.length>20) {
                fetchMeals = fetchMeals.slice(0,20);
            }
            // console.log(fetchMeals);
            

                  


        let meals = new DispalyMeals1ByCategories(fetchMeals);
        let IngredCartona= meals.display();
        
        mealWillAddsection.innerHTML=IngredCartona;
        
        setTimeout(hideLoader3, 200);
        
        
        
        let displayeMeals = document.querySelectorAll('.meal');
        // console.log(displayeMeals);
        displayeMeals.forEach((meal)=>{
            meal.addEventListener('click',async()=>{
                $('#sideNav').animate({left:-navMove},400);
                
                $('#closeAndOpenNav svg').removeClass('fa-x');
                $('#closeAndOpenNav svg').addClass('fa-bars');
                // console.log(meal.getAttribute('idMeal'));
                showLoader3();
                let mealDetail=new MealDetails(meal.getAttribute('idMeal')) ;
                let fetchMealDetail =await mealDetail.fetchMealsById();
                // console.log(fetchMealDetail.meals);
                setTimeout(hideLoader3, 200);
                displayMealDetails(fetchMealDetail.meals);
        
        
            })
            })






        })



    })
   

}

function displayContactForm(){

    mealWillAddsection.innerHTML=`
    <div class="container min-vh-100" data-bs-theme="light">
    <div class="row g-4  h-100  justify-content-center text-center align-content-center px-5">
      <div class="col-md-6">
        <input id="userName" for="wrongName" type="text" placeholder="Enter Your Name" class="form-control p-2 fs-5 ">
        <div id="wrongName" class="alert alert-danger d-none fs-5 py-3 px-5 mt-2 text-center" role="alert">
          Special characters and numbers not allowed
        </div>
      </div>
      <div class="col-md-6">
        <input id="userEmail" for="wrongEmail" type="email" placeholder="Enter Your Email" class="form-control p-2 fs-5 ">
        <div id="wrongEmail" class="alert alert-danger d-none fs-5 py-3 px-5 mt-2 text-center" role="alert">
          Email not valid *exemple@yyy.zzz
        </div>
      </div>
      <div class="col-md-6">
        <input id="userPhone" for="wrongPhone" type="tel" placeholder="Enter Your Phone" class="form-control p-2 fs-5 ">
        <div id="wrongPhone" class="alert alert-danger d-none fs-5 py-3 px-5 mt-2 text-center" role="alert">
          Enter valid Phone Number
        </div>
      </div>
      <div class="col-md-6">
        <input id="userAge" for="wrongAge" type="number" placeholder="Enter Your Age" class="form-control p-2 fs-5 ">
        <div id="wrongAge" class="alert alert-danger d-none fs-5 py-3 px-5 mt-2 text-center" role="alert">
          Enter valid Age
        </div>
      </div>
      <div class="col-md-6">
        <input id="userPass" for="wrongPass" type="password" placeholder="Enter Your Password" class="form-control p-2 fs-5 ">
        <div id="wrongPass" class="alert alert-danger d-none fs-5 py-3 px-5 mt-2 text-center" role="alert">
          Enter valid password *Minimum eight characters, at least one letter and one number:*
        </div>
      </div>
      <div class="col-md-6">
        <input id="userRePass" for="wrongRePass" type="password" placeholder="Enter Re-Password" class="form-control p-2 fs-5 ">
        <div id="wrongRePass" class="alert alert-danger d-none fs-5 py-3 px-5 mt-2 text-center" role="alert">
          Enter valid repassword
        </div>
      </div>
    
      <button type="submit" id="subnitBtn" class="btn btn-outline-danger disabled w-auto fs-5">Submit</button>
    </div>
    
    </div> 
    `
let formInputs =mealWillAddsection.querySelectorAll('input');
let formAlerts =mealWillAddsection.querySelectorAll('.alert');

let userName=mealWillAddsection.querySelector('#userName');
let userEmail=mealWillAddsection.querySelector('#userEmail');
let userPhone=mealWillAddsection.querySelector('#userPhone');
let userAge=mealWillAddsection.querySelector('#userAge');
let userPass=mealWillAddsection.querySelector('#userPass');
let userRePass=mealWillAddsection.querySelector('#userRePass');






formInputs.forEach((input)=>{
    
    
    input.addEventListener('keyup',()=>{
     let inputValidation =validationToInput(input.getAttribute('id'),input.value)

   let nameIsValid= validationToInput(userName.getAttribute('id'),userName.value)
   let wrongName=mealWillAddsection.querySelector(`#${userName.getAttribute('for')}`)


   let emailIsValid= validationToInput(userEmail.getAttribute('id'),userEmail.value)
   let wrongEmail=mealWillAddsection.querySelector(`#${userEmail.getAttribute('for')}`)

   let phoneIsValid= validationToInput(userPhone.getAttribute('id'),userPhone.value)
   let wrongPhone=mealWillAddsection.querySelector(`#${userPhone.getAttribute('for')}`)


   let ageIsValid= validationToInput(userAge.getAttribute('id'),userAge.value)
   let wrongAge=mealWillAddsection.querySelector(`#${userAge.getAttribute('for')}`)

   let passIsValid= validationToInput(userPass.getAttribute('id'),userPass.value)
   let wrongPass=mealWillAddsection.querySelector(`#${userPass.getAttribute('for')}`)

   let rePassIsValid= validationToInput(userRePass.getAttribute('id'),userRePass.value)
   let wrongRePass=mealWillAddsection.querySelector(`#${userRePass.getAttribute('for')}`)


    
    if (nameIsValid) {
        console.log('name valid');
        if (wrongName.classList.contains('d-block')) {
            wrongName.classList.replace('d-block','d-none')
        }
        
        
    }else{
        console.log('name notvalid');
        if (wrongName.classList.contains('d-none')) {
            wrongName.classList.replace('d-none','d-block')
        }
       
    }


    if (emailIsValid) {
        console.log('emailIsValid valid');
        if (wrongEmail.classList.contains('d-block')) {
            wrongEmail.classList.replace('d-block','d-none')
        }
        
    }else{
        console.log('emailIsValid notvalid');
        if (wrongEmail.classList.contains('d-none')) {
            wrongEmail.classList.replace('d-none','d-block')
        }
      
    }
    
    if (phoneIsValid) {
        console.log('phoneIsValid valid');
        if (wrongPhone.classList.contains('d-block')) {
            wrongPhone.classList.replace('d-block','d-none')
        }
        
    }else{
        console.log('phoneIsValid notvalid');
        if (wrongPhone.classList.contains('d-none')) {
            wrongPhone.classList.replace('d-none','d-block')
        }
      
    }

    if (ageIsValid) {
        console.log('ageIsValid valid');
        if (wrongAge.classList.contains('d-block')) {
            wrongAge.classList.replace('d-block','d-none')
        }
        
    }else{
        console.log('ageIsValid notvalid');
        if (wrongAge.classList.contains('d-none')) {
            wrongAge.classList.replace('d-none','d-block')
        }
    }



    if (passIsValid) {
        console.log('passIsValid valid');
        if (wrongPass.classList.contains('d-block')) {
            wrongPass.classList.replace('d-block','d-none')
        }
    }else{
        console.log('passIsValid notvalid');
        if (wrongPass.classList.contains('d-none')) {
            wrongPass.classList.replace('d-none','d-block')
        }
    }
    if (rePassIsValid) {
        console.log('rePassIsValid valid');
        if (wrongRePass.classList.contains('d-block')) {
            wrongRePass.classList.replace('d-block','d-none')
        }
    }else{
        console.log('rePassIsValid notvalid');
        if (wrongRePass.classList.contains('d-none')) {
            wrongRePass.classList.replace('d-none','d-block')
        }
    }

    if (nameIsValid&&emailIsValid&&phoneIsValid&&ageIsValid&&passIsValid&&rePassIsValid) {
        let subnitBtn =mealWillAddsection.querySelector('#subnitBtn');
        console.log(subnitBtn);
        if (subnitBtn.classList.contains('disabled')) {

            subnitBtn.classList.remove('disabled')
            subnitBtn.addEventListener('click',(e)=>{
                e.preventDefault()
            })
        }
    }else{
        let subnitBtn =mealWillAddsection.querySelector('#subnitBtn');
        if (subnitBtn.classList.contains('disabled')) {

            
            
        }else{
            subnitBtn.classList.add('disabled')
        }
    }
    
    



    })
})





}

   

function  validationToInput(id,inputVal){

    let nameRegex = /^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/;
    let emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phoneRegex=/^(?:\+?20|0)?1[0-9]{9}$/;
    let ageRegex=/^(?:1[0-4]\d|[1-9]\d|\d)$/;
    let  passRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;

    switch (id) {
        case 'userName':
            return (nameRegex.test(inputVal))
            break;
        case 'userEmail':
            return (emailRegex.test(inputVal))
            break;
        case 'userPhone':
            return (phoneRegex.test(inputVal))
            break;
        case 'userAge':
            return (ageRegex.test(inputVal))
            break;
    
        case 'userRePass':
            return (inputVal!=''&&inputVal===mealWillAddsection.querySelector('#userPass').value)
            break;
    
        default:
            return (passRegex.test(inputVal))
            break;
    }


}




   
 










    
    

