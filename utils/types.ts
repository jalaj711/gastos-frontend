export interface MinimalLabelType {
  id: number;
  name: string;
  color: string;
}

export interface MinimalWalletType {
  id: number;
  name: string;
  balance: number;
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

export interface UserDataType {
  username: string;
  email: string;
  date_joined: string;
  first_name: string;
  last_name: string;
  labels: MinimalLabelType[];
  wallets: MinimalWalletType[];
}
