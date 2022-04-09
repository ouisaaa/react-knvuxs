import React from 'react';
import './style.css';
import { useState } from 'react';
//리엑트는 사용자 정의 태그를 사용을 할때 function을 이용함
//또한 무조건 대문자로 정의해서 사용을 해야됌
//리액트에서는 사용자 정의 태그를 컴포넌트라고 부름
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            //어로우 펑션 function과 같은 역할을 함
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
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
        <a
          id={t.id}
          href={'/read/' + t.id}
          onClick={
            /**  function(event){
            event.preventDefault();
            props.onChangeMode(t.id);
          }
          이것도 가능한 코드*/
            function (event) {
              event.preventDefault();
              props.onChangeMode(Number(event.target.id));
            }
          }
        >
          {t.title}
        </a>
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
  /*const _mode = useState('WELCOME'); //state의 초기값
  //const mode = _mode[0]; // state의
  //const setMode = _mode[1];*/
  const [mode, setMode] = useState('WELCOME'); //이게 위에 3줄 코드와 같은 뜻
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];
  let content = null;
  if (mode == 'WELCOME') {
    content = <Article title="Welcome" body="Hellow, WEB"></Article>;
  } else if (mode == 'READ') {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id == id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  }
  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={function () {
          setMode('WELCOME');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode('READ'); //이것이 실행이 된다면 다시 app 컴포던트가 실행이됌
          setId(_id);
        }}
      ></Nav>
      {content}
    </div>
  );
}
