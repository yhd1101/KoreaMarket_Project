import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';


export default function ReservationItem({ img, id }) {
    return (
        <Link to={`/product/${id}`}>
            <div className="relative isolate overflow-hidden rounded-2xl bg-gray-100 pt-[100%]" style={{ width: '180px', height: '180px' }}>
                <div className="absolute inset-0 translate-x-1/2 translate-y-1/2">
                    <LazyLoadImage
                        src={img}
                        alt={id}
                        // effect="blur"
                        className=" absolute top-0 left-0 h-full w-auto -translate-x-1/2 -translate-y-1/2 rounded-3xl transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-75"
                    />
                </div>
            </div>
            {/*<div className="p-5">*/}
            {/* */}
            {/*</div>*/}
        </Link>
    );
}