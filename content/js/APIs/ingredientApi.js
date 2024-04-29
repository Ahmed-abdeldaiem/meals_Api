export class GetAllIngredient{
    constructor(){
        
    }
   async fetchAllIngreds(){
   
        let url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
let options = {
	method: 'GET',
	
};

try {
	let response = await fetch(url, options);
	let ingredients = await response.json();
	// console.log(games);
    return ingredients;
} catch (error) {
	alert('Server Error Try again Later :',error)
}
    }
}



export class GetMealsByIngredient{
    constructor(ingred){
        this.ingred=ingred
    }
   async fetchAllMeals(){
        console.log(this.ingred);
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.ingred}`;
let options = {
	method: 'GET',
	
};

try {
	let response = await fetch(url, options);
	let meals = await response.json();
	// console.log(games);
    return meals;
} catch (error) {
	alert('Server Error Try again Later :',error)
}
    }
}
