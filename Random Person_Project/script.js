
const btn=document.querySelector('.btn');

const name=document.querySelector('.name');

const lastName=document.querySelector('.lastName');

const locationS=document.querySelector('.location');

const phone=document.querySelector('.phone');

const email=document.querySelector('.email');

const img=document.querySelector('.img');



btn.addEventListener('click', function ( ) {

    getPerson(getData);
    
});


function getPerson(cb) {


    url='https://randomuser.me/api/';


    const ajax=new XMLHttpRequest( );

    ajax.open('GET', url, true);

    ajax.onload=function ( ) {


        if (this.status==200) {

            cb(this.responseText, showData);
 
              } 


         else {

            console.log(this.statusText);
            
            
              }
        
    };


    ajax.onerror=function ( ) {

        console.log('Oops something wrong!');
        
        
    };

    ajax.send( );
    
};



function getData(datar, cb) {

    const data=JSON.parse(datar);

    // console.log(data);

    const {name:{first}, name:{last}, location:{street}, email, cell, picture:{large}}=data.results[0];

    cb(data,first, last, location, email, cell, large);
    
};


function showData(data,first, last, street, email, cell, large) {
    console.log(data);


    name.textContent=first;

    lastName.textContent=last;

    locationS.textContent=location;

    email.textContent=email;

    phone.textContent=cell;

    img.src=large;
    
    
};



