import { GET_SMURFS, 
  GET_SMURFS_SUCCESS, 
  GET_SMURFS_FAILURE, 
  NEW_SMURF_START, 
  NEW_SMURF_FAILURE } from '..actions'

const initialstate=
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: '',
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer= (state= initialstate, action) =>{
  switch(action.type){
    case GET_SMURFS:
      return{
        ...state,
        err:'',
        fetchingSmurfs: true,
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        err:'',
        smurfs: action.payload,
      }
    case NEW_SMURF_START:
      return{
        smurfs: action.payload
      }
    case GET_SMURFS_FAILURE:
      default:
        return state;
  }
}