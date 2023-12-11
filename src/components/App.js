import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
    
        const [user1, setUser1] = useState("");
        const [user2, setUser2] = useState("");
        const [ans,setAns] = useState("")

        function clearInput(){
            setUser1("")
            setUser2("")
            setAns("")
        }

        function handleClick(){
            let len;
            let arr1 = user1.split("")
            let arr2 = user2.split("")

            for(let i=0;i<len;i++){
               if(arr1.indexOf(arr2[i])){
                arr2 = arr2.splice(i,1)
                arr1 = arr1.splice(i,1)
               }
            }  
            
            let total = arr1.length + arr2.length
            total = total%6;
            setAns(total)
        }

        return(
            <div id="main">
               <input type="text" data-testid="input1" placeholder="user1" value={user1} onChange={(e)=>setUser1(e.target.value)}/>
               <input type="text" data-testid="input2" placeholder="user2" value={user2} onChange={(e)=>setUser2(e.target.value)}/>
               <button onClick={handleClick} data-testid="calculate_relationship" type="submit">Calculate Relationship Future</button>
               <button data-testid="clear" onClick={clearInput}>Clear</button>
               {
                ans && <h3>{ans}</h3>
               }
            </div>
        )
    }



export default App;
