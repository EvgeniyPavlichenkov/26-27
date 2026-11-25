import { useEffect, useState, useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Count} from './Count';
import { useCount, useLocalStorageCount } from './useCount'


// render = вызов функции компонентов
// rerender = повторный вызов функции компонентов
// rerender происходит только в двух случаях:
//   - изменение состояния компонента (локальное состояние). Хук useState
//   - "изменение props компонента" = ререндере родительского компонента


// Component lifecycle
// - mount (первый рендер компонента) 
// - update (ререндер компонента)
// - unmount (удаление компонента из дерева элементов)

function App() {
  // const [count, setCount] = useState(0)

  // const onButtonClick = () => {
  //   setCount((count) => count + 1);
  // }

  // const state = useState(12);
  // state[0] - значение состояния
  // state[1] - функция для обновления состояния

  // const count = state[0];
  // const setCount = state[1];


  const a = useRef(10);

  const {count, setCount} = useLocalStorageCount();

  const onButtonClick = () => {
    setCount(count + 1);
    a.current = a.current + 1;
  }

  console.log(a.current);

  const renderCountComponent = () => {
    if (count === undefined || count >= 10) {
      return null;
    }

    return (
      <Count countValue={count}></Count>
    );
  }


  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={onButtonClick}
        >
          Count is {count}
        </button>

        {renderCountComponent()}

        {/* {count !== undefined ? <Count countValue={count}></Count> : null} */}
        
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
