export class GetAllArea{
    constructor(){
        
    }
   async fetchAllAreas(){
   
        let url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
let options = {
	method: 'GET',
	
};

try {
	let response = await fetch(url, options);
	let areas = await response.json();
	// console.log(games);
    return areas;
} catch (error) {
	alert('Server Error Try again Later :',error)
}
    }
}




export class GetMealsByArea{
    constructor(area){
        this.area=area
    }
   async fetchAllMeals(){
        console.log(this.area);
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.area}`;
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