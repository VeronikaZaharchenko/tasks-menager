import React from 'react';
import styles from './Form.module.scss'
import {formToggle, IForm} from "../../store/slices/authorization-slice/types";
import FormButton from "../form-button/FormButton";
import FormInput from "../form-input/FormInput";
import {onSubmit, onToggleForm} from "../../utils/form";
import {Dispatch} from "../../store/store";
import {toggle} from "../../store/slices/authorization-slice/authorization-slice";

interface IProps{
    typeForm:IForm,
    login:string,
    password:string,
    error:string
}
const Form:React.FC<IProps> = ({typeForm,login,password,error}) => {
    const dispatch=Dispatch()

    return <form className={styles.form}>
        {typeForm === formToggle.EXIT ? <FormButton
                onClick={e=>onSubmit(formToggle.EXIT,dispatch,e)} text='Выйти'/> :
            typeForm === formToggle.SIGN_UP?
                <>
            <h2 className={styles.title}>Регистрация</h2>
    <div className={styles.wrapper}>
        <FormInput value={login} type='text'/>
    </div>
    <div className={styles.wrapper}>
        <FormInput value={password} type='password'/>
    </div>
    <div className={styles.wrapper}>
        <FormButton onClick={e=>onSubmit(formToggle.SIGN_IN,dispatch,e)} text='Зарегистироваться'/>
    </div>
    <button className={styles.button} onClick={e=>onToggleForm(formToggle.SIGN_IN, dispatch,e)}>Войти?</button></>:
                <>
                    <h2 className={styles.title}>Вход</h2>
                    <div className={styles.wrapper}>
                        <FormInput value={login} type='text'/>
                    </div>
                    <div className={styles.wrapper}>
                        <FormInput value={password} type='password'/>
                    </div>
                    <div className={styles.wrapper}>
                        <FormButton onClick={e=>onSubmit(formToggle.SIGN_UP,dispatch,e)} text='Войти'/>
                    </div>
                    <button className={styles.button} onClick={e=>onToggleForm(formToggle.SIGN_UP, dispatch,e)}>Зарегистрироваться?</button></>
}
</form>
};

export default Form;