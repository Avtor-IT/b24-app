import React from "react";
import BX24API from "../utils/bx24";
import styles from "./b24.module.css";

function B24() {
    let userName = '';
    async function foo() {
        const result = await BX24API.callMethod('user.current');
        // userName = result.result.NAME;
        // return <div>{userName}</div>;
        return result.result.NAME;
    }
    return ( 
        <div>
            <button onClick={foo} className={styles.box}>Some button</button>
            <p>{userName}</p>
        </div>
    )
}

export default B24;