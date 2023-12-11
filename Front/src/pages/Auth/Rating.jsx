import React, { useState } from 'react';

const Rating = () => {
    const [rating, setRating] = useState(null);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    return (
        <main className="mx-auto mb-32 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mt-5">
                {rating && (
                    <div>
                        <span>{rating}.0</span>
                    </div>
                )}
                <div className="flex flex-row-reverse justify-end items-center">
                    {[5, 4, 3, 2, 1].map((value) => (
                        <React.Fragment key={value}>
                            <input
                                id={`hs-ratings-readonly-${value}`}
                                type="radio"
                                className="peer -ms-5 w-8 h-8 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                name="hs-ratings-readonly"
                                value={value}
                                onChange={() => handleRatingChange(value)}
                            />
                            <label
                                htmlFor={`hs-ratings-readonly-${value}`}
                                className={`peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600`}
                            >
                                <svg
                                    className="flex-shrink-0 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </label>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Rating;
