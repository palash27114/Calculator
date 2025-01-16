import React from 'react'
import styles from './Buttons.module.css'

const Buttons = ({onButtonClick}) => {

    const Butt=['C','1','2','3','4','5','6','7','8','9','0','+','*','-','/','='];




  return (
    <div className={styles.buttonss}>
       {Butt.map(pallu=> <button className={styles.ButtonText} onClick={() =>onButtonClick(pallu)}>{pallu}</button>)}
 
 
  </div>
  )
}

export default Buttons