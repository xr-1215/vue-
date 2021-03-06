import {reqCategoryList} from '../../api'

const state = {
     categoryList:[]
}

const mutations = {
    RECEIVE_CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList
    }
}

const actions = {
    async getCategoryList({commit}) {
        const result = await reqCategoryList()
        if (result.code === 200) {
            const categoryList = result.data;
            commit('RECEIVE_CATEGORY_LIST',categoryList)
        }
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}