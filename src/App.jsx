import { useState } from "react";
//eslint-disable-next-line
import { motion } from "motion/react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppProvider from "./context/AppProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppProvider>
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <motion.img
              initial={{ scale: 0 }} // Start at scale 0
              animate={{
                scale: [1, 2, 1], // Scale from 1 to 2 and back to 1
              }}
              transition={{
                duration: 1, // Duration of one cycle
                repeat: Infinity, // Repeat indefinitely
                delay: 1, // Delay before the scaling animation starts
                ease: "easeInOut", // Smooth easing
                times: [0.25, 0.75, 1], // Keyframe timing for the scale array
              }}
              src={reactLogo}
              className=""
              alt="React logo"
            />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button
            className=" bg-red-500 text-blue-800"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    </AppProvider>
  );
}

export default App;
