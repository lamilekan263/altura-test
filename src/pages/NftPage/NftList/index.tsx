import React from "react";
import INft from "../../../models/nftInterface";
import NftCard from './NftCard';



interface INftList {
    currentPosts: INft[],
    openModal: (arg: INft) => void
}

const NftList = ({ currentPosts, openModal }: INftList) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-around ">
            {currentPosts.map((nft: INft, index: number) => (
                <React.Fragment key={index}>
                    <NftCard nft={nft} openModal={openModal}  />
                </React.Fragment>
            ))}
        </div>
    )
}

export default NftList