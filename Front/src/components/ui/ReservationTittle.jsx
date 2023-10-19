

const ReservationTittle = ({ title, className }) => {

    return (
        <h1
            className={`text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl ${
                className ?? ''
            }`}
        >
            {title}
        </h1>
    );
};

export default ReservationTittle;