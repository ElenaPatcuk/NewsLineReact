import React, { Component }  from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props})=>{
    return(
        <button {...props} className={classes.myBtn}>
            {/* отображение текста на кнопке */}
            {children}
        </button>
    )
}

export default MyButton