let boxes = document.querySelectorAll(".box");

let resetbtn= document.querySelector("#reset");
let newgame= document.querySelector(".newgame");
let container = document.querySelector(".container");
let msg= document.querySelector(".msg");

let turn = true;
let draw=true;

let count =0;
const winPattern =[

    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]




];

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    container.classList.remove("hide");
    disableboxes();
  };

const showWinner=(win)=>{

    msg.innerText=(`Conragulation, Winner is ${win}`);
    container.classList.remove("hide");

};

const reset=()=>{
    turn=true;
   enableboxes();
   container.classList.add("hide");
   count = 0;
   
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

};


const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

};


boxes.forEach((box)=>{

    box.addEventListener("click",()=>{

        if(turn){
            box.innerText="O";
            box.style.color="black";
            turn=false;

            
            
        }
        else{
            
            box.innerText="X";
            turn=true;
        }

        box.disabled=true;
        count++;
        
       let iswinner = checkwinner();
       if(count===9 && !iswinner){
        gameDraw();

       }
       

    });
    
});

const checkwinner=()=>{

    
    
    for(let pattern of winPattern){
        
       let pos1val= boxes[pattern[0]].innerText;
       let pos2val= boxes[pattern[1]].innerText;
       let pos3val= boxes[pattern[2]].innerText;

       if(pos1val!="" && pos2val!="" &&  pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log('Winner: ',pos1val);
            disableboxes(); 
          showWinner(pos1val);
          
           
        }  
       }
       
       
       }
       

    


   




};
resetbtn.addEventListener("click", reset);
newgame.addEventListener("click", reset);




