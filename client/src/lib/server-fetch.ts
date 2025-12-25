import { getCookie } from "@/services/auth/tokenHandlers";

const BACKEND_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:5000/api";

const serverFetchHelper = async(endpoint: string, options: RequestInit): Promise<Response> =>{
    const {headers,...restOption} = options;
    const accessToken = await getCookie("accessToken");
    
    if (!accessToken) {
        console.log("No access token found");
    }

    const fullUrl = `${BACKEND_API_URL}${endpoint}`;
    console.log("Fetching:", fullUrl, options);

    const response = await fetch(fullUrl,{
         headers:{
            ...headers,
            ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
         },
         ...restOption
    })
    return response;
}

export const serverFetch = {
    get: async (endpoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endpoint, { ...options, method: "GET" }),

    post: async (endpoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endpoint, { ...options, method: "POST" }),

    put: async (endpoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endpoint, { ...options, method: "PUT" }),

    patch: async (endpoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endpoint, { ...options, method: "PATCH" }),

    delete: async (endpoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endpoint, { ...options, method: "DELETE" }),

}