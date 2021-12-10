const applicationReducer = (applied = [], action) => {
    switch (action.type) {
        case "APPLIED_JOBS":
            return action.applied;
        default:
            return applied;
    }
};

export default applicationReducer;