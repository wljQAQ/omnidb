import { create } from 'zustand';

type State = {
  firstName: string;
  lastName: string;
};

type Action = {
  updateFirstName: (firstName: State['firstName']) => void;
  updateLastName: (lastName: State['lastName']) => void;
};

export const useTableState = create<State & Action>(set => {
  return {
    firstName: '花开',
    lastName: '富贵',
    updateFirstName: (firstName: string) => set({ firstName }),
    updateLastName: (lastName: string) => set({ lastName })
  };
});
