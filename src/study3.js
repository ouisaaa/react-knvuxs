import React from 'react';
import './style.css';

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
              props.onChangeMode(event.target.id);
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
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];
  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={function () {
          alert('Header');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      <Article title="Welcome" body="Hellow, WEB"></Article>
    </div>
  );
}
