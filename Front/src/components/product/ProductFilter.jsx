import ErrorMessage from "../ui/ErrorMessage";
import {Disclosure} from "@headlessui/react";
import {MinusIcon, PlusIcon} from "@heroicons/react/20/solid";
import {Fragment} from "react";
import * as PropTypes from "prop-types";

function NftCheckbox(props) {
    return null;
}

NftCheckbox.propTypes = {onChange: PropTypes.func};
export const ProductFilter = ({
                              filterLoading,
                              filterError,
                              filters,
                              searchParams,
                              handleCheckboxChange,
                              mobile,
                          }) => {
    return (
        <form
            className={`${
                mobile ? 'mt-4 border-t border-gray-200' : 'hidden lg:block'
            }`}
        >
            {filterLoading && (
                <div className="h-40 w-full animate-pulse rounded-md bg-slate-50" />
            )}
            {filterError && <ErrorMessage />}
            {filters?.map((value) => {
                const selectedFilters = searchParams.getAll(
                    Object.keys(value)[0].toLowerCase(),
                );

                return (
                    <Disclosure
                        as="div"
                        key={Object.keys(value)[0]}
                        className={`${
                            mobile ? 'border-t px-4 ' : 'border-b'
                        } border-gray-200 py-6`}
                    >
                        {({ open }) => (
                            <>
                                <h3 className="-my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      {Object.keys(value)[0]}
                    </span>
                                        <div className="flex">
                      <span
                          className={`h-[18px] w-[18px] rounded-[4px] text-xs leading-[17px] text-white ${
                              selectedFilters?.length ? 'bg-violet-500' : ''
                          }`}
                      >
                        {selectedFilters?.length}
                      </span>
                                            <span className="ml-4 flex items-center">
                        {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                        ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>
                                        </div>
                                    </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-6">
                                    <div className="space-y-4">
                                        {Object.values(value)[0].map((val, i) => {
                                            return (
                                                <Fragment key={i}>
                                                    <NftCheckbox
                                                        values={value}
                                                        value={val}
                                                        onChange={() =>
                                                            handleCheckboxChange(
                                                                Object.keys(value)[0].toLowerCase(),
                                                                val.toLowerCase(),
                                                            )
                                                        }
                                                        searchParams={searchParams}
                                                    />
                                                </Fragment>
                                            );
                                        })}
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                );
            })}
        </form>
    );
};