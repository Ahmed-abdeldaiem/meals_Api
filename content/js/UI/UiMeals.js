export class DispalyData{
    constructor(data){
        this.data=data;

    }
    display(){
        // console.log(this.data);
        let cartona=''
        let fetchedData= this.data;
        // console.log(fetchedData.meals);
        for (let i = 0; i < fetchedData.meals.length; i++) {
            let el = fetchedData.meals[i];
            // console.log(el);
            cartona +=`
            <div class="col-md-3">
            <div idMeal="${el.idMeal}" class="meal position-relative rounded-2 overflow-hidden">
              <img src="${el.strMealThumb}" width="100%" alt="meal image">
              <div id="mealNameLayer" class="position-absolute bottom-0 start-0  bg-white bg-opacity-75 d-flex align-items-center">
                <p class="fs-2 px-2 fw-semibold2 text-capitalize text-black">${el.strMeal}</p>
              </div>
            </div>
           
          </div>
            `
        }
        return cartona ;
    }
}

export class DisplayDetails{
    constructor(data){
        this.data=data;

    }
    display(){
       
        let details= this.data;
        console.log(details[0]);

        let imageSrc =details[0].strMealThumb ;
        let mealName =details[0].strMeal ;
        let mealInst =details[0].strInstructions;
        let mealArea =details[0].strArea;
        let mealCat =details[0].strCategory;
        let mealTag =details[0].strTags;
        let mealComponent1=`${details[0].strMeasure1}${details[0].strIngredient1}`
        let mealComponent2=`${details[0].strMeasure2}${details[0].strIngredient2}`
        let mealComponent3=`${details[0].strMeasure3}${details[0].strIngredient3}`
        let mealComponent4=`${details[0].strMeasure4}${details[0].strIngredient4}`
        let mealComponent5=`${details[0].strMeasure5}${details[0].strIngredient5}`
        let mealComponent6=`${details[0].strMeasure6}${details[0].strIngredient6}`
        let mealComponent7=`${details[0].strMeasure7}${details[0].strIngredient7}`
        let mealComponent8=`${details[0].strMeasure8}${details[0].strIngredient8}`
        let mealComponent9=`${details[0].strMeasure9}${details[0].strIngredient9}`
        let mealComponent10=`${details[0].strMeasure10}${details[0].strIngredient10}`
        let mealComponent11=`${details[0].strMeasure11}${details[0].strIngredient11}`
        let mealComponent12=`${details[0].strMeasure12}${details[0].strIngredient12}`
        let mealComponent13=`${details[0].strMeasure13}${details[0].strIngredient13}`
        let mealComponent14=`${details[0].strMeasure14}${details[0].strIngredient14}`
        let mealComponent15=`${details[0].strMeasure15}${details[0].strIngredient15}`
        let mealComponent16=`${details[0].strMeasure16}${details[0].strIngredient16}`
        let mealComponent17=`${details[0].strMeasure17}${details[0].strIngredient17}`
        let mealComponent18=`${details[0].strMeasure18}${details[0].strIngredient18}`
        let mealComponent19=`${details[0].strMeasure19}${details[0].strIngredient19}`
        let mealComponent20=`${details[0].strMeasure20}${details[0].strIngredient20}`


        let cartona =` <div class="col-md-4 col-12">
        <img src="${imageSrc}" class="w-100 rounded-2" alt="meal image">
        <h2 class='fw-semibold2'>${mealName}</h2>
      </div>
      <div class="col-md-8 col-12">
        <h2 class=" my-2 fw-semibold2 fs-1">Instructions</h2>
        <p class=" fs-5" >${mealInst}</p>
        <h5 class=" my-3 py-1 fw-bold  fs-1">Area : <span class="fw-semibold2">${mealArea}</span></h5>
        <h5 class=" my-3 py-1 fw-bold fs-1">Category : <span class="fw-semibold2">${mealCat}</span></h5>
        <h5 class=" my-3 py-1 fw-semibold2 fs-2 ">Recipes : <span class=""></span></h5>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent1}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent2}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent3}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent4}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent5}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent6}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent7}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent8}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent9}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent10}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent11}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent12}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent13}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent14}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent15}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent16}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent17}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent18}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent19}</div>
        <div class="recip rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block m-2">${mealComponent20}</div>
        <h5 class=" my-3 py-1 fw-semibold2 fs-2 ">Tags :</h5>
        <div id='tag' class="rounded-2 px-1 py-1 fs-5 fw-fw-normal d-inline-block">${mealTag}</div>
        
       <div class='mt-3'>
       <a class='py-2 px-3 btn btn-success text-white  fs-5 fw-medium text-decoration-none text-white' target="_blank"  href='${details[0].strSource}'>Source</a>
        <a class='btn btn-danger text-white  fs-5 fw-medium py-2 px-3 text-decoration-none text-white' target="_blank"  href='${details[0].strYoutube}'>Youtube</a>
       </div>
      </div>`

        
     
        return cartona;

    }
}


