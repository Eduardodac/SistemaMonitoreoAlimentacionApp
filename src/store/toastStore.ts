import { create } from 'zustand';

export type SeverityType = 'success' | 'info' | 'warn' | 'error' | undefined;

interface State {
    change: boolean;
    initial: boolean;
    severity: SeverityType;
    summary: string;
    detail: string;
    activateToast: (change: boolean, severity: SeverityType, summary: string, detail: string) => void;
}

const useToastStore = create<State>((set) => ({
    change: false,
    initial: true,
    severity:'success',
    summary: '', 
    detail: '',
    activateToast: (change: boolean, severity: SeverityType, summary: string, detail: string)=>{
        set(() => ({ change: change, severity: severity, summary: summary, detail: detail, initial:false }))
    }
}));

export default useToastStore;