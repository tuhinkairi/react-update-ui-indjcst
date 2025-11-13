import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Blog as Tag } from '../../../types/Api';


interface  TagState {
    activeTag: Tag | null,
    TagList: Tag[]
}

const initialState:TagState = {
    activeTag: null,
    TagList: []
}

const TagSlice = createSlice({
    name: 'Tag',
    initialState,
    reducers: {
        setTag: (state, action: PayloadAction<Tag>) => {
            state.activeTag = action.payload;
        },
        setStoreTagList: (state, action: PayloadAction<Tag[]>) => {
            state.TagList = action.payload;
        }
    }
});

export const { setTag, setStoreTagList } = TagSlice.actions;
export default TagSlice;