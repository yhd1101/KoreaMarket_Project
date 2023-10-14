import {Link, useNavigate} from 'react-router-dom'
// import Input from "../../components/ui/Input";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import AuthImageContainer from "../../components/ui/AuthImageContainer";
import {useForm} from "react-hook-form";
import {EMAIL_REGEX} from "../../data/Auth/authData";
import useSignupUser from "../../services/signupUser";
import React from "react";


const Signup = () => {
    const navigate = useNavigate()
    const { data, isLoading, error, mutateAsync } = useSignupUser()
    // console.log("77777777777", data)




    const {
        register,
        handleSubmit,
        watch,
        setValue,
        // setError,
        // clearErrors,
        formState: { isSubmitting, errors, isDirty}
    } = useForm({
        defaultValues: {
            name : "",
            email: "",
            password: "",
            confirmPassword: "",
            // agreement: [],
            // allAgreement: false, // 전체 동의 체크박스 추가
        }
    })




    const onSubmit = async (values) => {
        const {email, name, password, confirmPassword } = values
        if (password !== confirmPassword) {
            alert("password do not match")
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
                    <form className="flex w-full max-w-sm flex-col" onSubmit={handleSubmit(onSubmit)} >
                        <Input
                            {...register('email', {
                                required: 'Please provide an email.',
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message:
                                        'Please providew a properly formatted email address.',
                                },
                            })}
                            error={errors.email?.message}
                            ariaInvalid={isDirty}
                            labelText="Email"
                            type="email"
                            className="mb-3"
                            autofocus
                            autocomplete="on"
                        />

                        <Input
                            {...register('name', {
                                required: 'Please provide a name.',
                                maxLength: {
                                    value: 20,
                                    message: 'Name needs to be between 1 to 20 characters.',
                                },
                            })}
                            error={errors.name?.message}
                            ariaInvalid={isDirty}
                            labelText="Name"
                            type="text"
                            className="mb-3"
                            autocomplete="on"
                        />

                        <Input
                            {...register('password', {
                                required: 'Please provide a password.',
                                minLength: {
                                    value: 6,
                                    message: 'Password needs to be between 6 to 20 characters.',
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Password needs to be between 6 to 20 characters.',
                                },
                            })}
                            error={errors.password?.message}
                            ariaInvalid={isDirty}
                            labelText="Password"
                            type="password"
                            className="mb-3"
                            autocomplete="off"
                        />

                        <Input
                            {...register('confirmPassword', {
                                required: 'Please provide a confirm password.',
                                minLength: {
                                    value: 6,
                                    message: 'Password needs to be between 6 to 20 characters.',
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Password needs to be between 6 to 20 characters.',
                                },
                                validate: (val) => {
                                    if (watch('password') !== val) {
                                        return 'Please make sure your passwords match.';
                                    }
                                },
                            })}
                            error={errors.confirmPassword?.message}
                            ariaInvalid={isDirty}
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