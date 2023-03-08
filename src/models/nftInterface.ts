interface INft {
    contract: {
        address: string
    },
    contractMetadata:
    {
        name: string,
        symbol: string,
        tokenType: string,
        contractDeployer: string,
        deployedBlockNumber: number,
        openSea: {
            collectionName: string,
            description: string,
            discordUrl
            :
            string,
            externalUrl
            :
            string
            floorPrice
            :
            number
            imageUrl
            :
            string
            lastIngestedAt
            :
            string
            safelistRequestStatus
            :
            string
            twitterUsername
            :
            string
        }

    },
    timeLastUpdated: string | undefined,
    metadata
    :
    { name: string, description: string, image: string, external_url: string, },

    error: string | null,
    image_original_url: string,
    image_preview_url: string,
    collection: {
created_date : string
    },
    creator: {
        address: string
    },
    description: string | null,
    permalink: string,
    name: string
}


export default INft


