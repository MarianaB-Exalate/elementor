class ReducerActions {
	static updateIncludes( state, value, action ) {
		if ( 'add' === action ) {
			if ( state.includes.includes( value ) ) {
				return state;
			}

			return { ...state, includes: [ ...state.includes, value ] };
		} else if ( 'remove' === action ) {
			return { ...state, includes: state.includes.filter( ( item ) => item !== value ) };
		}

		return state;
	}

	static setPostTypes( state, selectedOptions, include ) {
		const includesAction = selectedOptions.length ? 'add' : 'remove';

		state = this.updateIncludes( state, include, includesAction );

		return { ...state, postTypes: selectedOptions };
	}
}

export const reducer = ( state, action ) => {
	switch ( action.type ) {
		case 'SET_TITLE':
			return { ...state, title: action.value };
		case 'ADD_INCLUDE':
			return ReducerActions.updateIncludes( state, action.value, 'add' );
		case 'REMOVE_INCLUDE':
			return ReducerActions.updateIncludes( state, action.value, 'remove' );
		case 'SET_POST_TYPES':
			return ReducerActions.setPostTypes( state, action.value, action.include );
		default:
			return state;
	}
};
