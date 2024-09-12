export declare const retrieveMediaUrl: (mediaId: string) => Promise<import("axios").AxiosResponse<RetrieveMediaResponseData, any>>;
export declare const downloadMedia: (downloadUrl: string) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const downloadMediaById: (mediaId: string) => Promise<{
    data: any;
    messaging_product: "whatsapp";
    url: string;
    mime_type: string;
    sha256: string;
    file_size: string;
    id: string;
}>;
export type RetrieveMediaResponseData = {
    messaging_product: 'whatsapp';
    url: string;
    mime_type: string;
    sha256: string;
    file_size: string;
    id: string;
};
