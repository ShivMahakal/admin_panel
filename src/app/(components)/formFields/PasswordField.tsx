import { FC, useState } from "react";
import { Controller, FieldValues } from "react-hook-form";

interface PasswordFieldProps {
  control: any;
  defaultValue?: string;
  rules?: any;
  disabled?: boolean;
  labelText?: string;
  inputType: string;
  name: string;
  placeholder?: string;
  formInWidth?: string;
  iconPos: string;
  icon?: string;
  value?: string;
}

const PasswordField: FC<PasswordFieldProps> = ({
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
  value = "",
}) => {
  const [eyeIcon, setEyeIcon] = useState(false);

  return (
    <>
      <Controller
        control={control}
        rules={rules}
        defaultValue={defaultValue !== undefined ? defaultValue : ""}
        name={name}
        render={({ field, fieldState: { error } }) => {
          return (
            <div className={`form-in ${formInWidth}`}>
              {labelText && <label className="form-label">{labelText}</label>}

              <div className={`f-in w-100 ${iconPos}-icon`}>
                <input
                  {...field}
                  type={eyeIcon ? "text" : "password"}
                  placeholder={placeholder}
                  className="form-control"
                  name={name}
                />

                {icon && (
                  <span
                    className={`icon ${icon}-icon ${
                      eyeIcon ? "open" : ""
                    }`}
                    onClick={() => setEyeIcon((prev) => !prev)}
                  ></span>
                )}
              </div>

              {error && (
                <p className="error d-flex align-center">{error.message}</p>
              )}
            </div>
          );
        }}
      />
    </>
  );
};

export default PasswordField;
