export const state = () => ({
    counter: 10,
    categories: [],
    loading: false
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    setCategories(state, categories) {
        state.categories.push(categories);
    },
    setLoading(state, status) {
        state.loading = status
    }
}

export const actions = {

    async getCategories(context) {
        context.commit('setLoading', true);
        const response = await fetch(process.env.CATEGORY_LIST);
        console.log("action run" + process.env.CATEGORY_LIST);
        const data = await response.json();
        const { categories } = data;
        context.commit("setCategories", categories);
        context.commit('setLoading', false);
        return categories;
    }
}

export const getters = {

    categories(state) {
        console.log(state.categories);
        return state.categories[0];
    },
    loading(state) {
        return state.loading;
    }
}