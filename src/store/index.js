import { createStore } from 'vuex'
import dummies from '../store/modules/dummies'

const store = createStore({
    modules: {
        dummies,
    },
})

export default store
