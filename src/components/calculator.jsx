import React,{useState} from 'react';

function Calculator(){
    /*declaring state */
    const[number, setNumber] = useState("")

    //handle click
    const handleClick=(e)=>{
        setNumber(number.concat(e.target.value))
        console.log(e.target.value)
    }
    //handle clear- to clear the screen whenever we click the ac button
    const handleClear=()=>{
        setNumber("")
    }

    //handle slice- allows us to go back by one digit if we want to edit our input value
    const handleSlice=()=>{
        setNumber(number.slice(0,-1))
    }

    //Handle Equal - to allows us display the correct answer when we click on the equal button
    const handleEqual=()=>{
        try{
            setNumber(eval(number).toString())
        }catch(error){
            setNumber("Error")
        }
    }

    return (
        <React.Fragment>
        <section>
            <div className="bg-gray-900 w-96 h-screen mx-auto rounded-lg overflow-hidden mt-10">
              {/*Screen*/}
             <div className=" w-full h-24 " >
                <input type="text" value={number} placeholder="0" className="w-full h-full border-8 border-gray-900 
                 text-4xl text-right pr-5 "/>
             </div>
             <div className="w-20 border-2 border-gray-50 rounded-full text-lg text-white text-center mx-4 my-4">CASIO</div>

               {/*Keypad*/}
               <div className="grid grid-cols-4 gap-2 mt-10 mx-3">
                <button onClick={handleClear} className="text-gray-500 w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow">AC</button>
                <button onClick={handleSlice} className="text-gray-500 w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow">C</button>
                <button value="/" onClick={handleClick} className="text-gray-500 w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow">/</button>
                <button value="+" onClick={handleClick} className="text-gray-500 w-20 h-42 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2">+</button>

                <button value="9" onClick={handleClick} className="text-white w-20 h-20 bg-indigo-400 rounded-lg font-bold text-3xl flex justify-center items-center shadow">9</button>
                <button value="8" onClick={handleClick} className="text-white w-20 h-20 bg-indigo-400 rounded-lg font-bold text-3xl flex justify-center items-center shadow">8</button>
                <button value="7" onClick={handleClick} className="text-white w-20 h-20 bg-indigo-400 rounded-lg font-bold text-3xl flex justify-center items-center shadow">7</button>


                <button value="4" onClick={handleClick} className="text-white w-20 h-20 bg-indigo-400 rounded-lg font-bold text-3xl flex justify-center items-center shadow">4</button>
                <button value="5" onClick={handleClick} className="text-white w-20 h-20 bg-indigo-400 rounded-lg font-bold text-3xl flex justify-center items-center shadow">5</button>
                <button value="6" onClick={handleClick} className="text-white w-20 h-20 bg-indigo-400 rounded-lg font-bold text-3xl flex justify-center items-center shadow">6</button>
                <button value="-" onClick={handleClick} className="text-gray-500 w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow">-</button>


                <button value="1" onClick={handleClick} className="text-white w-20 h-20 bg-indigo-400 rounded-lg font-bold text-3xl flex justify-center items-center shadow">1</button>
                <button value="2" onClick={handleClick} className="text-white w-20 h-20 bg-indigo-400 rounded-lg font-bold text-3xl flex justify-center items-center shadow">2</button>
                <button value="3" onClick={handleClick} className="text-white w-20 h-20 bg-indigo-400 rounded-lg font-bold text-3xl flex justify-center items-center shadow">3</button>
                <button value="*" onClick={handleClick} className="text-gray-500 w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow">*</button>


                <button value="." onClick={handleClick} className="text-gray-500 w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow">.</button>
                <button value="0" onClick={handleClick} className="text-white w-20 h-20 bg-indigo-400 rounded-lg font-bold text-3xl flex justify-center items-center shadow">0</button>
                <button onClick={handleEqual} className="text-gray-500 w-42 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2">=</button>
               
           </div>
            </div>
          


         </section>
        </React.Fragment>
    )
}

export default Calculator;