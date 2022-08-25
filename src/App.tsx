/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-24 22:06:11
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-25 21:34:36
 * @FilePath: \my-react-ts\src\App.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React from "react";
import styles from "./App.module.css";
import mnData from "./mockdata/Robot.json";
import Robot from "./components/Robot";
import logo from "./assets/images/logo.svg";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img className={styles.appLogo} src={logo} alt="" />
        <p className={styles.appTitle}>Robot机器人售卖</p>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {mnData.map((item, index) => (
          <Robot
            key={index}
            id={item.id}
            name={item.name}
            email={item.email}
          ></Robot>
        ))}
      </div>
    </div>
  );
}

export default App;
