import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import AuthImageContainer from "../../components/ui/AuthImageContainer";
import {useForm} from "react-hook-form";
import {EMAIL_REGEX} from "../../data/Auth/authData";
import {AiOutlineGoogle} from "react-icons/ai";
import {SiNaver} from "react-icons/si";
import {SiKakao} from "react-icons/si";
import useLoginUser from "../../services/loginUser";
import GoogleLoginButton from "../../components/ui/GoogleLoginButton";
import NaverLoginButton from "../../components/ui/NaverLoginButton";
import KakaoLoginButton from "../../components/ui/KakaoLoginButton";


const Login = () => {
    const navigate = useNavigate()
    const { data, isLoading, error, mutateAsync } = useLoginUser()
    console.log("9999999999999", data)


    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors, isDirty}
    } = useForm({
        defaultValues: {
            name : "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const onSubmit = async (values) => {
        console.log("000000000", values)
        await mutateAsync(values)
        navigate("/")
    }
    const handleGoogleLogin = () => {
        const popup = window.open('http://localhost:8000/api/auth/google', 'Google Login', 'width=800,height=600');

        const receiveLoginCompleteMessage = (event) => {
            if (event.origin === 'http://localhost:8000' && event.data === 'loginComplete') {
                popup.close();
                const storagedUser = localStorage.getItem("userInfo")
                const storagedToken = localStorage.getItem("token")


                // 여기서 프론트엔드에서 사용자 정보를 처리할 수 있습니다.
                // 예: 로그인 상태 유지, 사용자 정보를 상태에 저장 등
            }
            navigate('/profile')
        };

        window.addEventListener('message', receiveLoginCompleteMessage);
    };

    // const onSubmit = handleSubmit((data) => {
    //     console.log(data)
    // })
    return (
        <section className="m-auto grid min-h-[calc(100vh-65px)] w-full grid-cols-10">
            <div className="col-span-10 flex h-full w-full grow flex-col items-center justify-center bg-white shadow-slate-50 drop-shadow-md lg:col-span-4">
                <div className="mb-14 flex-col items-center text-center">
                    <h2 className="mb-2 text-3xl font-bold">Get started</h2>
                    <p className="text-slate-500">Create your account now.</p>
                </div>
                <div className="flex flex-col items-center">
                    <form className="flex w-full max-w-sm flex-col" onSubmit={handleSubmit(onSubmit)}>
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


                        <Button
                            type={"submit"}
                            text="Login"
                            disabled={isSubmitting}
                            className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600"
                        />
                    </form>
                    <GoogleLoginButton
                        text={"Sign with Google"}
                        icon={() => <AiOutlineGoogle className={"mr-2 text-2xl"}/> }
                        className={"mt-6 w-full max-w-sm rounded-lg border border-gray-300 bg-white py-4 font-semibold text-slate-500 hover:bg-gray-50"}
                        onClick={handleGoogleLogin}
                    />
                    <NaverLoginButton
                        text={"Sign with Naver"}
                        icon={() => <SiNaver className={"mr-2 text-2xl"}/> }
                        className={"mt-6 w-full max-w-sm rounded-lg border border-gray-300 bg-white py-4 font-semibold text-slate-500 hover:bg-gray-50"}
                        // onClick={() => {
                        //     window.location.href = "http://localhost:8000/api/auth/naver"; // 클라이언트에서 서버로의 요청
                        // }}
                    />
                    <KakaoLoginButton
                        text={"Sign with Kakao"}
                        icon={() => <SiKakao className={"mr-2 text-2xl"}/> }
                        className={"mt-6 w-full max-w-sm rounded-lg border border-gray-300 bg-white py-4 font-semibold text-slate-500 hover:bg-gray-50"}
                        // onClick={() => {
                        //     window.location.href = "http://localhost:8000/api/auth/kakao"; // 클라이언트에서 서버로의 요청
                        // }}
                    />
                    <div className="mt-10 text-slate-500">
                        Already have an account?
                        <Link to="/signup" className="p-2 font-semibold text-violet-500">
                            signup
                        </Link>
                    </div>
                    <div className="mt-10 text-slate-500">
                        Did you forget your
                        <Link to="/find/password" className="p-2 font-semibold text-violet-500">
                            Password
                        </Link>
                    </div>
                </div>
            </div>
            <AuthImageContainer
                image={"/images/login.webp"}
                firstText={"Welcome to Shoppingworld"}
                secondText={"Login here"}
            />
        </section>
    );
};

export default Login;