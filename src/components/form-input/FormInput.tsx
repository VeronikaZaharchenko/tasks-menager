import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './FormInput.module.scss';
import { changeLogin, changePassword } from '../../store/slices/authorization-slice/authorization-slice';

interface IProps {
    value: string;
    type: string;
}

const FormInput: React.FC<IProps> = ({ value, type }) => {
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (type === 'text') {
            dispatch(changeLogin(newValue));
        } else {
            dispatch(changePassword(newValue));
        }
    };

    return (
        <input
            className={styles.input}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={type === 'text' ? 'Логин' : 'Пароль'}
        />
    );
};

export default FormInput;








