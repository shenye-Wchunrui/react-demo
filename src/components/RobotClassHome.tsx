/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-26 22:33:41
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-26 22:35:36
 * @FilePath: \my-react-ts\src\components\RobotClassHome.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React, { Component } from "react";
import styles from "../App.module.css";
import Robot from "./Robot";
import logo from "./assets/images/logo.svg";
import ShoppingCart from "./ShoppingCart";

interface Prop {}
interface State {
  // 如果没有必要定义固定类型，则定义为any，可以保证代码的灵活性
  robotGallery: any[];
  count: number;
}

class RobotClassHome extends Component<Prop, State> {
  // 生命周期的第一个阶段：初始化
  // 初始化组件：state
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0,
    };
  }

  // 在组件创建好DOM元素后，在组件被挂载的时候调用
  componentDidMount() {
    console.log(1);

    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          robotGallery: data,
        })
      );
  }

  // 生命周期第二阶段：更新
  // 在组件接收到一个新的prop时调用
  // componentWillReceiveProps; // 组件即将被废弃，如果一定要使用
  // 使用替代的静态函数
  // state getDerivedStateFromProps(nextProps, prevProps) {
  //   console.log(nextProps, prevProps);
  // }
  // 组件更新后调用
  componentDidUpdate() {}

  // 生命周期第三个阶段：销毁
  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img className={styles.appLogo} src={logo} alt="" />
          <p className={styles.appTitle}>Robot机器人售卖</p>
        </div>
        <button
          onClick={() => {
            // 如果第一个参数为函数，则拿到前一个生命周期的状态
            // 第二个为回调函数，则是拿到更新后state的值
            this.setState(
              (preState, preProps) => {
                // console.log(preState, preProps);
                return {
                  count: preState.count + 1,
                };
              },
              () => {
                console.log("count:", this.state.count);
              }
            );
          }}
        >
          click
        </button>
        <span>cuont: {this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((item, index) => (
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
}

export default RobotClassHome;
