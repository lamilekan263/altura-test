import { useState, useEffect } from "react";

import Pagination from "../../components/Pagination";
import { getNftsAxios } from "../../services/nft-Service";
import INft from "../../models/nftInterface";
import NftList from "./NftList";
import Modal from "./Modal";
import LoadingComponent from "../../components/LoadingComponent";
import { useLocation, useNavigate } from "react-router-dom";



const NftPage = () => {

    const [selectedNft, setSelectedNft] = useState<INft>();
    const [loading, setLoading] = useState(false)
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
        
        () => navigate('/')
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = state?.nft?.ownedNfts?.filter(nft => nft?.error === undefined)?.slice(indexOfFirstPost, indexOfLastPost);

   
    
    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    if (loading) {
        return (
            <LoadingComponent />
        )
    }
    return (
        <div className="p-3">
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





