const API_ENDPOINT = "https://api.taylor.rest";

const request = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw {
            message: error.message,
            status: error.status
        };
    }
};

export const api = {
    // quotes 가져오는  요청
    getQuotes: async () => {
        try {
            const data = await request(API_ENDPOINT);
            return {
                isError: false,
                data: data
            };
        } catch (error) {
            return {
                isError: true,
                error: error
            };
        }
    },

    // image 가져오는 요청
    getImage: async () => {
        try {
            const data = await request(`${API_ENDPOINT}/image`);
            return {
                isError: false,
                data: data
            };
        } catch (error) {
            return {
                isError: true,
                error: error
            };
        }
    }
};
