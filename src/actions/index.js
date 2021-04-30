import axios from 'axios'
export const GET_WORDS = 'GET_WORDS'
export const ANS_WORD = 'ANS_WORD'
export const MIS_WORD = 'MIS_WORD'
const ROOT_URL = 'http://localhost:3000'
const QUERYSTRING = `?user_id=7`
export const getWords = () => async dispatch=>{
    const response = await axios.get(`${ROOT_URL}/posts/quiz${QUERYSTRING}`)
    dispatch({ type: GET_WORDS, response })
    // GET_WORDSに対応するreducerにresponseを渡す
}
export const ansWord = (values) => dispatch => {
    console.log(values)
    const response = axios.put(`${ROOT_URL}/posts/quiz/c${QUERYSTRING}`,values)
    dispatch({ type: ANS_WORD, response })
    console.log(response)
}
export const misWord = values => dispatch => {
    const response = axios.put(`${ROOT_URL}/posts/quiz/m${QUERYSTRING}`,values)
    dispatch({ type: MIS_WORD, response })
    console.log(response)
}