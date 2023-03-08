import ReactPlayerComp from '../../../../components/ReactPlayerComp'
import INft from '../../../../models/nftInterface'
import { formatImageUrl } from '../../../../utils/formatImageUrl'
import { getFileFormat } from '../../../../utils/getFileFormat'

interface INftCard {
    nft: INft,
    openModal: (arg: INft) => void
}


const NftCard = ({ nft, openModal }: INftCard) => {

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer  transform transition duration-500 hover:scale-110" onClick={() => openModal(nft)}>
            <div className="h-80">
                {getFileFormat(nft?.metadata?.image) === ('.mp4' || '.mov') ? (

                    <ReactPlayerComp
                        imageUrl={nft?.metadata?.image}
                    />
                ) : (
                    <>
                        <img className="rounded-t-lg h-full w-full" src={formatImageUrl(nft?.metadata?.image)} alt="" />
                    </>
                )}

            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold font-WorkSans tracking-tight text-gray-900 dark:text-white">{nft?.metadata?.name}</h5>
                </a>
                {/* price */}
                <div className="flex justify-between text-white my-3">
                    <div className="flex gap-3 flex-col">
                        <p className="text-xs text-gray-400 font-SpaceMono">Floor Price</p>
                        <h4>{nft?.contractMetadata?.openSea?.floorPrice} </h4>
                    </div>
                    <div className="flex gap-3 flex-col">
                        <p className="text-xs text-gray-400 font-SpaceMono">Token Type</p>
                        <h4 className='font-SpaceMono'>{nft?.contractMetadata.tokenType}</h4>
                    </div>
                    <div className="flex gap-3 flex-col">
                        <p className="text-xs text-gray-400 font-SpaceMono">Highest Bid</p>
                        <h4 className='font-SpaceMono'>0.33 wETH</h4>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NftCard