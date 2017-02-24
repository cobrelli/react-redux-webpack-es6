declare var require: any;

import * as React from "react";
const styles = require('./hello.css');

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <h1 className={styles.test}>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}