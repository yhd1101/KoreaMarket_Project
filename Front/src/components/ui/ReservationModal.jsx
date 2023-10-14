import React from 'react';
import MapContainer from "../Maps";
import {Col, Container, Row, Image, ListGroup, Button, Card, InputGroup, Form} from "react-bootstrap";
import { Calendar } from "primereact/calendar";
import useFetchProductById from "../../services/fetchProductById";
import {useParams} from "react-router-dom";

const ReservationModal = ({ productData, onClose }) => {
    const { id } = useParams()
    const { data, isLoading, error} = useFetchProductById(id)
    const getToday = () => {
        let today = new Date()
        let year = today.getFullYear()
        let month = today.getMonth() + 1 //월
        let date = today.getDate() //날짜
        let day = today.getDay() //요일

        return year + '/' + month + '/' + date
    }


    return (
        <div className="modal-container"> {/* CSS 클래스를 추가합니다. */}
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-full h-full max-w-6xl mx-auto my-6">
                    {/* 모달 내용 */}
                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">

                        {/* 모달 헤더 */}
                        <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                            <h3 className="text-3xl font-semibold">Reservatiom</h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={onClose}
                            >
                                <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                            </button>
                        </div>
                            {/* 모달 내용 */}
                        <div className="relative p-6 flex-auto max-h-[80vh] min-h-[50vh] flex justify-center">
                            <div className="mx-4 flex-1 ml-8" style={{ marginBottom: '20px' }}>
                                <MapContainer />
                            </div>
                            <div className="mx-4 flex-1 text-left ">
                                <div className="mb-4">
                                    <h1 className="text-xl font-semibold">Seller information</h1>
                                </div>
                                <div>
                                    <div>
                                        <span className="font-semibold">seller name:</span> {data.seller.name}
                                    </div>
                                    <div>
                                        <span className="font-semibold">seller email:</span> {data.seller.email}


                                    {/*<Card style={{ width: '22rem' }}>*/}
                                        <Card>
                                            <Calendar
                                                showTime
                                                hourFormat="24"
                                                // value={dateTime}
                                                // onChange={e => setDateTime(e.target.value)}
                                                placeholder={getToday()} //현재 시간 가이드 오늘날짜로 보여줌
                                            />
                                        </Card>
                                        <Form>
                                            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>메모</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    placeholder={"memo"}
                                                    // value={memo}
                                                    // onChange={e => setMemo(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>약속장소</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    placeholder={"location"}
                                                    // value={location}
                                                    // onChange={e => setLocation(e.target.value)}
                                                />
                                            </Form.Group>
                                        </Form>
                                        <Button
                                            // onClick={reservationPost}
                                            style={{width: "350px", marginBottom: "30px"}}
                                            variant={"dark"}
                                            // disabled={resShow ? true : false}
                                        >
                                            Reservation
                                        </Button>
                                    {/*</Card>*/}
                                    </div>
                                </div>
                                {/* 이곳에 예약 폼이나 모달 내용을 넣어주세요 */}
                            </div>
                        </div>
                        {/* 모달 푸터 */}
                        <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={onClose}
                            >
                                닫기
                            </button>
                            {/* 다른 버튼 또는 액션을 여기에 추가할 수 있습니다 */}
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ReservationModal;
