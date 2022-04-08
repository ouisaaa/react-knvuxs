import React from 'react';
import './style.css';

//리엑트는 사용자 정의 태그를 사용을 할때 function을 이용함
//또한 무조건 대문자로 정의해서 사용을 해야됌
//리액트에서는 사용자 정의 태그를 컴포넌트라고 부름
function Header() {
  return (
    <header>
      <h1>
        <a href="/">React</a>
      </h1>
    </header>
  );
}
//실습1
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a href={'/read/' + t.id}>{t.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
export default function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hellow, WEB"></Article>
    </div>
  );
}
