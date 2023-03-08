import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Pagination from "../../components/Pagination";
import INft from "../../models/nftInterface";
import NftList from "./NftList";
import Modal from "./Modal";


const NftPage = () => {

    const [selectedNft, setSelectedNft] = useState<INft>();
    const [isOpen, setIsOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);


    const { state } = useLocation()
    const navigate = useNavigate()


    function closeModal() {
        setIsOpen(false)
    }

    function openModal(nft: INft) {
        setSelectedNft(nft);
        setIsOpen(true)
    }


    useEffect(() => {
        if (state === null) {
            navigate('/')
        }

    }, [state]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = state?.nft?.ownedNfts?.filter((nft: INft) => nft?.error === undefined)?.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    console.log(state?.nft);

    if (state?.nft?.ownedNfts?.length === 0) {
        return (
            <div className="p-3 h-screen flex flex-col items-center justify-center">
                <div className="-mt-64">
                    <h1 className="text-2xl text-white md:text-2xl lg:text-4xl font-Rajdhani text-center">The List is empty</h1>
                    <h1 className="text-lg font-light text-white md:text-xl lg:2xl font-Rajdhani text-center">There are no NFT's in this address</h1>
                </div>

            </div>
        )
    }
    return (
        <div className="p-3 mt-5 md:mt-10 min-h-screen">
            <NftList currentPosts={currentPosts} openModal={openModal} />
            <Pagination postsPerPage={postsPerPage}
                totalPosts={state?.nft?.ownedNfts.length}
                paginate={paginate}
                currentPage={currentPage} />
            <Modal
                closeModal={closeModal}
                isOpen={isOpen}
                selectedNft={selectedNft}
            />
        </div>
    )
}

export default NftPage





