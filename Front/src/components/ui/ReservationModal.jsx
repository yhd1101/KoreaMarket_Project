import React from 'react';
import MapContainer from "../Maps";
import {Col, Container, Row, Image, ListGroup, Card, InputGroup, Form} from "react-bootstrap";
import { Calendar } from "primereact/calendar";
import useFetchProductById from "../../services/fetchProductById";
import {useParams} from "react-router-dom";
import useCreateReservation from "../../services/createReservation";
import {useForm} from "react-hook-form";
import Input from "./Input";
import Button from "../../components/ui/Button";
import {register} from "swiper/element";

const ReservationModal = ({ productData, onClose, submit, errors, register, onChange, dateValue }) => {
    // const { id } = useParams()
    // const { data, isLoading, error} = useFetchProductById(id)
    // const { data: createReservation, mutateAsync } =useCreateReservation()
    //
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { isSubmitting, errors, isDirty}
    // } = useForm()

    // const onSubmit = async (values) => {
    //     const {location, desc, purchase, reservationDate} = values
    //     const userInput = {
    //         location, desc, purchase, reservationDate, product: id
    //     }
    //
    //     // await mutateAsync(userInput)
    //     console.log("5555555", userInput)
    //
    // }


    const getToday = () => {
        let today = new Date()
        let year = today.getFullYear()
        let month = today.getMonth() + 1 //월
        let date = today.getDate() //날짜
        let day = today.getDay() //요일

        return year + '/' + month + '/' + date
    }


    return (
        <div className="modal-container" > {/* CSS 클래스를 추가합니다. */}
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-full h-full max-w-5xl mx-auto my-4">
                    {/* 모달 내용 */}
                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">

                        {/* 모달 헤더 */}
                        <div className="flex items-start justify-between p-3 border-b border-solid rounded-t border-blueGray-200">
                            <h3 className="text-3xl font-semibold">Reservation</h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={onClose}
                            >
                                <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                            </button>
                        </div>
                            {/* 모달 내용 */}
                        <div className="relative p-6 flex-auto max-h-[80vh] min-h-[50vh] flex justify-center">
                            <div className="mx-4 flex-1 ml-8" style={{ marginBottom: '1px' }}>
                                <MapContainer />
                            </div>
                            <div className="mx-4 flex-1 text-left ">
                                <div className="mt-4">
                                    <h1 className="text-xl font-semibold">Seller information</h1>
                                </div>
                                <div>
                                    <div className={"mb-1"}>
                                        <span className="font-semibold">seller name:</span> {productData.seller.name}
                                    </div>
                                    <div className={"mb-1, mt-2"}>
                                        <span className="font-semibold">seller email:</span> {productData.seller.email}
                                        <Card className={"mb-2, mt-3"} style={{width: '24rem'}}>
                                            <Calendar
                                                showTime
                                                hourFormat="24"
                                                // value={dateTime}
                                                // onChange={e => setDateTime(e.target.value)}
                                                onChange={onChange}
                                                value={dateValue}
                                                placeholder={getToday()} //현재 시간 가이드 오늘날짜로 보여줌
                                            />
                                        </Card>

                                        <form className="flex w-full max-w-sm flex-col" onSubmit={submit}>
                                            <Input
                                                {...register}
                                                error={errors}
                                                // ariaInvalid={isDirty}
                                                labelText="location"
                                                type="text"
                                                className="mt-3"
                                                autocomplete="on"
                                                style={{width: '24rem'}}
                                            />
                                            <Input
                                                {...register}
                                                error={errors}
                                                // ariaInvalid={isDirty}
                                                labelText="desc"
                                                type="text"
                                                className="mt-3"
                                                autocomplete="on"
                                                style={{width: '24rem'}}
                                            />
                                            <button
                                                className="flex select-none items-center gap-3 rounded-lg bg-violet-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-3"
                                                type={"submit"}
                                                data-ripple-light="true"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                                    ></path>
                                                </svg>
                                                reservation
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/!* 모달 푸터 *!/*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={onClose}
                            >
                                닫기
                            </button>
                        {/*    /!* 다른 버튼 또는 액션을 여기에 추가할 수 있습니다 *!/*/}
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ReservationModal;
