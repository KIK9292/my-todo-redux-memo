import React, {memo, useCallback} from 'react';

export type CheckBoxPropsType={
    callback:()=>void
    checkedStatus:boolean

}



export const CheckBox = memo((props:CheckBoxPropsType) => {
    let{callback,checkedStatus}=props
    const onClickHandler=useCallback(()=>{
        callback()
    },[callback])

    return (
        <input type="checkbox" checked={checkedStatus} onChange={onClickHandler}/>
    )
});

