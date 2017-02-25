import * as React from 'react';
import { Button } from 'react-bootstrap';
import styles from './hello.css';

const helloBlock = (
    <div className={styles.test}>
        <h1>Hello World!</h1>
        <p>Hellow World! ^_^</p>
        <Button>Hellou click ^_^</Button>
    </div>
);

export class Hello extends React.Component {
    render() {
        return helloBlock;
    }
}