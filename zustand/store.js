import { create} from 'zustand'
export const firebaseStore = create((set) =>( {
    email: '',
    password: '',
    setEmail: (value) => set((state) => ({ email: value })),
    setPassword: (value) => set((state)=>({password: value}))
}))