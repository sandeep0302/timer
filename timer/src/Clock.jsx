import React, { useEffect, useState } from 'react'

function Clock({time,setTime}){
  useEffect(()=>{
    const timer = setInterval(() => {
      let h = new Date().getHours();
      let m = new Date().getMinutes();
      let s = new Date().getSeconds();
      if (h > 12) {
        h -= 12;
      }
      if (h == 0) {
        h = 12;
      }
      let clock = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
       setTime(clock);
    },1000)
    return ()=> clearInterval(timer);
  },[]);

return (
  <><div style={{fontFamily:"Cursive",fontSize:25,fontWeight:500,marginLeft:500}}>Clock
    <div style={{display:"block",borderRadius:10,color:"grey",marginLeft:-15}}>
    {time}
    </div>
  </div>
    
  </>

)
}
export default Clock