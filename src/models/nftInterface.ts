interface INft {

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
    name: string,
    external_link: string,
    id: string,
    asset_contract: {
        schema_name: string,
        symbol: string
    }
}


export default INft


