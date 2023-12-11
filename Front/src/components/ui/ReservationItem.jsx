import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';


export default function ReservationItem({ img, id }) {
    return (
        <Link to={`/product/${id}`} className="block">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100" style={{ width: '170px', height: '170px' }}>
                <LazyLoadImage
                    src={img}
                    alt={id}
                    className="h-full w-full rounded-2xl transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-75"
                />
            </div>

        </Link>

    );
}