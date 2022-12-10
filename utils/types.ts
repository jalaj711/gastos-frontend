export interface MinimalLabelType {
    id: number;
    name: string;
}

export interface MinimalWalletType {
    id: number;
    name: string;
}

export interface LabelType {
    id: number;
    name: string;
    created_on: string;
    color: string;
    description?: string;
}


export interface WalletType {
    id: number;
    name: string;
    created_on: string;
    balance: number;
    description?: string;
}

export interface TransactionType {
    id: number;
    name: string;
    description?: string;
    amount: number;
    date_time: string;
    is_expense: boolean;
    labels: MinimalLabelType[];
    wallet: MinimalWalletType;
}
