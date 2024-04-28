import { FC, ForwardedRef, ReactElement } from "react";
import { Control, Controller, FieldValues  } from "react-hook-form";

interface InputFieldProps {
  onValueChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  control: Control<FieldValues>;
  defaultValue?: string;
  rules?: Object;
  disabled?: boolean;
  labelText?: string;
  inputType: string;
  name: string;
  placeholder?: string;
  formInWidth?: string;
  iconPos?: string;
  icon?: string;
  extClass?: string;
  maxLength?: number;
  applyPattern?: boolean;
}

const InputField: FC<InputFieldProps> = ({
  onValueChange,
  value,
  control,
  defaultValue = "",
  rules,
  disabled,
  labelText,
  inputType,
  name,
  placeholder,
  formInWidth,
  iconPos,
  icon,
  extClass,
  maxLength,
  applyPattern,
}): ReactElement => {
  return (
    <Controller
      control={control}
      rules={rules}
      defaultValue={defaultValue !== undefined ? defaultValue : ""}
      name={name}
      render={({ field, fieldState: { error } }) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value;
          if (applyPattern && !/^[0-9]*$/.test(value)) {
            return;
          }
          field?.onChange(event);
          onValueChange && onValueChange(event);
        };

        return (
          <div className={`form-in ${formInWidth ? formInWidth : ""} ${error ? "f-error" : ""}`}>
            {labelText && <label className="form-label">{labelText}</label>}

            <div className={`f-in w-100  ${iconPos ? `${iconPos}-icon` : ""}`}>
              {inputType === "number" ? (
                <input
                  {...field}
                  type={inputType}
                  placeholder={placeholder}
                  className={`form-control ${extClass}`}
                  name={name}
                  ref={field.ref as ForwardedRef<HTMLInputElement>}
                  maxLength={maxLength}
                  onChange={handleChange}
                />
              ) : (
                <>
                  {!value && (
                    <input
                      {...field}
                      type={inputType}
                      placeholder={placeholder}
                      className={`form-control ${extClass}`}
                      name={name}
                      ref={field.ref as ForwardedRef<HTMLInputElement>}
                      maxLength={maxLength}
                      onChange={handleChange}
                      disabled={disabled}
                    />
                  )}
                </>
              )}
             

              {icon ? <span className={`icon ${icon}-icon`}></span> : null}
            </div>
            {error ? <p className="error d-flex align-center">{error?.message}</p> : null}
            
          </div>
        );
      }}
    />
  );
};

export default InputField;
