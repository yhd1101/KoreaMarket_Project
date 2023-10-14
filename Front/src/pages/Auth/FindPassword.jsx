import React from 'react';
import { Link } from 'react-router-dom'
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import AuthImageContainer from "../../components/ui/AuthImageContainer";
import {useForm} from "react-hook-form";
import {EMAIL_REGEX} from "../../data/Auth/authData";
import useSendMail from "../../services/sendMail";


const FindPassword = () => {
    const { data, isLoading, eroor, mutateAsync } =useSendMail()

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors, isDirty}
    } = useForm({
        defaultValues: {
            email: "",
        }
    })

    const onSubmit = async (values) => {
        await mutateAsync(values)
    }

    // const onSubmit = handleSubmit((data) => {
    //     console.log(data)
    // })
    return (
        <section className="m-auto grid min-h-[calc(100vh-65px)] w-full grid-cols-10">
            <div className="col-span-10 flex h-full w-full grow flex-col items-center justify-center bg-white shadow-slate-50 drop-shadow-md lg:col-span-4">
                <div className="mb-14 flex-col items-center text-center">
                    <h2 className="mb-2 text-3xl font-bold">Verify Email</h2>
                    <p className="text-slate-500">Forgot your password?</p>
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
                firstText={"Enter your email"}
                secondText={"Enter your authentication number"}
            />
        </section>
    );
};

export default FindPassword;