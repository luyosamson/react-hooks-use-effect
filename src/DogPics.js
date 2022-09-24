import React, { useState, useEffect } from "react";

// WARNING: this useEffect will run in an infinite loop!
// to fix, pass an empty array as the second argument for useEffect
function DogPics() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        console.log("setState");
        setImages(data.message);
      });
  },[]);

  console.log("render");

  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image} alt="dog" />
      ))}
    </div>
  );
}

export default DogPics;

// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     document.title = text;
//   }, [text]);

//   useEffect(() => {
//     setTimeout(() => setCount(0), 5000);
//   }, []);

//   console.log("Component rendering");

//   return (
//     <div>
//       <button onClick={() => setCount((count) => count + 1)}>
//         I've been clicked {count} times
//       </button>
//       <input
//         type="text"
//         placeholder="Type away..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </div>
//   );
// }