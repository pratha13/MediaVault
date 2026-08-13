import { createSlice } from "@reduxjs/toolkit";
import { toast, Slide } from 'react-toastify';

const initialState = {
    items: (() => {
        try {
            const saved = JSON.parse(localStorage.getItem('collection') || '[]')
            return Array.isArray(saved) ? saved.filter(Boolean) : []
        } catch {
            return []
        }
    })()
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const item = action.payload

            if (!item || !item.id) return

            const alreadyExists = state.items.find(
                existing => existing && existing.id === item.id
            )

            if (!alreadyExists) {
                state.items.push(item)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item && item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collection')
        },
        addedToast: () => {
            toast.success('Added to Collection :) ', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        },
        removeToast: () => {
            toast.error('Removed from Collection :( ', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
    }
})


export const {
    addCollection,
    removeCollection,
    clearCollection,
    addedToast,
    removeToast,
} = collectionSlice.actions;


export default collectionSlice.reducer;