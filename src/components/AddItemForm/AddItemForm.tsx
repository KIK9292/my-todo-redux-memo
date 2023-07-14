import React, {ChangeEvent, useState, KeyboardEvent, memo, useCallback} from 'react';

export type AddItemFormPropsType={
    callback:(value:string)=>void
}


export const AddItemForm = memo((props:AddItemFormPropsType) => {
let{callback}=props
    const[value,setValue]=useState<string>("")
    const [error,setError]=useState<string|null>(null)

    const onChangeHandler= (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
        setError(null)
    }

    const onClickHandler=useCallback(()=>{
        if(value.trim()!==""){
            callback(value.trim())
            setValue("")
            setError(null)
        }
        else{
            setError("No corrected")
        }
    },[callback,value])
    const onKeyHandler=useCallback((e:KeyboardEvent<HTMLInputElement>)=>{
        if (e.key==="Enter"){
            onClickHandler()
        }

    },[onClickHandler])
    return (
        <div>
            <input type="text" onChange={onChangeHandler} onKeyDown={onKeyHandler} value={value}/>
            <button onClick={onClickHandler}>ADD</button>
            {error && <span>{error}</span>}
        </div>
    );
});

