import { create } from 'zustand';

interface AuthState {
  jwt: string | null;
  setJWT: (newJWT: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  jwt: null,
  setJWT: (newJWT) => set({ jwt: newJWT }),
}));