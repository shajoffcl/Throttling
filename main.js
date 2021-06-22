
const displayElem=document.getElementById("counter-display");
const incrementButton=document.getElementById("increment");
const decrementButton=document.getElementById("decrement");

let count=0;
const handleClick=(action)=>{
    console.log("handleClick")
    switch(action){
        case "INCREMENT":
            count++;
            displayElem.innerText=count;
            break;
        case "DECREMENT":
            count--;
            displayElem.innerText=count;
            break;
        default: return;
    }
}

let intervalId;
const throttle=(fun, interval)=>{
        return (...arg)=>{
            if(intervalId){
                return
            }
            fun.apply(this, arg)
            intervalId=setTimeout(()=>intervalId=undefined, interval);
        }
}

incrementButton.addEventListener("click", ()=>throttle(handleClick, 3000)("INCREMENT"));
decrementButton.addEventListener("click", ()=>throttle(handleClick, 3000)("DECREMENT"));
displayElem.innerText=count;