import {create} from 'zustand';

interface State {
  hoverEditar: boolean;
  hoverEliminar: boolean;
  toggleEditar: () => void;
  toggleEliminar: () => void;
}

const useHorarioStore = create<State>((set) => ({
    hoverEditar: false,
    hoverEliminar: false,
    toggleEditar: () =>
    set((state) => ({
        hoverEditar: !state.hoverEditar,
        hoverEliminar: false,
    })),
    toggleEliminar: () =>
        set((state) => ({
            hoverEditar: false,
            hoverEliminar: !state.hoverEliminar,
        })),
}));

export default useHorarioStore;