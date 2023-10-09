let currDate=document.querySelector('#currdate');
let dob=document.getElementById('dob')
let btn=document.getElementById('button');
let result=document.getElementById('result');
let container=document.getElementsByClassName('container');
let age=document.getElementById('age');

var date=new Date();

currDate.innerHTML=`Todays date is : ${date.toLocaleDateString('en-US')}`;  

btn.addEventListener('click',()=>{
    const birthDate=new Date(dob.value);
    // const birthDate=new Date('12/17/1969');
    let tdate=date.getDate();
    let tmonth=date.getMonth()+1;
    let tyear=date.getFullYear();

    let bdate=birthDate.getDate();
    let bmonth=birthDate.getMonth()+1;
    let byear=birthDate.getFullYear();

    let day=0;
    let months=0;
    let year=0;
    if(tdate<bdate){
        tdate=tdate+days(tmonth-1);
        tmonth-=1;
    }

    day=tdate-bdate;

    if(tmonth<bmonth){
        tyear-=1;
        tmonth+=12;
    }

    months=tmonth-bmonth;

    year=tyear-byear;

    result.style.visibility="visible";
    container[0].style.visibility='hidden';
    console.log(age)
    age.innerText=`Your age is ${year} years, ${months} month, ${day} Days`;

})

function days(month,year){
    if(month==2){
        if(year%4==0 & year%100!=0){
            return 29;
        }
        return 28;
    }

    else if(month==1 || month==3||month==5|| month==7|| month==8 || month==10 || month==12){
        return 31
    }

    else{
        return 30;
    }
}
// result.style.visibility="visible"


