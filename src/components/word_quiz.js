import React, {Component} from 'react';
import {connect} from 'react-redux';
import ROOT_URL, {getWords, ansWord, misWord} from '../actions';
import _ from 'lodash';
class WordQuiz extends Component{
    constructor(props){
     super(props);
     this.state={
        value: 5,
        msg: null,
        cm: null,
     };
     this.handleChange=this.handleChange.bind(this);
     this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount=()=>{
        this.props.getWords(window.location.search)
    }

    renderWords(){
        if(this.props.words.words === undefined || this.props.words.words.length > 3 ){
        return <div>4つ以上の単語を登録してください
        <a href = {ROOT_URL}>単語アプリに戻る</a></div>
        }else{
        return <div className="question">
            {this.props.words.word.word}
            <form onSubmit={this.handleSubmit}>
            {this.props.words.words.map((item,i) => <label key={i}><input type="radio" value={item.word} onChange={this.handleChange} checked={this.state.value === item.word}/>{item.meaning}</label>)}
            <p><input type="submit" value="回答"/></p>
            {this.state.msg && <p><strong>{this.state.msg}</strong><a href={"/"+this.props.location.search}>次の問いへ</a></p>}
            </form>
            <a href = {ROOT_URL}>単語アプリに戻る</a></div>
        }
    }
    handleChange(e){
        console.log(e.target.value)
        e.persist()
        this.setState({value: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.props.words.word.word === this.state.value){
            this.setState({msg: "正解です", cm:"c"})
            this.props.ansWord(this.props.words.word,this.state)
        }else{
            this.setState({msg: "不正解です", cm:"m"})
            this.props.misWord(this.props.words.word,this.state)
        }
    }
    render(){
        const props = this.props
        return(
            <React.Fragment>
                {this.renderWords()}
            </React.Fragment>
        ) 
    }
}
const mapStateToProps = state =>({ words: state.words })
const mapDispatchToProps = ({ getWords, ansWord, misWord })

export default connect(mapStateToProps, mapDispatchToProps)(WordQuiz)