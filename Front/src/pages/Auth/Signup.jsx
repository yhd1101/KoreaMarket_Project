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
import axios from "axios";
//

// import React, {useState} from 'react';
// import Input from "../../components/ui/Input";
// import Button from "../../components/ui/Button";
// import AuthImageContainer from "../../components/ui/AuthImageContainer";
// import {Link, useNavigate} from "react-router-dom";
// import axios from "axios";
//
// const Signup = () => {
//     const navigate = useNavigate()
//     const [email, setEmail] = useState("")
//     const [name, setName] = useState("")
//     const [password, setPassword] = useState("")
//     const [code, setCode] = useState(0)
//     const [isOpen, setIsOpen] = useState(false)
//     const [confirmPassword, setConfirmPassword] = useState("")
//
//     const sendEmailHandler = async (e) => {
//         e.preventDefault()
//         try{
//             const userInput = {
//                 email
//             }
//             const {data, status} = await axios.post("http://localhost:8000/api/auth/send/email", userInput)
//             console.log("111111", data)
//             if ( data.statusCode === 200) {
//                 alert("confrim email")
//                 setIsOpen(true)
//             }
//
//         } catch (err) {
//             console.log(err)
//         }
//
//     }
//
//     const verifyEmailHandler = async (e) => {
//         e.preventDefault()
//
//         try{
//             const userInput = {
//                 email, code
//             }
//             const {data, status} = await axios.post("http://localhost:8000/api/auth/confirm/email", userInput)
//             if( data.statusCode === 200) {
//                 alert("verify")
//                 setIsOpen(false)
//             }
//         } catch (err) {
//             console.log(err)
//         }
//     }
//
//     const signupHandler = async (e) => {
//         e.preventDefault()
//         if (password !== confirmPassword) {
//             alert("password do not match")
//         }
//         const userInput = {
//             email, name, password, provider: "local"
//         }
//         const {data, status } = await axios.post("http://localhost:8000/api/auth/signup",userInput)
//         if(data.statusCode === 200) {
//             navigate("/login")
//         }
//         console.log("ddddd", userInput)
//     }
//
//
//     return (
//         <section className="m-auto grid min-h-[calc(100vh-65px)] w-full grid-cols-10">
//             <div className="col-span-10 flex h-full w-full grow flex-col items-center justify-center bg-white shadow-slate-50 drop-shadow-md lg:col-span-4">
//                 <div className="mb-14 flex-col items-center text-center">
//                     <h2 className="mb-2 text-3xl font-bold">Get started</h2>
//                     <p className="text-slate-500">Create your account now.</p>
//                 </div>
//                 <div className="flex flex-col items-center" >
//                     <form className="flex w-full max-w-sm flex-col">
//                         <Input
//                             labelText="Email"
//                             type="email"
//                             className="mb-3"
//                             autofocus
//                             autocomplete="on"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//
//                         <Button
//                             text="Send"
//                             type="submit"
//                             className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600 mb-2"
//                             onClick={sendEmailHandler}
//                         />
//                         {isOpen ? (
//                             <>
//                                 <Input
//                                     labelText="Code"
//                                     type="text"
//                                     className="mb-3"
//                                     autofocus
//                                     autocomplete="on"
//                                     value={code}
//                                     onChange={(e) => setCode(e.target.value)}
//                                 />
//
//                                 <Button
//                                     text="Verify"
//                                     className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600 mb-2"
//                                     onClick={verifyEmailHandler}
//                                 />
//                             </>
//                         ): null}
//
//                         <Input
//                             labelText="name"
//                             type="text"
//                             className="mb-3"
//                             autofocus
//                             autocomplete="on"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                         <Input
//                             // ariaInvalid={isDirty}
//                             labelText="Password"
//                             type="password"
//                             className="mb-3"
//                             autocomplete="off"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <Input
//                             // ariaInvalid={isDirty}
//                             labelText="Confirm Password"
//                             type="password"
//                             className="mb-3"
//                             autocomplete="off"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                         />
//                         <Button
//                             text="Create account"
//                             className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600"
//                             onClick={signupHandler}
//                             // type={"submit"}
//                         />
//                     </form>
//                     <div className="mt-10 text-slate-500">
//                         Already have an account?
//                         <Link to="/login" className="p-2 font-semibold text-violet-500">
//                             Log in
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//
//             <AuthImageContainer
//                 image={"/images/register.webp"}
//                 firstText={"unlock the Shopping world"}
//                 secondText={"Enjoy Shopping"}
//             />
//         </section>
//     );
// };
//
// export default Signup;

