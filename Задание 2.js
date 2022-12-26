// JSON
const jsonString = `
{
	"list": [
	 {
	  "name": "Petr",
	  "age": "20",
	  "prof": "mechanic"
	 },
	 {
	  "name": "Vova",
	  "age": "60",
	  "prof": "pilot"
	 }
	]
   }
   `;
    
	//Запись данных в объект
function transformJson(strJson) {

	//Получение данных
	let data = JSON.parse(strJson);
	
    let list = data.list;
	
	let result = {list: []};
	let objList = new Object();
	    
	list.forEach(function(elem) {
		objList = elem;

        result.list.push(objList);

	});
	console.log(result);
}
transformJson(jsonString); 
