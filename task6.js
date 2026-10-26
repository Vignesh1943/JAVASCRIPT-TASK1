let date = new Date();

console.log("Original Date:"); 
console.log(date);    

//date
date.setDate(15);                             

console.log("\nAfter setDate(15):");           
console.log(date);   

//month
date.setMonth(5);                              

console.log("\nAfter setMonth(5):");      
console.log(date);   

//year
date.setFullYear(2050);                       

console.log("\nAfter setFullYear(2050):");     
console.log(date); 

//methods
console.log("\n--- GET METHODS ---");     

console.log("Date:", date.getDate());          
console.log("Day:", date.getDay());            
console.log("Month:", date.getMonth() + 1);   
console.log("Year:", date.getFullYear());      

console.log("Hours:", date.getHours());        
console.log("Minutes:", date.getMinutes());    
console.log("Seconds:", date.getSeconds());    