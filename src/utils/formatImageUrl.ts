

export function formatImageUrl(url: string) {
    if (url?.startsWith('ipfs://')) {
          const newUrl =   url.replace("ipfs://", "https://ipfs.io/ipfs/")
           return newUrl
            
    } 
    return url;
}