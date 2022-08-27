/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-24 22:06:11
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-27 16:57:53
 * @FilePath: \my-react-ts\src\App.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
// import mnData from "./mockdata/Robot.json";
import Robot from "./components/Robot";
import RobotDiscount from "./components/RobotDiscount";
import logo from "./assets/images/logo.svg";
import ShoppingCart from "./components/ShoppingCart";
// import CountCom from "./components/CountCom";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  // 只要组件或者页面发生变化的时候都会调用useEffect钩子
  /**
   * 传入两个参数
   * 1.第一个是匿名行数，执行后的回调函数
   * 2.第二个是数组，放状态的列表，如果数组为空，则是模拟componentDidMount这个声明周期，若数组为空，useEffect会死循环的重新渲染页面
   */
  useEffect(() => {
    document.title = `点击次数${count}`;
  }, [count]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setRobotGallery(data));
  // }, []);

  // 使用async await异步模式
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setRobotGallery(data);
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img className={styles.appLogo} src={logo} alt="" />
        <p className={styles.appTitle}>Robot机器人售卖</p>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <span>cuont: {count}</span>
      <ShoppingCart />
      {!error || (error !== "" && <div>网站错误：{error}</div>)}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((item, index) =>
            index % 2 === 0 ? (
              <RobotDiscount
                key={index}
                id={item.id}
                name={item.name}
                email={item.email}
              ></RobotDiscount>
            ) : (
              <Robot
                key={index}
                id={item.id}
                name={item.name}
                email={item.email}
              ></Robot>
            )
          )}
        </div>
      ) : (
        <h2>loading 加载中</h2>
      )}
    </div>
  );
};

export default App;
