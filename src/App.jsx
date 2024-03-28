// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import styles from "./App.module.css";
import CalculatorButoons from "./components/CalculatorButtons";
function App() {
  const buttonNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const buttonOperators = ["+", "-", "/", "*", "=", "C"];
  const [calVal, setCalVal] = useState("");
  const handleChange = (event) => {
    console.log(event.target.value);
    if(event.target.value==="C"){
      setCalVal("");

    }else if(event.target.value==="="){
      const result = eval(calVal)
      setCalVal(result);
    }else{
      const newValue = calVal+event.target.value;
      setCalVal(newValue);
    }
  };

  return (
    <center>
<div className={styles.calculator}>
      <input
        type="text"
        name=""
        className={styles.display}
        value={calVal}
        readOnly
      />
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => (
          <CalculatorButoons
            key={buttonName}
            buttonName={buttonName}
            handleChange={handleChange}
          />
        ))}
      </div>
      <div className={styles.buttonsContainer}>
        {buttonOperators.map((buttonOperator) => (
          <CalculatorButoons
            key={buttonOperator}
            buttonOperator={buttonOperator}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
    </center>
    
  );
}
export default App;
