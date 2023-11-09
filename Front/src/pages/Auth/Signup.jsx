import {Link, useNavigate} from 'react-router-dom'
// import Input from "../../components/ui/Input";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import AuthImageContainer from "../../components/ui/AuthImageContainer";
import {useForm} from "react-hook-form";
import {EMAIL_REGEX} from "../../data/Auth/authData";
import useSignupUser from "../../services/signupUser";
import React, { useState} from "react";
import { useRef } from "react";
import useVerifyEmail from "../../services/verifyEmail";
import useConfrimMail from "../../services/confirmEmail";
import {useQueries} from "@tanstack/react-query";
import axios from "axios";
const Signup = () => {
    const navigate = useNavigate()
    const { data, isLoading, error, mutateAsync } = useSignupUser()
    const [email, setEmail] =useState(0)
    const { error: sendError, data: sendMail, mutateAsync: mutateAsyncVerifyMail } = useVerifyEmail()
    const { data: confrimMail, mutateAsync: mutateAsyncConfrimMail } = useConfrimMail()
    const [emailValue, setEmailValue] = useState(""); // 이메일 값 상태 추가
    const [isOpen, setIsOpen] = useState(false)


    const [postsQuery, usersQuery] = useQueries({
        queries: [
            {
                queryKey: ['posts'],
                queryFn: () =>
                    axios
                        .post('http://localhost:8000/auth/signup')
                        .then((res) => res.data),
            },

            {
                queryKey: ['users'],
                queryFn: () =>
                    axios
                        .post('http://localhost:8000/api/auth/send/email')
                        .then((res) => res.data),
            },
        ],
    });


    // const formRef = useRef()
    // console.log("data:!" , data)
    //
    // const submitHandler = async (event) => {
    //     event.preventDefault();
    //     const email =  formRef.current.myInput.value;
    //     const userInput ={
    //         email
    //     }
    //     console.log("data:", userInput)
    //     if(userInput) {
    //         mutateAsyncVerifyMail(userInput)
    //         setIsOpen(true)
    //         formRef.current.reset();
    //         alert("Please confirm your email");
    //     }
    //
    //
    //
    // }

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        // setError,
        // clearErrors,
        formState: { isSubmitting, errors, isDirty}
    } = useForm()


    const onSubmit_2 = handleSubmit((data) => {
        const userInput = {
            email: data.email,
            username: data.name,
            password: data.password
        }
        console.log("____",userInput)
        mutateAsync(userInput)
    });

    const onSubmit_1 = handleSubmit((data) => {
        const { email } = data
        console.log("data+++++++++++++++++++++", email)
        alert("confrim email")
        mutateAsyncVerifyMail(email)
        setIsOpen(true)
    });

    //
    // if (postsQuery.isLoading) return 'Loading Posts...';
    // if (usersQuery.isLoading) return 'Loading Users...';



    // const mailSubmit = async (values) => {
    //     await mutateAsyncVerifyMail(values)
    // }

    // const confrimSubmit = async  (e) => {
    //     e.preventDefault()
    //     const confrimEmail=  formRef.current.myInput.value;
    //     const code =  formRef.current.code.value;
    //     const userInput = {
    //         email: confrimEmail, code
    //     }
    //     console.log("value:",userInput )
    //     await  mutateAsyncConfrimMail(userInput)
    //     alert("success")
    //     formRef.current.valueOf().reset()
    // }
    //
    //
    //
    //
    // const onSubmit = async (e) => {
    //     e.preventDefault()
    //     const {email, name, password, confirmPassword } = values
    //     const email =  formRef.current.myInput.value;
    //     const password =  formRef.current.password.value;
    //     const name =  formRef.current.name.value;
    //     const confirmPassword =  formRef.current.confrimpassword.value;
    //     if (password !== confirmPassword) {
    //         alert("password dzo not match")
    //         return
    //     }
    //     const userInput = {
    //         email, name, password,
    //         provider: "local"
    //     }
    //     console.log("+++++++++++++++", userInput)
    //
    //     await mutateAsync(userInput)
    //     formRef.current.reset();
    //     alert("Singup!")
    //     navigate("/login")
    // }
    //
    // if(sendError) {
    //     alert(sendError)
    // }


    return (
        <section className="m-auto grid min-h-[calc(100vh-65px)] w-full grid-cols-10">
            <div className="col-span-10 flex h-full w-full grow flex-col items-center justify-center bg-white shadow-slate-50 drop-shadow-md lg:col-span-4">
                <div className="mb-14 flex-col items-center text-center">
                    <h2 className="mb-2 text-3xl font-bold">Get started</h2>
                    <p className="text-slate-500">Create your account now.</p>
                </div>
                {postsQuery.data?.length}
                <div className="flex flex-col items-center" >
                    <form className="flex w-full max-w-sm flex-col">
                        <input
                            {...register('email', {
                                required: 'Please provide an email.'
                            })}
                            type="email"
                            className="mb-3"
                            placeholder={"Email Address"}
                        />
                        {/*<Input*/}
                        {/*    {...register("email")}*/}
                        {/*    name="myInput"*/}
                        {/*    error={errors.email?.message}*/}
                        {/*    labelText="Email"*/}
                        {/*    type="email"*/}
                        {/*    className="mb-3"*/}
                        {/*    autofocus*/}
                        {/*    autocomplete="on"*/}
                        {/*/>*/}
                        {usersQuery.data?.length}
                        {isOpen ? (
                            <input
                                {...register('code', {
                                    required: 'Please provide an email.'
                                })}
                                type="code"
                                className="mb-3"
                                placeholder={"Code"}
                            />
                        ) : null}
                        <Button
                            onClick={onSubmit_1}
                            // name="submit1"
                            // variant="contained"
                            text="email send"
                            // disabled={isSubmitting}
                            className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600 mb-2"
                            // type="submit"

                        />
                        {/*{isOpen ? (*/}
                        {/*    <>*/}
                        {/*        <Input*/}
                        {/*            {...register('code', )}*/}
                        {/*            name="code"*/}
                        {/*            labelText="Code"*/}
                        {/*            type="text"*/}
                        {/*            className="mb-3"*/}
                        {/*            autofocus*/}
                        {/*            autocomplete="on"*/}
                        {/*        />*/}

                        {/*        <Button*/}
                        {/*            text="Confrim"*/}
                        {/*            className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600 mb-2"*/}
                        {/*            onClick={confrimSubmit}*/}
                        {/*        />*/}
                        {/*    </>*/}
                        {/*): null}*/}

                        <input
                            {...register('name')}
                            type="text"
                            className="mb-3"
                            placeholder={"User name"}
                        />

                        <input
                            {...register('password')}
                            type="password"
                            className="mb-3"
                            placeholder={"password"}
                        />


                        {/*<Input*/}
                        {/*    {...register('name')}*/}
                        {/*    name="name"*/}
                        {/*    error={errors.name?.message}*/}
                        {/*    // ariaInvalid={isDirty}*/}
                        {/*    labelText="Name"*/}
                        {/*    type="text"*/}
                        {/*    className="mb-3 mt-1"*/}
                        {/*    autocomplete="on"*/}
                        {/*/>*/}

                        {/*<Input*/}
                        {/*    {...register('password')}*/}
                        {/*    name="password"*/}
                        {/*    error={errors.password?.message}*/}
                        {/*    // ariaInvalid={isDirty}*/}
                        {/*    labelText="Password"*/}
                        {/*    type="password"*/}
                        {/*    className="mb-3"*/}
                        {/*    autocomplete="off"*/}
                        {/*/>*/}

                        <Input
                            {...register('confirmPassword')}
                            name="confrimpassword"
                            error={errors.confirmPassword?.message}
                            // ariaInvalid={isDirty}
                            labelText="Confirm Password"
                            type="password"
                            className="mb-3"
                            autocomplete="off"
                        />


                        <Button
                            text="Create account"
                            disabled={isSubmitting}
                            className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600"
                            type={"submit"}
                            onClick={onSubmit_2}
                        />
                    </form>

                    <div className="mt-10 text-slate-500">
                        Already have an account?
                        <Link to="/login" className="p-2 font-semibold text-violet-500">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
            <AuthImageContainer
                image={"/images/register.webp"}
                firstText={"unlock the Shopping world"}
                secondText={"Enjoy Shopping"}
            />
        </section>
    );
};

export default Signup;