import React from 'react'
import { CustomButtonProps } from './type'



const CustomButton = (props:CustomButtonProps) => {





   const {title,onClick} = props


   const buttonOnClick = () => {
    onClick("Hello world")
   }

  
    return (
     <div onClick={buttonOnClick}>
        {title}
     
     </div>
  )
}

export default CustomButton


export const CutstomButton1:React.FC<CustomButtonProps>= ({title,backgroundColor,onClick})=>{

    return (
        <div></div>
    )
}

