import React from 'react';
import './style.css';
import CardType1 from '../Components/CardType1';
import CardType2 from '../Components/CardType2';
import CardType3 from '../Components/CardType3';

const DemoPage = () => {
  return (
    <main role='main' className='container'>
      <hr />
      <h2>Props 데이터 적용</h2>
      <CardType1
        cate="Category"
        name="홍길동"
        title="부모 컴포넌트에서 prop 전달하기"
      />
      <hr />
      <h2>Props 조건부 적용</h2>
      <CardType2
        isActive="true"
        src="https://d2v80xjmx68n4w.cloudfront.net/gigs/HRn221684828021.jpg"
        title="부모 컴포넌트에서 prop 전달하기"
      />
      <hr />
      <h2>Props 커스텀 추가</h2>
      <CardType3>
        <img src='https://d2v80xjmx68n4w.cloudfront.net/gigs/HRn221684828021.jpg' />
      </CardType3>
      <hr />
    </main>
  );
}
export default DemoPage;