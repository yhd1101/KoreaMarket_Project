import {Link, useNavigate, useParams} from 'react-router-dom'
// import Input from "../../components/ui/Input";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import AuthImageContainer from "../../components/ui/AuthImageContainer";
import {useForm} from "react-hook-form";
import {EMAIL_REGEX} from "../../data/Auth/authData";
import useSignupUser from "../../services/signupUser";
import React from "react";
import useChangePassword from "../../services/changePassword";
import { useLocation} from "react-router-dom";


const ChangePassword = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    console.log("66666666666",token)

    const { data, isLoading, error, mutateAsync } = useChangePassword()





    const {
        register,
        handleSubmit,
        watch,
        formState: { isSubmitting, errors, isDirty}
    } = useForm({
        defaultValues: {
            password: "",
            confirmPassword: "",
            // agreement: [],
            // allAgreement: false, // 전체 동의 체크박스 추가
        }
    })

    const onSubmit = async (values) => {
        console.log("00000000000",values)
        const {password, confirmPassword } = values
        if (password !== confirmPassword) {
            alert("password do not match")
            return
        }

        const userInput = {
            token,
            newPassword: password
        }
        console.log(userInput)
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
                    <form className="flex w-full max-w-sm flex-col" onSubmit={handleSubmit(onSubmit)}>
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
                        <Button
                            text="verify"
                            disabled={isSubmitting}
                            className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600"
                            type={"submit"}
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

export default ChangePassword;