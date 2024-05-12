import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
    jwt: string | null;
    setJWT: (newJWT: string | null) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            jwt: null,
            setJWT: (newJWT) => set({ jwt: newJWT }),
        }), {
        name: "auth store",
        storage: createJSONStorage(()=>sessionStorage),
    }));