export class SearchMeals{
    constructor(name){
        this.name=name;
    }
   async fetchMealsByName(){
    console.log(this.name);
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.name}`;
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
export class SearchMealsByFLetter{
    constructor(name){
        this.name=name;
    }
   async fetchMealsByFLetter(){
    console.log(this.name);
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${this.name}`;
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

