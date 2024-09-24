// import { useCallback, useState } from "react";

// const Length = () => {

//     const [length, setLength] = useState(8);
//     const [numberAllowed, setNumberAllowed] = useState(false); 
//     const [charAllowed, setCharAllowed] = useState(false); 
//     const [password, setPassword] = useState("")
//     const passwordGenerator = useCallback(() =>{
//         let pass = "";
//         let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 

//         if(numberAllowed) str += "0123456789";
//         if(charAllowed) str += "!@#$%^&*()-_=+[]{}|;:',.<>?/";
        
//         for(let i = 1; i <= array.length; i++){
//             let char = Math.floor(Math.random() * str.length + 1)
//         }
//         psss = str.charAt(char)
//     }, [length, numberAllowed, charAllowed, setPassword]); 

//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Length;



import React, { useRef, useState } from 'react';

const Counter = () => {
  const renderCount = useRef(0); // রেন্ডার কাউন্ট সংরক্ষণ করবে
  const [count, setCount] = useState(0);

  renderCount.current += 1; // কম্পোনেন্ট প্রতি রেন্ডারে ১ বৃদ্ধি করবে

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>This component has rendered {renderCount.current} times.</p>
    </div>
  );
};

export default Counter;
