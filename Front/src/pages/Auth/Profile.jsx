import React from 'react';
import ProfileTitle from "../../components/ui/ProfileTitle";
import useFetchProfileById from "../../services/fetchProfileById";
import ErrorMessage from "../../components/ui/ErrorMessage";
import LoadingSkeleton from "../../components/ui/LoadingSkeleton";
import {useForm} from "react-hook-form";
import Input from "../../components/ui/Input";
import {EMAIL_REGEX} from "../../data/Auth/authData";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import User from "../../components/User";
import Button from "../../components/ui/Button";
import {useAuthContext} from "../../context/AuthContext";


const Profile = () => {
    const { data , isLoading, error } = useFetchProfileById()

    const {user} = useAuthContext()
    const shouldShowNavbarAndFooter = false;
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        // setError,
        // clearErrors,
        formState: { isSubmitting, errors, isDirty}
    } = useForm()

    console.log("7777777777", data)
    // console.log("2222222",data)
    //
    // Error Message
    if (error) {
        return (
            <div className="mt-20">
                <ErrorMessage/>
            </div>
        );
    }
    if (isLoading) {
        return (
            <LoadingSkeleton/>
        )
    }
    return (
        <div>
            {shouldShowNavbarAndFooter && <Navbar />}
            <div className={"bg-white"}>
                <main className="mx-auto mb-32 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between border-b border-gray-200 pt-24 pb-6">
                        <ProfileTitle title={"Profile"}/>
                    </div>
                    <div className="flex flex-col items-center mt-5" >
                        <div className={"flex items-center md-5"}>
                            <User
                                profileImg={data.profileImg}
                                mobile={false}
                            />
                            <button
                                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                style={{ marginLeft: '15px' }} // 오른쪽 마진을 추가
                            >
                                change
                            </button>
                        </div>
                        <form className="ml-4 mt-3" >

                            <Input
                                {...register('email', {
                                    required: 'Please provide an email.',
                                    pattern: {
                                        value: EMAIL_REGEX,
                                        message:
                                            'Please providew a properly formatted email address.',
                                    },
                                })}
                                value={user?.email}
                                disabled
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
                                value={user?.name}
                                disabled
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
                            <Button
                                text="Save"
                                className="rounded-lg bg-violet-500 py-4 px-20 font-semibold text-white hover:bg-violet-600"
                            />
                        </form>
                    </div>
                </main>
            </div>
            {shouldShowNavbarAndFooter && <Footer />}
        </div>
    );
};

export default Profile;