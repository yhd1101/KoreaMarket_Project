import React, {Fragment} from 'react';
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
import {useLocation, useNavigate, useParams} from "react-router-dom";
import useNewPassword from "../../services/newPassword";
import ReservationTittle from "../../components/ui/ReservationTittle";
import useFetchReservationById from "../../services/fetchReservations";
import fetchReservations from "../../services/fetchReservations";
import useFetchCommentById from "../../services/fetchCommentById";
import ReservationItem from "../../components/ui/ReservationItem";
import useChangePassword from "../../services/changePassword";
import useFetchDeleteReservation from "../../services/deleteReservation";


const Profile = () => {
    const {id} = useParams()
    const { data , isLoading, error } = useFetchProfileById(id)
    const navigate = useNavigate()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    const {user} = useAuthContext()
    const { data: changePasswordData, isLoading: passwordLoading, error: passwordError, mutateAsync} = useChangePassword()
    const shouldShowNavbarAndFooter = false;
    const reservationIds = data?.profile?.reservation.map(reservation => reservation.id);

    const {mutateAsync: deleteMutateAsync, isLoading: deleteReservationLoading, error: deleteReservationError } = useFetchDeleteReservation()



    console.log("resevationId: ", reservationIds)

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
            password: "",
            confirmPassword: "",
        }
    })

    const onSubmit = async (values) => {
        console.log("dsdsadad2eq", values)
        const {password, confirmPassword } = values
        if (password !== confirmPassword) {
            alert("password do not match")
            return
        }
        const userInput = {
            token,
            newPassword: password
        }
        console.log("2q2313",userInput)
        await mutateAsync(userInput)
        navigate("/")

    }
    const deleteSubmit = async (id) => {
        console.log("#######",id)
        await deleteMutateAsync(id)
        alert('deleted')
    }


    //
    // if (reservationLoading) {
    //     return  <LoadingSkeleton/>
    // }
    // if(reservationError) {
    //     return (
    //         <div className={"mt-20"}>
    //             <ErrorMessage/>
    //         </div>
    //     )
    // }

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
                        <form className="ml-4 mt-3"  onSubmit={handleSubmit(onSubmit)}>

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
                                text="Save"
                                disabled={isSubmitting}
                                className="rounded-lg bg-violet-500 py-4 px-20 font-semibold text-white hover:bg-violet-600"
                                type={"submit"}
                            />
                        </form>
                    </div>
                    <main className="mx-auto  w-full max-w-3xl px-2 sm:px-6 lg:px-8">
                        <div className="flex items-end justify-between border-b border-gray-200 pt-24 pb-6">
                            <ReservationTittle title={"ReservationList"}/>

                            <div className="flex flex-col items-center mt-5" >
                                <div className={"flex items-center md-5"}>

                                </div>

                            </div>
                        </div>

                        <ul className="grid grid-cols-1 gap-6  sm:grid-cols-2 md:grid-cols-4 mt-3">

                            {error && <ErrorMessage />}
                            {data?.profile.reservation?.map((c, index) => (
                                <Fragment key={index}>
                                    {console.log("+++++++",c.id)}
                                    <ReservationItem key={index}
                                                     id={c?.product?.id}
                                                     img={c?.product.productImg[0]}
                                    />
                                    <div >
                                        <p className="font-bold tracking-tight text-gray-900 mb-1" style={{ width: '350px' }}>
                                            {c.product.name}
                                        </p>
                                        <p style={{ color: 'purple' }} className="mb-1">Reserved</p>
                                        <p className="mb-1">Seller: {c.product.seller.name}</p>
                                        <p className="mb-1">Location: {c.location}</p>
                                        {/*<p className="mb-1">{c.reservationDate.slice(0,10)}</p>*/}

                                        <Button
                                            text="Cancel"
                                            disabled={isSubmitting}
                                            className="rounded-lg bg-violet-500 py-4 px-20 font-semibold text-white hover:bg-violet-600"
                                            onClick={() => deleteSubmit(c.id)}
                                        />


                                    </div>


                                    {/*<div>*/}
                                    {/*    {c.product.name}*/}
                                    {/*    <br/>*/}
                                    {/*    {c.product.seller.name}*/}
                                    {/*</div>*/}
                                </Fragment>
                            ))}

                        </ul>
                    </main>

                </main>


            </div>
            {shouldShowNavbarAndFooter && <Footer />}
        </div>
    );
};

export default Profile;