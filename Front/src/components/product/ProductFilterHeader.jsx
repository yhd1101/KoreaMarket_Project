import {AdjustmentsHorizontalIcon, XMarkIcon} from "@heroicons/react/20/solid";

export const ProductFilterHeader = ({
                                    deleteAllParams,
                                    query,
                                }) => {
    return (
        <div className="hidden items-center justify-between border-b border-gray-200 pb-6 lg:flex">
            <h3 className="flex items-center text-base font-semibold text-gray-900">
                <AdjustmentsHorizontalIcon className="mr-2 h-4 w-4" />
                Filters
            </h3>
            {/*{Object.keys(query).length !== 0 && (*/}
            {/*    <button*/}
            {/*        className="flex items-center rounded-full bg-gray-800 py-1 px-2 text-xs text-white"*/}
            {/*        onClick={deleteAllParams}*/}
            {/*    >*/}
            {/*        Clear all <XMarkIcon className="ml-1 h-3 w-3" />*/}
            {/*    </button>*/}
            {/*)}*/}
        </div>
    );
};