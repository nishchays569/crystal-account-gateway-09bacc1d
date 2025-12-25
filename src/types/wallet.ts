
interface WalletCard {
    id: number;
    label: string;
    amount: string;
    color: "red" | "blue" | "green" | "purple" | "orange";
    src: string;
    badge: string;
  }
  interface ApiWallet {
    id: number;
    userId: number;
    type: "F_WALLET" | "I_WALLET" | "M_WALLET" | "BONUS_WALLET";
    balance: string;
    createdAt: string;
    updatedAt: string;
  }

  export type {WalletCard,ApiWallet}