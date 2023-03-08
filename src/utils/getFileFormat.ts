export const  getFileFormat =(fileFormat: string | undefined): string | undefined => {
    if (!fileFormat) {
        return ''
    }
    return fileFormat.slice(-4);
}