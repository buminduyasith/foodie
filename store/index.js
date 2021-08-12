export const state = () => ({
    counter: 10,
    loading: false,
    categories: [],
    items: []
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
    },
    setItems(state, items) {
        state.items = items
    }
}

export const actions = {

    async getCategories(context) {
        context.commit('setLoading', true);
        const response = await fetch(process.env.CATEGORY_LIST);
        const data = await response.json();
        const { categories } = data;
        context.commit("setCategories", categories);
        context.commit('setLoading', false);
        return categories;
    },

    async getItemsByCategory(context, category) {
        //console.log(context);
        context.commit('setLoading', true);
        const response = await fetch(process.env.ITEM_BY_CATEGORY + category);
        const data = await response.json();
        const { meals } = data;
        //console.log(meals);

        context.commit("setItems", meals);
        context.commit('setLoading', false);
        return meals;
        // return categories;
    }
}

export const getters = {

    categories(state) {
        //console.log(state.categories);
        return state.categories[0];
    },
    loading(state) {
        return state.loading;
    },
    items(state) {
        return state.items;
    }
}