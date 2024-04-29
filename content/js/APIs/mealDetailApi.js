export class MealDetails{
    constructor(id){
        this.id=id;
    }
   async fetchMealsById(){
    console.log(this.id);
        let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`;
let options = {
	method: 'GET',
	
};

try {
	let response = await fetch(url, options);
	let mealDetails = await response.json();
	// console.log(games);
    return mealDetails;
} catch (error) {
	alert('Server Error Try again Later :',error)
}
    }
}
