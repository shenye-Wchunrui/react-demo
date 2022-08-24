/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-24 22:06:11
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-24 23:51:28
 * @FilePath: \my-react-ts\src\App.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React from "react";
import styles from "./App.module.css";
import mnData from "./mockdata/Robot.json";
import Robot from "./components/Robot";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
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
