import React from 'react'

const MyName2 = ({ name }) => {
  return (
    <div>
      MyName2는 함수형 컴포넌트입니다.
      받아온 props는 {name} 입니다.
    </div>
  )
}

// MyName2.defaultProps = {
//   name: '기본이름'
// }

export default MyName2