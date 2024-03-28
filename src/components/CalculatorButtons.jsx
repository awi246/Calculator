/* eslint-disable react/prop-types */
import styles from ".././App.module.css";
const CalculatorButoons = ({ buttonName, buttonOperator , handleChange}) => {
  return (
    <>
      <button className={styles.button} onClick={handleChange} value={buttonName||buttonOperator}>{buttonName || buttonOperator}</button>
    </>
  );
};
export default CalculatorButoons;
