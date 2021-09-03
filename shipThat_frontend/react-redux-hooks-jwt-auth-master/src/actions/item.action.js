import { itemService } from '../services/item.service'
import { history } from '../helpers/history'

export const itemActions = {
    add
};


function add(item) {
    return dispatch => {
        // dispatch(request(item));
        itemService.add(item)
            .then(
                item => {
                    console.log("Item added successfully") 
                    history.push('/ads');
                    // dispatch(success());
                    // history.push('/profile');
                    // dispatch(alertActions.success('Item Added successfully'));
                }
                //,
                // error => {
                //     dispatch(failure(error.toString()));
                //     dispatch(alertActions.error(error.toString()));
                // }
            );
    };

    // function request(item) { return { type: itemConstants.ADD_REQUEST, item } }
    // function success(item) { return { type: itemConstants.ADD_SUCCESS, item } }
    // function failure(error) { return { type: itemConstants.ADD_FAILURE, error } }
}

