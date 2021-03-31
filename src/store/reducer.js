import {ADD_TAG_LIST, REMOVE_TAG_LIST, SET_ROUTER} from './actions'

const defaultState = {
    active: '1',
    openKeys: [],
    tagList: [
        {key: '1', label: '首页', link: '/home/main', openKeys: []}
    ],
}

export default (state = defaultState, action) => {
    if(action.type == SET_ROUTER){
        let data = JSON.parse(JSON.stringify(state))
        data.active = action.value.key;
        data.openKeys = action.value.openKeys;
        return data;
    }
    if(action.type == ADD_TAG_LIST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.tagList.push(action.value);
        newState.openKeys = action.value.openKeys;
        return newState;
    }
    if(action.type == REMOVE_TAG_LIST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.tagList.splice(action.value, 1);
        if(newState.tagList.length > 0){
            newState.openKeys = newState.tagList[newState.tagList.length - 1].openKeys;
            console.log(newState.tagList[newState.tagList.length - 1].key)
            console.log(newState.tagList[newState.tagList.length - 1])
            newState.active = newState.tagList[newState.tagList.length - 1].key;
        }
        return newState;
    }
    return state;
}