import { create } from "zustand";

interface User {
    id: number;
    slug: string;
    username: string;
    email: string;
    global_name: string;
    bot: boolean;
    system: boolean;
    accent_color: string;
    premium_type: boolean;
}

interface userStore {
    user: User | null;
    update: (user: User) => void;
}

export const useUserStore = create<userStore>((set) => ({
    user: null,
    update: (user) => set(() => ({ user })),
}));
