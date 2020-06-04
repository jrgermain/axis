import cloneDeep from 'clone-deep';

const initialState = {
    test: {
        axes: {
            left: "",
            right: "",
            top: "",
            bottom: ""
        },
        questions: [
        ],
        metadata: {
            name: "New Test"
        }
    }
}

function reducer(state = initialState, action) {
    if (action.type === "SET_AXIS_LABELS") {
        const _state = cloneDeep(state);
        _state.test.axes = action.content;
        return _state;
    }
    return state;
}

export default reducer