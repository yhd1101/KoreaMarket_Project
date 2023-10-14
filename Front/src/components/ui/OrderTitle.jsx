const OrderTitle = ({ title, className }) => {
    return (
        <h1
            className={`text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl ${
                className ?? ''
            }`}
            style={{ borderBottom: 'none !important' }} // !important 사용
        >
            {title}
        </h1>
    );
};

export default OrderTitle;