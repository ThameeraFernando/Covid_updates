    
        const api_url='https://www.hpb.health.gov.lk/api/get-current-statistical'
        async function getData(){

           const response=await fetch(api_url);
           const New=await response.json();

           const{update_date_time,local_total_cases,local_recovered,local_new_deaths,local_new_cases,local_deaths,local_active_cases}=New.data
           
           document.getElementById('local_deaths').textContent=local_deaths;
           document.getElementById('local_active_cases').textContent=local_active_cases;
           document.getElementById('update_date_time').textContent=update_date_time;
           document.getElementById('local_total_cases').textContent=local_total_cases;
           document.getElementById('local_recovered').textContent=local_recovered;
           document.getElementById('local_new_deaths').textContent=local_new_deaths;
           document.getElementById('local_new_cases').textContent=local_new_cases;
        

           console.log(New.data);
       }
       async function getDataGlobal(){

        const response=await fetch(api_url);
        const New=await response.json();

        const{update_date_time,global_total_cases,global_recovered,global_new_deaths,global_new_cases,global_deaths}=New.data
        
        document.getElementById('global_total_cases').textContent=global_total_cases;
        document.getElementById('global_recovered').textContent=global_recovered;
        document.getElementById('update_date_time').textContent=update_date_time;
        document.getElementById('global_new_deaths').textContent=global_new_deaths;
        document.getElementById('global_new_cases').textContent=global_new_cases;
        document.getElementById('global_deaths').textContent=global_deaths;
       
     

        console.log(New.data);
    }
       getData();
       getDataGlobal();
       

