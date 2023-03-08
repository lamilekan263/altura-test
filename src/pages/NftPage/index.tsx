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
            <div className="p-3 h-screen flex items-center justify-center">
                <h1 className="text-lg md:text-2xl font-SpaceMono">The List  are empty</h1>
            </div>
        )
    }
    return (
        <div className="p-3 ">
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





