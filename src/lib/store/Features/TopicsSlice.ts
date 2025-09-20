import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Topic, TopicsResponse } from '../../../types/Api';



interface TopicsState {
    topics: TopicsResponse;
    selectedTopic: Topic | null;
}

const initialState: TopicsState = {
    topics: {},
    selectedTopic:null
};

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {

        setTopicsList(state, action: PayloadAction<TopicsResponse>) {
            state.topics = action.payload;
        },
        selectedTopic(state, action: PayloadAction<Topic>) {
            state.selectedTopic = action.payload;
        },

        addTopic(state, action: PayloadAction<Topic>) {
            const topic = action.payload;
            if (!state.topics[topic.category]) {
                state.topics[topic.category] = [];
            }
            state.topics[topic.category].push(topic);
        },


    },
});

export const {
    setTopicsList,
    selectedTopic,
    addTopic
} = topicsSlice.actions;

export default topicsSlice;