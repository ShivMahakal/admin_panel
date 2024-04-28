import { FC, useState } from "react";
import { Controller ,FieldValues} from "react-hook-form";

interface CheckBoxCodeProps {
  name: string;
  innerLabel?: string;
  control: any;
  defaultValue?: boolean;
  rules?: any;
  onChange?: (value: boolean) => void;
  setValue: (name: string, value: boolean) => void;
}

const  CheckBoxCode:FC<CheckBoxCodeProps> = ({
  name,
  innerLabel,
  control,
  defaultValue,
  rules,
  onChange,
  setValue
}) => {
  const [isChecked, setIsChecked] = useState(defaultValue || false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setValue(name, newValue);

    if (onChange) {
      onChange(newValue); // Pass the checkbox value to the onChange handler
    }
  };
  
  console.log(isChecked,"isChecked")

  return (
    <>
      <Controller
                control={control}
                rules={rules} 
                defaultValue={defaultValue !== undefined ? defaultValue : ""}
                name={name}
                render={({ field  ,fieldState: { error }}) => {
                    return (
                        <div className="form-check">
                        <input  
                        {...field}
                         type='checkbox' 
                         className="form-check-input" 
                         name={name}  />
                        {
                            innerLabel ? <span className="form-check-label">{innerLabel}</span> : null
                        }
                        {error ? (
                      <p className="error d-flex align-items-center">
                        <span className="icon info-icon"></span> {error?.message}
                      </p>
                    ) : null}
            </div>
          );
        }}
      />
    </>
  );
}
export default CheckBoxCode;