export class DispalyAllCategories{
    constructor(data){
        this.data=data;

    }
    display(){
        console.log(this.data);
        let cartona=''
        let fetchedData= this.data;
        // console.log(fetchedData.meals);
        for (let i = 0; i < fetchedData.length; i++) {
            let el = fetchedData[i];
            // console.log(el);
            cartona +=`
            <div class="col-md-3">
            <div idCategory="${el.strCategory}" class="meal pointer position-relative rounded-2 overflow-hidden">
              <img src="${el.strCategoryThumb}" width="105%" alt="meal image">
              <div id="mealNameLayer" class="position-absolute bottom-0 start-0  bg-white bg-opacity-75 d-flex flex-column justify-content-start text-center align-align-items-start">
                <p  class="fs-2 px-2 fw-semibold2 text-capitalize text-black">${el.strCategory}</p>
                <p class="fs-6 px-2 text-capitalize text-black">${el.strCategoryDescription}</p>
              </div>
            </div>
           
          </div>
            `
        }
        return cartona ;
    }
}
export class DispalyMeals1ByCategories{
    constructor(data){
        this.data=data;

    }
    display(){
        console.log(this.data);
        let cartona=''
        let fetchedData= this.data;
        // console.log(fetchedData.meals);
        for (let i = 0; i < fetchedData.length; i++) {
            let el = fetchedData[i];
            // console.log(el);
            cartona +=`
            <div class="col-md-3">
            <div idMeal="${el.idMeal}" class="meal pointer position-relative rounded-2 overflow-hidden">
              <img src="${el.strMealThumb}" width="100%" alt="meal image">
              <div id="mealNameLayer" class="position-absolute bottom-0 start-0  bg-white bg-opacity-75 d-flex justify-content-center text-start align-items-center">
                <p  class="fs-2 px-2 fw-semibold2 text-capitalize text-black">${el.strMeal}</p>
               
              </div>
            </div>
           
          </div>
            `
        }
        return cartona ;
    }
}



//dispkay areas class

export class DispalyAllAreas{
    constructor(data){
        this.data=data;

    }
    display(){
        // console.log(this.data);
        let cartona=''
        let fetchedData= this.data;
        // console.log(fetchedData.meals);
        for (let i = 0; i < fetchedData.length; i++) {
            let el = fetchedData[i];
            // console.log(el);
            cartona +=`
            <div class="col-md-3">
            <div idArea="${el.strArea}" class="meal pointer position-relative rounded-2 overflow-hidden d-flex flex-column justify-content-start align-items-center">
              
            <i class="fas fa-house-laptop display-1 text-white"></i>
            <h2>${el.strArea}</h2>
             
            </div>
           
          </div>
            `
        }
        return cartona ;
    }
}

//dispkay Ingredient class

export class DispalyAllIngreds{
    constructor(data){
        this.data=data;

    }
    display(){
        // console.log(this.data);
        let cartona=''
        let fetchedData= this.data;
        // console.log(fetchedData.meals);
        for (let i = 0; i < fetchedData.length; i++) {
            let el = fetchedData[i];
            // console.log(el);
            cartona +=`
            <div class="col-md-3">
            <div idIngred="${el.strIngredient}" class="meal pointer position-relative rounded-2 overflow-hidden d-flex flex-column justify-content-start align-items-center">
              
            <i class="fas fa-drumstick-bite display-1 text-white"></i>
            <h2 class=" text-center">${el.strIngredient}</h2>
            <p class="shortDesc text-center">${el.strDescription}</p>
             
            </div>
           
          </div>
            `
        }
        return cartona ;
    }
}