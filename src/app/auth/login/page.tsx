"use client"
import CheckBoxCode from '@/app/(components)/formFields/CheckboxFieldCode';
import CheckboxName from '@/app/(components)/formFields/CheckboxName';
import InputField from '@/app/(components)/formFields/InputField'
import PasswordField from '@/app/(components)/formFields/PasswordField';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';
import { setUserSignUp } from '../../../../redux/slices/UserSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const LoginPage = () => {
  const dispatch = useDispatch()
  const {userSignUp} = useSelector((state:any) => state.user)
    const { handleSubmit, control, setValue } = useForm();

    type FormValues = {
        [key: string]: string;
    };

    const onSubmit = (values: FormValues) => {
        console.log(values, "HeyValue");
        dispatch(setUserSignUp(values))
    };

    return (
        <div className='inner-form '>
            <h3 className='fs-40 fw-600 text-dark-color'>Welcome to the App</h3>
            <p className='fs-20 text-gray-300'>Sign in to continue</p>

            <div className='on-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-in w-100'>
                        <InputField control={control} 
                        labelText={"Username"}
                        name="name"
                        inputType="text"
                        placeholder={"Enter your username"}
                        formInWidth="w-100"
                        rules={{
                            required: {
                                value: true,
                                message: "Please enter your username",
                            }
                        }}
                        />
                    </div>
                    <PasswordField
                    control={control}
                    labelText={"Password"}
                    name="password"
                    inputType="password"
                    placeholder={"Enter your password"}
                    formInWidth="w-100"
                    icon="eye"
                    iconPos="right"
                    rules={{
                        required: {
                            value: true,
                            message: "Please enter your password",
                        }
                    }}
                    />
                    <p className='forgot-password fs-14 fw-400 mt-12 text-right'>
                        <Link href='/auth/forgot-password'>
                            Forgot Password ?
                            </Link>
                    </p>
                    <div className='form-terms'>
                    <div className="by-agree form-check">
                <label className='lb-agree d-flex'>
                  <CheckBoxCode
                    control={control}
                    name="terms"
                    innerLabel={" "}
                    setValue={setValue}
                    rules={{
                      required: {
                        value: true,
                        message: "Please accept terms and conditions",
                      },
                    }}
                  />
                  <CheckboxName/>
                </label>

                <label className='lb-agree d-flex mt-15'>
                  <CheckBoxCode
                    control={control}
                    name="company"
                    innerLabel={" "}
                    setValue={setValue}
                    rules={{
                      required: {
                        value: true,
                        message: "Please accept company policy",
                      },
                    }}
                  />
                 <CheckboxName />
                </label>
              </div>
                    </div>
                    <button type='submit' className='w-100 btn mt-24 btn-primary mt-24 text-white'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
