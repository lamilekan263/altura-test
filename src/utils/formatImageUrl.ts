

export function formatImageUrl(url: string|undefined) {
    if (url?.startsWith('ipfs://')) {
          const newUrl =   url.replace("ipfs://", "https://ipfs.io/ipfs/")
           return newUrl
            
    } 
    return url;
}