const Signup = () => {
    const navigate = useNavigate()
    const { data, isLoading, error, mutateAsync } = useSignupUser()
    // console.log("77777777777", data)
    const [email, setEmail] =useState(0)
    const { error: sendError, data: sendMail, mutateAsync: mutateAsyncVerifyMail } = useVerifyEmail()
    const { data: confrimMail, mutateAsync: mutateAsyncConfrimMail } = useConfrimMail()

    const formRef = useRef()

    const submitHandler = async (event) => {
        event.preventDefault();
        const email =  formRef.current.myInput.value;
        const userInput ={
            email
        }
        console.log("value:", email);
        mutateAsyncVerifyMail(userInput)
        formRef.current.reset();
        alert("Please confirm your email");
    }

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        // setError,
        // clearErrors,
        formState: { isSubmitting, errors, isDirty}
    } = useForm()

    // const mailSubmit = async (values) => {
    //     await mutateAsyncVerifyMail(values)
    // }

    const confrimSubmit = async (values, e) => {
        e.preventDefault()
        const event = formRef.current.myInput.value;
        const {confrimEmail, code } = values;
        const userInput = {
            email: confrimEmail, code
        }
        await  mutateAsyncConfrimMail(userInput)
        formRef.current.valueOf().reset()
    }




    const onSubmit = async (values) => {

        const {email, name, password, confirmPassword } = values
        if (password !== confirmPassword) {
            alert("password dzo not match")
            return
        }
        const userInput = {
            email, name, password,
            provider: "local"
        }
        console.log("+++++++++++++++", userInput)
        await mutateAsync(userInput)
        navigate("/login")
    }

    if(sendError) {
        alert(sendError)
    }


    // 전체 동의 체크박스 선택/해제 시 모든 항목 체크/해제 함수

    // const handleAllAgreementChange = (e) => {
    //     const isChecked = e.target.checked;
    //     setValue('allAgreement', isChecked);
    //
    //     // 모든 항목 체크/해제
    //     const agreementFieldNames = ['agreement1', 'agreement2', 'agreement3','agreement4','agreement5']; // 필요한 약관 항목 이름 추가
    //     agreementFieldNames.forEach((fieldName) => {
    //         setValue(fieldName, isChecked);
    //     });
    // };

    // const onSubmit = handleSubmit((data) => {
    //     console.log(data)
    // })
    //
    // useEffect(() => {
    //     // setUsers(userData)
    // }, [])
    return (
        <section className="m-auto grid min-h-[calc(100vh-65px)] w-full grid-cols-10">
            <div className="col-span-10 flex h-full w-full grow flex-col items-center justify-center bg-white shadow-slate-50 drop-shadow-md lg:col-span-4">
                <div className="mb-14 flex-col items-center text-center">
                    <h2 className="mb-2 text-3xl font-bold">Get started</h2>
                    <p className="text-slate-500">Create your account now.</p>
                </div>
                <div className="flex flex-col items-center" >
                    <form className="flex w-full max-w-sm flex-col" ref={formRef}>
                        <Input
                            {...register('email', )}
                            name="myInput"
                            error={errors.email?.message}
                            // ariaInvalid={isDirty}
                            labelText="Email"
                            type="email"
                            className="mb-3"
                            autofocus
                            autocomplete="on"
                        />

                        <Button
                            name="submit1"
                            variant="contained"
                            text="Verify"
                            disabled={isSubmitting}
                            className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600 mb-2"
                            type="submit"
                            onClick={submitHandler}
                        />


                        <Input
                            {...register('name')}
                            // name="myInput"
                            error={errors.name?.message}
                            // ariaInvalid={isDirty}
                            labelText="Name"
                            type="text"
                            className="mb-3 mt-1"
                            autocomplete="on"
                        />

                        <Input
                            {...register('password')}
                            // name="myInput"
                            error={errors.password?.message}
                            // ariaInvalid={isDirty}
                            labelText="Password"
                            type="password"
                            className="mb-3"
                            autocomplete="off"
                        />

                        <Input
                            {...register('confirmPassword')}
                            // name="myInput"
                            error={errors.confirmPassword?.message}
                            // ariaInvalid={isDirty}
                            labelText="Confirm Password"
                            type="password"
                            className="mb-3"
                            autocomplete="off"
                        />

                        {/*/!* 전체 동의 체크박스 *!/*/}
                        {/*/!*<div className="mb-3">*!/*/}
                        {/*/!*    <label className="block text-sm font-medium text-gray-700">Full agreement</label>*!/*/}
                        {/*/!*    <input*!/*/}
                        {/*/!*        type="checkbox"*!/*/}
                        {/*/!*        id="allAgreement"*!/*/}
                        {/*/!*        {...register('allAgreement')}*!/*/}
                        {/*/!*        onChange={handleAllAgreementChange}*!/*/}
                        {/*/!*        className="mr-2"*!/*/}
                        {/*/!*    />*!/*/}
                        {/*/!*    <label htmlFor="allAgreement" className="text-sm text-gray-900">*!/*/}
                        {/*/!*        I totally agree*!/*/}
                        {/*/!*    </label>*!/*/}
                        {/*/!*</div>*!/*/}

                        {/*/!*<div className="mb-3">*!/*/}
                        {/*/!*    <label className="block text-sm font-medium text-gray-700">Acceptance of Terms</label>*!/*/}
                        {/*/!*    <div className="space-y-2">*!/*/}
                        {/*/!*        <div className="flex items-center">*!/*/}
                        {/*/!*            <input*!/*/}
                        {/*/!*                type="checkbox"*!/*/}
                        {/*/!*                id="agreement1"*!/*/}
                        {/*/!*                {...register('agreement1', { required: 'Check to Acceptance of Terms' })}*!/*/}
                        {/*/!*                className="mr-2"*!/*/}
                        {/*/!*            />*!/*/}
                        {/*/!*            <label htmlFor="agreement1" className="text-sm text-gray-900">*!/*/}
                        {/*/!*                14 years of age or older*!/*/}
                        {/*/!*            </label>*!/*/}
                        {/*/!*        </div>*!/*/}
                        {/*/!*        /!* 이하 약관 목록 추가 *!/*!/*/}
                        {/*/!*        <div className="flex items-center">*!/*/}
                        {/*/!*            <input*!/*/}
                        {/*/!*                type="checkbox"*!/*/}
                        {/*/!*                id="agreement2"*!/*/}
                        {/*/!*                {...register('agreement2', { required: 'Check to Acceptance of Terms' })}*!/*/}
                        {/*/!*                className="mr-2"*!/*/}
                        {/*/!*            />*!/*/}
                        {/*/!*            <label htmlFor="agreement2" className="text-sm text-gray-900">*!/*/}
                        {/*/!*                Terms of Use*!/*/}
                        {/*/!*            </label>*!/*/}
                        {/*/!*        </div>*!/*/}
                        {/*/!*        <div className="flex items-center">*!/*/}
                        {/*/!*            <input*!/*/}
                        {/*/!*                type="checkbox"*!/*/}
                        {/*/!*                id="agreement3"*!/*/}
                        {/*/!*                {...register('agreement3', { required: 'Check to Acceptance of Terms' })}*!/*/}
                        {/*/!*                className="mr-2"*!/*/}
                        {/*/!*            />*!/*/}
                        {/*/!*            <label htmlFor="agreement3" className="text-sm text-gray-900">*!/*/}
                        {/*/!*                consent to collection of personal information*!/*/}
                        {/*/!*            </label>*!/*/}
                        {/*/!*        </div>*!/*/}
                        {/*/!*        <div className="flex items-center">*!/*/}
                        {/*/!*            <input*!/*/}
                        {/*/!*                type="checkbox"*!/*/}
                        {/*/!*                id="agreement4"*!/*/}
                        {/*/!*                {...register('agreement4', { required: 'Check to Acceptance of Terms' })}*!/*/}
                        {/*/!*                value="개인정보 마케팅 활용 동의"*!/*/}
                        {/*/!*                className="mr-2"*!/*/}
                        {/*/!*            />*!/*/}
                        {/*/!*            <label htmlFor="agreement4" className="text-sm text-gray-900">*!/*/}
                        {/*/!*                i agree to the above terms and conditions*!/*/}
                        {/*/!*            </label>*!/*/}
                        {/*/!*        </div>*!/*/}
                        {/*/!*        <div className="flex items-center">*!/*/}
                        {/*/!*            <input*!/*/}
                        {/*/!*                type="checkbox"*!/*/}
                        {/*/!*                id="agreement5"*!/*/}
                        {/*/!*                {...register('agreement5', { required: 'Check to Acceptance of Terms' })}*!/*/}
                        {/*/!*                value="이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신"*!/*/}
                        {/*/!*                className="mr-2"*!/*/}
                        {/*/!*            />*!/*/}
                        {/*/!*            <label htmlFor="agreement5" className="text-sm text-gray-900">*!/*/}
                        {/*/!*                system event notification services*!/*/}
                        {/*/!*            </label>*!/*/}
                        {/*/!*        </div>*!/*/}

                        {/*/!*    </div>*!/*/}
                        {/*/!*    {errors.agreement && (*!/*/}
                        {/*/!*        <p className="text-sm text-red-600 mt-1">{errors.agreement.message}</p>*!/*/}
                        {/*/!*    )}*!/*/}
                        {/*/!*</div>*!/*/}

                        <Button
                            text="Create account"
                            disabled={isSubmitting}
                            className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600"
                            type={"submit"}
                            onClick={onSubmit}
                        />
                    </form>

                    {/*<div className="form-check">*/}
                    {/*    <input*/}
                    {/*        type="checkbox"*/}
                    {/*        className="form-check-input"*/}
                    {/*        name="allSelect"*/}
                    {/*        // checked={*/}
                    {/*        //   users.filter((user) => user?.isChecked !== true).length < 1*/}
                    {/*        // }*/}
                    {/*        checked={!users.some((user) => user?.isChecked !== true)}*/}
                    {/*        onChange={handleChange}*/}
                    {/*    />*/}
                    {/*    <label className="form-check-label ms-2">All Select</label>*/}
                    {/*</div>*/}
                    {/*{users.map((user, index) =>(*/}
                    {/*    <div className="form-check" key={index}>*/}
                    {/*        <input*/}
                    {/*            type="checkbox"*/}
                    {/*            className="form-check-input"*/}
                    {/*            name={user.name}*/}
                    {/*            checked={user?.isChecked || false}*/}
                    {/*            onChange={handleChange}*/}
                    {/*        />*/}
                    {/*        <label className="form-check-label ms-2">{user.name}</label>*/}
                    {/*    </div>*/}
                    {/*))}*/}
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