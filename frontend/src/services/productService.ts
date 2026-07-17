import type { Product } from '../types';

const API_URL = 'http://localhost:8081/api/products';

export const productService = {
    getAllProducts: async (): Promise<Product[]> => {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return response.json();
    }
};
