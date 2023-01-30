import './style.css'
import { callbacksComponent } from './src/concepts/02-callbacks'
import { promiseComponet } from './src/concepts/03-promices'
import {evironmetsComponet} from './src/concepts/01-enviroments'
import javascriptLogo from './javascript.svg'
import { promiseRaceComponet } from './src/concepts/04-promise-race'
import { asyncComponet } from './src/concepts/05-async'
import { asyncAwaitComponet } from './src/concepts/06-async-await'
import { asyncAwait2Component } from './src/concepts/07-async-await'
import { forAwaitComponent } from './src/concepts/08-for-await'
import { generartorComponent } from './src/concepts/09-generators'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
     
    </div>

  </div>
`
const element = document.querySelector('.card')
// evironmetsComponet(element);
// callbacksComponent(element);
// promiseComponet(element); 
// promiseRaceComponet(element); 
// asyncComponet(element); 
// asyncAwaitComponet(element);
// asyncAwait2Component(element);
// forAwaitComponent(element);
generartorComponent(element);