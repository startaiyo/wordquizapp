import _ from 'lodash'
import {GET_WORDS, ANS_WORD, MIS_WORD} from '../actions'

export default (words = {words:[{created_at: "2021-04-29T02:39:10.772Z",id: 66,judge: null,meaning: "バナナ",updated_at: "2021-04-29T02:39:10.772Z2",user_id: 7,word: "banana"},{created_at: "2021-04-29T02:39:10.772Z",id: 60,judge: null,meaning: "バナナ",updated_at: "2021-04-29T02:39:10.772Z2",user_id: 7,word: "banana"}],word:{created_at: "2021-04-29T02:39:10.772Z",id: 67,judge: null,meaning: "バナナ",updated_at: "2021-04-29T02:39:10.772Z2",user_id: 7,word: "banana"}}, action) =>{
    switch(action.type){
        case GET_WORDS:
            console.log(action.response.data)
            return action.response.data
        case ANS_WORD:
        case MIS_WORD:
        console.log(action.response.data)
            const data = action.response.data
            return {...words,[data]: data}
        default:
            return words
    }
}