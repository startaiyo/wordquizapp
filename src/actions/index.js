import axios from 'axios'
export const GET_WORDS = 'GET_WORDS'
export const ANS_WORD = 'ANS_WORD'
export const MIS_WORD = 'MIS_WORD'
const ROOT_URL = 'http://localhost:3000'
const QUERYSTRING = `?user_id=`
export const getWords = () => async dispatch=>{
    console.log(window.location.search)
    const response = await axios.get(`${ROOT_URL}/posts/quiz/${window.location.search}`)
    dispatch({ type: GET_WORDS, response })
    // GET_WORDSに対応するreducerにresponseを渡す
}
export const ansWord = (values) => async dispatch => {
    const response = await axios.put(`${ROOT_URL}/posts/quiz/c${QUERYSTRING}${values.user_id}`,values)
    dispatch({ type: ANS_WORD, response })
}
export const misWord = values => async dispatch => {
    const response = await axios.put(`${ROOT_URL}/posts/quiz/m${QUERYSTRING}${values.user_id}`,values)
    dispatch({ type: MIS_WORD, response })
}