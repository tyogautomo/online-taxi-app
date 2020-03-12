import {
  REQUEST_LOCATION,
  REQUEST_POINT_ADDRESS,
  REQUEST_POINT_ADDRESS_SUCCESS,
  REQUEST_POINT_ADDRESS_FAILED
} from '../constant';

const initialState = {
  originPoint: {
    formatted_address: '',
    geometry: {
      location: {
        lat: 0,
        long: 0
      }
    },
    place_id: ''
  },
  isRequestLocation: false
}

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOCATION:
      return {
        ...state
      }
    case REQUEST_POINT_ADDRESS:
      return {
        ...state,
        isRequestLocation: true,
        originPoint: {
          ...initialState.originPoint,
          formatted_address: ''
        }
      }
    case REQUEST_POINT_ADDRESS_SUCCESS:
      return {
        ...state,
        isRequestLocation: false,
        originPoint: action.payload
      }
    case REQUEST_POINT_ADDRESS_FAILED:
      return {
        ...state,
        isRequestLocation: false
      }
    default:
      return { ...state }
  }
};

export { mapReducer };
