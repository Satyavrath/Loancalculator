
/**
 * Simple interest example. 
 */
function computeLoan(){
    
   let  amount = document.getElementById('amount').value;
   let interest_rate = document.getElementById('interest_rate').value;
   let months = document.getElementById('months').value;
    if(amount<0|| interest_rate<0||months<0){
        window.alert('Please enter value greater than 0');  
        document.getElementById('payment').innerHTML = "";   
    }  
}
function computeLoan2(){
    amount = document.getElementById('amount').value;
    interest_rate = document.getElementById('interest_rate').value;
    
    months = document.getElementById('months').value;   
    if(amount>0 && interest_rate>0 && months>0){
    
    let interest = (amount * interest_rate * 0.01* months)/12;
    let interestPerMonth = (interest/months).toFixed(2);
    let payment = (Number(amount) +(interest)).toFixed(2);
    
   document.getElementById('Interest').innerHTML = "Monthly Interest = $"+interestPerMonth;
   document.getElementById('Interest_total').innerHTML = "Total Interest = $"+interest.toFixed(2);
   document.getElementById('payment').innerHTML = "Total Payment = $"+payment;
   var loanArray = [interestPerMonth,interest,payment];
   pieChart(loanArray);
    }
    else{window.alert('Please enter value greater than 0');}    
}
       
function computeLoan3(){
    document.getElementById('payment').innerHTML="";
    document.getElementById('Interest').innerHTML="";
    document.getElementById('Interest_total').innerHTML = "";
    document.getElementById('pie').style.display = 'none';
}
    


 function pieChart(loanArray){
    document.getElementById('pie').style.display = 'block';
    let canvas = document.getElementById('pie').getContext('2d');
    let myPieChart = new Chart(canvas,{
        type: 'pie',
        data: {
            datasets: [{
                // label: 'Loan Summary',
                data: loanArray,
                backgroundColor:['green','Orange','dodgerblue']
                       }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Monthly Interest',  
                'Interest',
                'Payment'
            ]
        },
        options: {
            responsive: true
        }
    }); 
 }
