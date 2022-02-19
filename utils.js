const findElement = (selector, node = document) => {
	return node.querySelector(selector);
};

function timerFunc() {
    setInterval(()=>{
        if(sekund == 00){
            if(minut == 0 && sekund == 0){
                
                alert('Vaqt tugadi')
                clearInterval(timer)
            }else{
                sekund = 59;
                minut -= 1
            }
            
            
            
        }else{
            sekund -= 1
        }
        renderTimer(minut,sekund)
        
    }, 1000)
}