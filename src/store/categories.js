const initialState = {
    categoryList: [
        {
            id: 'fff111fff1',
            name: 'FOOD',
            description: 'Eat whatever you want, and if someone tries to lecture you about your weight, eat them too!',
        }
    ],
    activeCategory: '',
    activeDescription: '',
}

export default function categoryReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            return { ...state, activeCategory: payload.category, activeDescription: payload.description };
        case 'INACTIVE':
            return initialState;
        default:
            return state;
    }
}

export function active (category, description) {
    return {
        type: 'ACTIVE',
        payload: {
            category,
            description
        }
    };
}

export function inactive (){
    return {
        type: 'INACTIVE'
    };
}
