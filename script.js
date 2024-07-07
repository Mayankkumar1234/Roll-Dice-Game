
let dice1=document.querySelector(".dice1")
let dice2=document.querySelector(".dice2")
let dice3=document.querySelector(".dice3")
let num;

document.querySelector("button").addEventListener("click",()=>{
    rollDice();

})

function rollDice(){

    if(!dice1.classList.contains('animation'))
      dice1.classList.add('animation')

    if(!dice2.classList.contains('animation'))
        dice2.classList.add('animation')
 
    if(!dice3.classList.contains('animation'))
        dice3.classList.add('animation')

    setTimeout(() => {
        
        let d1=ranNum();
        let d2=ranNum();
        let d3=ranNum();

        document.querySelector(".dice1").src=`imgs/dice-${d1}.png`
        document.querySelector(".dice2").src=`imgs/dice-${d2}.png`
        document.querySelector(".dice3").src=`imgs/dice-${d3}.png`

        if(dice1.classList.contains('animation'))
            dice1.classList.remove('animation')
      
          if(dice2.classList.contains('animation'))
              dice2.classList.remove('animation')
       
          if(dice3.classList.contains('animation'))
              dice3.classList.remove('animation')

          
    findMax(d1,d2,d3);

    }, 2000);

}



function ranNum(){
   
   return  Math.ceil(Math.random()*6);  
}

function findMax(A,B,C){

    var arr=[A,B,C];
  var numm= arr.sort((a,b)=>a-b).reverse();
    console.log(arr[0]);
    console.log(arr[1]);
   
    setTimeout(function(){

        if(arr[0]===arr[1]){
        
            document.querySelector("#winner").innerHTML="Match has draw"
     dice1.style.backgroundColor="transparent"
      dice2.style.backgroundColor="transparent"
       dice3.style.backgroundColor="transparent"
        }
    },100)
  
    
    randColor(A,B,C,arr)
}

  function randColor(A,B,C,arr){

     console.log(arr)

    if(arr[0]===A){
        // dice1.innerHTML="A has won the match"
       document.querySelector("#winner").innerHTML="A has won the match"
    //    dice1.style.backgroundColor="green"
    num1=1;
    
    }
     else if(arr[0]===B){
        document.querySelector("#winner").innerHTML="B has won the match"
        num2=2;
        // dice2.style.backgroundColor="green"
        
       
     }
     else{
         document.querySelector("#winner").innerHTML="C has won the match"
        // dice3.style.backgroundColor="green"
        num3=3;
      
       
        }

    // document.querySelector(`.dice${num1}`).style.backgroundColor="green"
    // document.querySelector(`.dice${num2}`).style.backgroundColor="green"
    // document.querySelector(`.dice${num3}`).style.backgroundColor="green"
   
  }