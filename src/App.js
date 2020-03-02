import React, { Component } from 'react';
import './App.css'
import MyName from './MyName'
import MyName2 from './MyName2'
import Counter from './Counter'

class App extends Component {
  render () {
    const name = 'react'
    // 스타일은 객체 형태로 작성하며 키는 카멜케이스로
    const appStyle = {
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: '50px',
      textAlign: 'center'
    }
    const value = 2
    return (
      <div style={appStyle}>
        <MyName/>
        <MyName2 name={name}/>
        <Counter/>
        <div>{name}를 배워봅시다.</div>
        <div>1 + 1 은 2일까요?</div>
        {
          // 삼항연산자를 사용한 조건부 렌더링
          1 + 1 === 2
            ? (<div className='Correct-answer'> 맞아요 ! </div>)
            : (<div> 틀려요 ! </div>)
        }
        {
          // and 연산자를 사용한 조건부 렌더링
          1 + 1 === 2 && (<div> 정답 ! </div>)
        }
        {/* 이것도 주석 */}
        <div
          // 이것은 주석
        >숫자 {value}는 ?</div>
        {
          // IIFE 를 사용한 if 문, 화살표 함수 사용가능
          (() => {
            if (value === 1) return (<div>하나</div>)
            if (value === 2) return (<div className='Correct-answer'>둘</div>)
            if (value === 3) return (<div>셋</div>)
          })()
        }
      </div>
    )
  }
}

export default App;
