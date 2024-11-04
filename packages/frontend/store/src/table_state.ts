import { atom } from 'jotai';
import { create } from 'zustand';

const priceAtom = atom(10);
const messageAtom = atom('hello');
const productAtom = atom({ id: 12, name: 'good stuff' });

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
