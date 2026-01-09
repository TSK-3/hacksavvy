import { create } from 'zustand';

interface RegisterDialogStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setIsOpen: (open: boolean) => void;
}

export const useRegisterDialog = create<RegisterDialogStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setIsOpen: (open) => set({ isOpen: open }),
}));
