import _ from 'lodash'
import {GET_WORDS, ANS_WORD, MIS_WORD} from '../actions'

export default (words = {}, action) =>{
    switch(action.type){
        case GET_WORDS:
            console.log(action.response.data)
            return action.response.data
        case ANS_WORD:
        case MIS_WORD:
            console.log(action)
            const data = action.response.data
            return {...words,[data]: data}
        default:
            return words
    }
}