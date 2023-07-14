import React, {memo} from 'react';

export type UniversalButtonPropsType={
    callback:()=>void
    nameButton:string
}



export const UniversalButton = memo((props:UniversalButtonPropsType) => {
    let{callback,nameButton}=props
    const onClickHandler=()=>{
        callback()
    }
    return (
        <button onClick={onClickHandler}>{nameButton}</button>
    );
});

