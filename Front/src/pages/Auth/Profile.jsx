
import React, {Fragment, useState} from 'react';
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
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import useNewPassword from "../../services/newPassword";
import ReservationTittle from "../../components/ui/ReservationTittle";
import useFetchReservationById from "../../services/fetchReservations";
import fetchReservations from "../../services/fetchReservations";
import useFetchCommentById from "../../services/fetchCommentById";
import ReservationItem from "../../components/ui/ReservationItem";
import useChangePassword from "../../services/changePassword";
import useFetchDeleteReservation from "../../services/deleteReservation";
import axios from "axios";
import useUpdateReservation from "../../services/reservationUpdate";
import { Rating } from "@material-tailwind/react";
import useFetchPurchase from "../../services/purchase";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {SwiperSlide} from "swiper/react";
import ProductItem from "../../components/ui/ProductItem";
import useFetchRatingById from "../../services/ratingGetId";


const Profile = () => {
    const [newPassword, setNewPassword] = useState("")
    const [desc, newDesc] = useState("")
    const [productId, newProductId] = useState("")
    const [reservationLocation, newReservationLocation] = useState("")
    const [reservationDate, newReservationDate] = useState("")
    const [reservationId, setReservationId] = useState("")
    const { data , isLoading, error } = useFetchProfileById()
    const { data: ratingData, isLoading: ratingLoading, error: ratingError } = useFetchRatingById(data?.profile.id)
    const [showRatingModal, setShowRatingModal] = useState(false);
    const { data: updateReservationData, isLoading: isUpdateReservationLoading, mutateAsync: updateMutateAsync} = useUpdateReservation(reservationId)
    const { data: purchaseCount } = useFetchPurchase()
    console.log("purchase: ", purchaseCount?.length )
    console.log("rating:", ratingData?.data.ratingAverage)

    const navigate = useNavigate()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);;
    const { data: newPasswordData, mutateAsync} = useNewPassword()
    const {user} = useAuthContext()
    const shouldShowNavbarAndFooter = false;



    const {mutateAsync: deleteMutateAsync, isLoading: deleteReservationLoading, error: deleteReservationError } = useFetchDeleteReservation()




    const {
        register,
        handleSubmit,
        watch,
        setValue,
        // setError,
        // clearErrors,
        formState: { isSubmitting, errors, isDirty}
    } = useForm()
    // const testButton = async (e) => {
    //     e.preventDefault()
    //     console.log(newPassword)
    // }

    const openRatingModal = (productId) => {
        const popup = window.open('http://localhost:3000/rating', 'Rating Modal', 'width=500,height=400', productId);

    };


    const newPasswordHandler = async (e) => {
        e.preventDefault()
        try{
            const token = await localStorage.getItem("token")
            const config = {
                headers: {
                    Authorization: "bearer " + token
                }
            }
            const userInput = {
                newPassword
            }
            const { data, status } = await axios.post("http://localhost:8000/api/auth/newpassword", userInput, config)
            console.log("password: ", data)
            if (data.statusCode === 200) {
                alert('change Password')
            }
        } catch (err) {
            console.log(err)
        }
    }

    const reservationHandler = async (id, productId, desc, location, reservationDate) => {
        try{
            const token = await localStorage.getItem("token")
            const config = {
                headers: {
                    Authorization: "bearer " + token
                }
            }
            const userInput = {
                product: productId,
                desc,
                location,
                reservationDate,
                purchase: true
            }
           const {data, status} = await axios.put(`http://localhost:8000/api/reservation/${id}`, userInput, config)
            console.log("ddsad", userInput)
            console.log("id", id)
            if (data.statusCode=== 200) {
                alert("!!!!")
            }
        } catch (err) {
            console.log(err)
        }
    }

    // const changePasswordSubmit =  (values)  =>{
    //     const { newPassword } = values
    //     const userInput = {
    //         password: newPassword
    //     }
    //     console.log("newPassword: ", userInput)
    //     mutateAsync(userInput)
    // }

    const updateSubmit = (data, id) => {
        console.log("ResId: ",data);
        setReservationId(id)
        const userInput = {
            product: data.product.id,
            desc: data.desc,
            location: data.location,
            reservationDate: data.reservationDate,
            purchase: true
        }
        console.log("userInput: ", userInput)
        updateMutateAsync(userInput)
        alert("!!!!")
    }

    // const updateSubmit = async (id, productId, desc, location, reservationDate) => {
    //     console.log("Reservation ID:", id); //
    //     const userInput = {
    //         product: productId,
    //         desc,
    //         location,
    //         reservationDate,
    //         purchase: true
    //     };
    //
    //     console.log("User Input:", userInput);
    //
    //     // updateMutateAsync(id, userInput);
    //     alert('!!!');
    // };

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
    if (isLoading ) {
        return (
            <LoadingSkeleton/>
        )
    }
    return (

        <div>
            {/*{shouldShowNavbarAndFooter && <Navbar />}*/}
            <div className={"bg-white"}>
                <main className="mx-auto mb-32 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between border-b border-gray-200 pt-24 pb-6">
                        <ProfileTitle title={"Profile"}/>
                    </div>
                    <div className="flex flex-col items-center mt-5 " >
                        <div className="flex ml-20 md-5 w-[30%]">
                                <User
                                    profileImg={data.profileImg}
                                    mobile={false}
                                />
                            {/*<div className="border border-blue-500 p-4  ml-5 grid grid-cols-3 w-[280px]">*/}
                            <div className=" ml-8 container m-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
                                <div>
                                    <span>Score</span>
                                    <br/>
                                    <span className="ml-3">{ratingData?.data.ratingAverage}</span>
                                </div>

                                <div className="ml-5 border-r border-blue-300"/>
                                <div className="...">
                                    <span>Buy</span>
                                    <br/>
                                    <span className="ml-3">{purchaseCount?.length }</span>
                                </div>
                                <div className="ml-4 border-r border-blue-500"/>
                                <div className="...">
                                    <span>Sell</span>
                                    <br/>
                                    <span className="ml-2">{ratingData?.data?.user.length}</span>
                                </div>
                            </div>
                            {/*<div className="border border-blue-500 p-4 ml-2 grid-cols-3">*/}
                            {/*    <div>*/}
                            {/*        <span>score</span>*/}
                            {/*        <br/>*/}
                            {/*        <span className="ml-3">1.5</span>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        <span>score</span>*/}
                            {/*        <br/>*/}
                            {/*        <span className="ml-3">1.5</span>*/}
                            {/*    </div>*/}
                            {/*   /!* <span className="ml-2">buy</span>*!/*/}
                            {/*   /!* <span className="ml-2">sell</span>*!/*/}
                            {/*   /!* <br/>*!/*/}

                            {/*   /!* <span className="ml-6">2</span>*!/*/}
                            {/*   /!* <span className="ml-6">5</span>*!/*/}

                            {/*</div>*/}

                        </div>
                        <div className="border: 10px soild blue padding: 20px ">
                        </div>
                        <form className="ml-4 mt-3 w-[30%]" >

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
                                className="mb-3 w-full"
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
                                value={newPassword}
                                error={errors.password?.message}
                                ariaInvalid={isDirty}
                                labelText="Password"
                                type="password"
                                className="mb-3"
                                autocomplete="off"
                                onChange={(e) => setNewPassword(e.target.value)}
                            />


                            <Button
                                text="Save"
                                disabled={isSubmitting}
                                className="rounded-lg bg-violet-500 py-4 px-20 font-semibold text-white hover:bg-violet-600"
                                onClick={newPasswordHandler}
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




                        <ul className="grid  gap-6 sm:grid-cols-2 md:grid-cols-4 mt-3">
                            {error && <ErrorMessage />}
                            {data?.profile.reservation?.map((c, index) => (
                                <Fragment key={index}>
                                    {c.purchase === false && ( // purchase가 false일 때만 렌더링
                                        <>
                                            <ProductItem key={index}
                                                         id={c?.product?.id}
                                                         img={c?.product.productImg[0]}
                                                // img={"https://assets.burberry.com/is/image/Burberryltd/7F1F1853-CA91-43B6-B4B1-ADC28DE93F0F?$BBY_V3_SL_1$&wid=2500&hei=2500"}

                                            />

                                            <div>
                                                <p className="font-bold tracking-tight text-gray-900 mb-1" style={{ width: '250px' }}>
                                                    {c.product.name}
                                                </p>
                                                <p style={{ color: 'purple' }} className="mb-1">Reserved</p>
                                                <p className="mb-1">Seller: {c.product.seller.name}</p>
                                                <p className="mb-1">Location: {c.location}</p>
                                                <p className="mb-1">{c.reservationDate.slice(0, 10)}</p>
                                                <div className="flex space-x-4">
                                                    <Button
                                                        text="Cancel"
                                                        disabled={isSubmitting}
                                                        className="rounded-lg bg-violet-500 py-4 px-20 font-semibold text-white hover:bg-violet-600"
                                                        onClick={() => deleteSubmit(c.id)}
                                                    />
                                                    <Button
                                                        text="Purchase"
                                                        disabled={isSubmitting}
                                                        className="rounded-lg bg-violet-500 py-4 px-20 font-semibold text-white hover:bg-violet-600"
                                                        onClick={() => {
                                                            updateSubmit(c, c.id); // updateSubmit 함수 호출
                                                            openRatingModal(c.product.id); // openRatingModal 함수 호출 (원래 있던 부분)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </Fragment>
                            ))}
                        </ul>


                    </main>

                </main>


            </div>
        </div>
    );
};

export default Profile;