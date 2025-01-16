
import styles from './App.module.css'
// import 'bootstrap' from 'bootstrap.'
import Display from './components/Display'
import Buttons from './components/Buttons'
import { useState } from 'react'
function App() {

    let [Result,setResult]=useState("0");
    const  allbut=(event)=>{
        if(event==='C'){
            setResult('0');
        }
        else if (event === '='){
            const mainResult = eval(Result);
            setResult(mainResult);
        }
        else{
            if (Result==='0'){
            const NewDisplay =event;
            setResult(NewDisplay);
            }
            else{
                const NewDisplay = Result + event;
                setResult(NewDisplay);
            }
            
            
            
        }

    };



return <>

<div className={styles.Hello}>
<div className={styles.Cals}>



<Display DisplayValue={Result}></Display>
<Buttons onButtonClick={allbut}></Buttons>
{/* <p>My First React simple project for understanding</p> */}


</div>
</div>
</>
}

export default App
