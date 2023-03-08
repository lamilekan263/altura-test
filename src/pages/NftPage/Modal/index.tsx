import React, { useState, useEffect, Fragment } from "react";
import moment from 'moment'

import { Dialog, Transition } from '@headlessui/react'
import INft from "../../../models/nftInterface";
import { formatImageUrl } from "../../../utils/formatImageUrl";
import { formatDate } from "../../../utils/formatDate";
import ReactPlayerComp from "../../../components/ReactPlayerComp";
import { getFileFormat } from "../../../utils/getFileFormat";


interface IModal {
    closeModal: () => void,
    isOpen: boolean,
    selectedNft: INft | undefined
}

const Modal = ({ closeModal, isOpen, selectedNft }: IModal) => {
    const buyNft = () => {
        window.open(selectedNft?.permalink);
    };

    const externalUrl = () => {
        window.open(selectedNft?.external_link);

    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-6xl dark:bg-gray-700 dark:border-gray-700 text-white transform overflow-hidden rounded-2xl bg-white p-3 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="div"
                                    className="flex justify-end"
                                >
                                    <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                </Dialog.Title>
                                <section className="text-gray-700 body-font overflow-hidden text-white">
                                    <div className="container px-5 py-6 mx-auto">
                                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                            {selectedNft?.image_original_url !== null ? (getFileFormat(selectedNft?.image_original_url) === ('.mp4' || '.mov') ? (

                                                <ReactPlayerComp
                                                    imageUrl={selectedNft?.image_original_url}
                                                />
                                            ) : (
                                                <>
                                                    <img className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={formatImageUrl(selectedNft?.image_original_url !== null ? selectedNft?.image_original_url : selectedNft?.image_preview_url)} alt="NFT image" />

                                                </>
                                            )) : (<img className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={formatImageUrl(selectedNft?.image_original_url !== null ? selectedNft?.image_original_url : selectedNft?.image_preview_url)} alt="NFT image" />)}
                                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                                <div>
                                                    <h1 className="text-white text-2xl md:text-3xl title-font font-medium ">{selectedNft?.name}</h1>
                                                    <p className="text-sm  title-font text-gray-400 font-SpaceMono">Created on:</p>
                                                    <p className="text-sm  title-font text-gray-400 font-SpaceMono">{formatDate(selectedNft?.collection.created_date)}</p>
                                                </div>
                                                <div className="mt-5">
                                                    <p className="text-sm  title-font text-gray-400 tracking-widest font-SpaceMono">Owned By</p>
                                                    <div className="flex gap-3 items-center text-white">

                                                        <p className="text-xs md:text-sm">{selectedNft?.creator.address}</p>
                                                    </div>
                                                </div>
                                                {/* description */}
                                                <div className="mt-5">
                                                    <p className="text-sm  title-font text-gray-400 tracking-widest font-SpaceMono">Description:</p>
                                                    {selectedNft?.description !== null ? (<p className=" font-WorkSans">{selectedNft?.description}</p>) : (<span className="bg-red-100 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">No Description Available</span>)}
                                                </div>
                                                <div className="mt-5">
                                                    <p className="text-sm  title-font text-gray-400 tracking-widest font-SpaceMono">Details:</p>
                                                    <div className="flex flex-col">
                                                        <button onClick={buyNft} className='flex gap-2 mt-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-900 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-900 dark:focus:ring-gray-700'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                                            </svg>
                                                            <p className="leading-relaxed font-WorkSans">Buy On Opensea.</p>
                                                        </button>
                                                        {selectedNft?.external_link && (<button onClick={externalUrl} className='flex text-center gap-2 mt-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-900 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-900 dark:focus:ring-gray-700'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                                            </svg>
                                                            <p className="leading-relaxed font-WorkSans">View Original.</p>
                                                        </button>)}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition >
    )
}

export default Modal