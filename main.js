//initializing input values 
const monthRequired = document.querySelector('.month_required');
const currentDate = document.querySelector('.current_date');
const startingDate = document.querySelector('.started');
const startingOutput = document.querySelector('.output_starting');
const button = document.querySelector('.button');
const display = document.querySelector('.remaining_period');
const endDate = document.querySelector('.end_date');


 // gets the current date , inoking the nested startingDate function
function getCurrent(){
    let getCurrentDate= new Date();
    
    currentDate.innerHTML= `current date : ${getCurrentDate.toDateString()}`;
    
    let currentYear = getCurrentDate.getFullYear() , 
    currentMonth = getCurrentDate.getMonth() + 1,
    current_date =  getCurrentDate.getDate();
    
// getStarting function to get the starting dates

function getStarting(){
    
    let   getStartingDate = new Date(startingDate.value);

     startingOutput.innerHTML = ` starting date : ${getStartingDate.toDateString()}`;
 
     let startingYear = getStartingDate.getFullYear() , 
     startingMonth = getStartingDate.getMonth() +  1, 
     starting_date = getStartingDate.getDate();
 
 // to get the estimated end date 
    function end_Date(){
        let endYear , endMonth , end_date ;
     end_date = starting_date;
     if(+(monthRequired.value) < 12){
        endMonth = startingMonth + +(monthRequired.value);
        if(endMonth >12){
            endYear = startingYear+ 1;
            endMonth = endMonth - 12;
        }else{
            endYear = startingYear;
        }
    }else if(+(monthRequired.value) === 12 ){
          endYear = startingYear + 1;
          endMonth = 1;
     }else if(+(monthRequired.value) > 12 ){
         endMonth = startingMonth + (+(monthRequired.value) % 12);

         let value = Math.floor((startingMonth + +(monthRequired.value))/12);
      
           if(+(monthRequired.value) > 12){
               endYear = startingYear + value;
               if(endMonth > 12){
                   endMonth = endMonth - 12;
               }

           }else{
               endYear = startingYear;
           }
     }
     else {
         endYear = startingYear;
     }

     return [endYear , endMonth , end_date];
    }

    const [endYear , endMonth , end_date] = end_Date();

    let enDate = new Date(end_Date().join("-"));
     
     endDate.innerHTML=`end date : ${enDate.toDateString()}`;


     function comparingDate(){
         let current = new Date([currentYear , currentMonth , current_date].join("-"));
         let end = new Date(end_Date().join("-"));

         let year , month , date ;

         if(current > end){
              year = Math.abs(currentYear - endYear);
              month = Math.abs(currentMonth - endMonth);
              date = Math.abs(current_date - end_date);

            display.innerHTML =`you are ${year} years ${month} months and ${date} days past end date`;
         }else{
             year = Math.abs(endYear - currentYear);
             month = Math.abs(endMonth - currentMonth);
             date = Math.abs(end_date - current_date);

             display.innerHTML =`you are ${year} years ${month} months and ${date} days to end date`;
         }

        
     }
     comparingDate();
}

 getStarting();
    
    }

button.addEventListener('click' , getCurrent);


//ask for the number of months for project completion
// get the input of month and day the project started 
//estimate when the project's to end based on the month specified 
// get the current date using the date object
// if the currentt date exceeds the calculated end date .... currentDate - endDate then output overdue project!!
// if current date less than the estimated end date ... endDate - currentDate , then output  remaining months