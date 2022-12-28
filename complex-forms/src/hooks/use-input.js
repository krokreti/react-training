import { useState } from "react";

const useInput = (validatevalue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validatevalue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    }
    
    const valueBlurHandler = event => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
}

export default useInput;