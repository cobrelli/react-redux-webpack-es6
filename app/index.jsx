import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Hello } from "./components/Hello.jsx";
import { Counter } from './components/Counter.jsx'
import reducers from './reducers/index.jsx';
import styles from './index.css';

const store = createStore(reducers);

const init = () => render(
    <div className={styles.main}>
        <Hello />
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />
    </div>,
    document.getElementById("example")
);

init();
store.subscribe(init);