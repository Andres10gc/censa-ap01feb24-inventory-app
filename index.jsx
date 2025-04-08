import styles from './index.module.css'
import { useState } from 'react'
export default function FormInput({
    label='',
    type = 'text',
    pwdButtonTitle = "Click para Mostrar/Ocultar costraseña",
    pwdIsVidibleContent='Ocultar',
    pwdIsNotVisibleContent='Mostrar',
    ...props
}) {
    conts [isVisible, setIsVisible] = useState(false)
    const hanleClick = () => {
    setIsVisible(oldValue => !oldValue)
}
    return (
        <label className={styles['form-input']}>
            {label !== '' && <span className= {styles['label']}>{label}</span>}
            <span className={styles['input-group']}>
            <input type={isVisible ? 'text' :type} {...props}></input>
            {type === 'password' &&
            <Button type='button'
            title={pwdButtonTitle}
        onClick={handleCick}>
        {isVisible ? pwdIsNotVisibleContent : pwdIsNotVisibleContent}
         </Button>
            }
            </span>
        </label>
    )
}
