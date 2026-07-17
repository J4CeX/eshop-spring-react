export type AccountType = 'PERSONAL' | 'BUSINESS';
export type OrderStatus = 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
export type UserRole = 'ADMIN' | 'USER';

export interface User {
    userId: number;
    email: string;
    passwordHash: string;
    role: UserRole;
    accountType: AccountType;
    createdAt: string;
}

export interface PersonalProfile {
    userId: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
}

export interface BusinessProfile {
    userId: number;
    companyName: string;
    nip: string;
    address: string;
}

export interface Order {
    orderId: number;
    seller: User;
    buyer: User;
    amount: number;
    orderStatus: OrderStatus;
    deliveryAddress: string;
    createdAt: string;
    invoiceRequested: boolean;
    invoiceCompanyName?: string;
    invoiceNip?: string;
    invoiceAddress?: string;
}

export interface Product {
    productId: number;
    seller: User;
    name: string;
    description?: string;
    price: number;
    stockQuantity: number;
    createdAt: string;
}

export interface OrderItem {
    orderItemId: number;
    order: Order;
    product: Product;
    quantity: number;
    priceAtPurchase: number;
}