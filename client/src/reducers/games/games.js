
 import { FETCH_ALL} from '../../constants/actionTypes';
 const gamesReducer = (games = [] , action) => {
     
 
     switch (action.type) {
         case FETCH_ALL:
             return action.payload; 
         default:
            return games;
     }
 
 }
 
 export default gamesReducer;
 
  