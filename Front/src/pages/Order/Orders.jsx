import React from 'react';
import OrderTitle from "../../components/ui/OrderTitle";

const Orders = () => {
    return (
        <div className={"bg-white"}>
            <main className="mx-auto mb-32 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between border-b border-gray-200 pt-24 pb-6">
                    <OrderTitle title={"Orders"}/>
                </div>
                <div className="flex flex-col items-center mt-5">
                    <h3>There are no orders yet</h3>
                </div>
            </main>
        </div>
    );
};

export default Orders;
