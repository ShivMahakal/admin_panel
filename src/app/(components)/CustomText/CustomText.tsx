import React from 'react'

const CustomText = (props: CustomTextProps) => {

    const { title, color, size } = props;
    return (
        <div style={{color, fontSize:size }}>{title}</div>
    )
}

export default CustomText