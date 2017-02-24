declare var require: any;

import * as React from "react";
const styles = require('./hello.css');

const helloBlock = (
    <div className={styles.test}>
        <h1>Hello World!</h1>
        <p>Hellow World! ^_^</p>
    </div>
);

export class Hello extends React.Component<undefined, undefined> {
    render() {
        return helloBlock;
    }
}