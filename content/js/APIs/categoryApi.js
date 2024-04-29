export class AllCategory{
    constructor(){
        
    }
   async fetchAllCategory(){
   
        let url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
let options = {
	method: 'GET',
	
};

try {
	let response = await fetch(url, options);
	let categories = await response.json();
	// console.log(games);
    return categories;
} catch (error) {
	alert('Server Error Try again Later :',error)
}
    }
}





export class GetMealsByCategory{
    constructor(category){
        this.category=category
    }
   async fetchAllCategory(){
        console.log(this.category);
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.category}`;
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