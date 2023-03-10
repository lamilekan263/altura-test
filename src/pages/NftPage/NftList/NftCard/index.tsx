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

                {nft?.image_original_url !== null ? ( getFileFormat(nft?.image_original_url) === ('.mp4' || '.mov') ? (

                    <ReactPlayerComp
                        imageUrl={nft?.image_original_url}
                    />
                ) : (
                    <>
                        <img className="rounded-t-lg h-full w-full" src={formatImageUrl(nft?.image_original_url !== null ? nft?.image_original_url : nft?.image_preview_url)} alt="" />
                    </>
                )) : (<img className="rounded-t-lg h-full w-full" src={formatImageUrl(nft?.image_original_url !== null ? nft?.image_original_url : nft?.image_preview_url)} alt="" />)}
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold font-WorkSans tracking-tight text-gray-900 dark:text-white">{nft?.name}</h5>
                </a>
                {/* price */}
                <div className="flex justify-between text-white my-3">
                    <div className="flex gap-3 flex-col">
                        <p className="text-xs text-gray-400 font-SpaceMono">ID</p>
                        <h4>{nft?.id} </h4>
                    </div>
                    <div className="flex gap-3 flex-col">
                        <p className="text-xs text-gray-400 font-SpaceMono">Symbol</p>
                        <h4 className='font-SpaceMono'>{nft?.asset_contract.symbol}</h4>
                    </div>
                    <div className="flex gap-3 flex-col">
                        <p className="text-xs text-gray-400 font-SpaceMono">Token Type</p>
                        <h4 className='font-SpaceMono'>{nft?.asset_contract.schema_name}</h4>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NftCard