import React from "react";
import "./style.css";

//리엑트는 사용자 정의 태그를 사용을 할때 function을 이용함
//또한 무조건 대문자로 정의해서 사용을 해야됌
//리액트에서는 사용자 정의 태그를 컴포넌트라고 부름
function Header(){
  return  <header>
  <h1><a href="/">React</a></h1>
</header>
}
//실습1
function Nav(){
  return <nav>
  <ol>
    <li><a href="/read/1"></a>html</li>
    <li><a href="/read/2"></a>css</li>
    <li><a href="/read/3"></a>js</li>
  </ol>
</nav>
}
function Article(){
  return <article>
  <h2>Welcom</h2>
  Hello, WEB
</article>
}
export default function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}
