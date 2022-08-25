/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-25 21:17:39
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-25 22:20:08
 * @FilePath: \my-react-ts\src\components\ShoppingCart.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React, { Component } from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
/**
 * 定义props和state类型
 */
interface Props {}
interface State {
  isOpen: boolean;
}
/**
 * class类声明传递三个参数
 * 1：props 用于组件间的参数传递
 * 2：state 组件自己的状态
 * 3：SS 自定义数据
 */
// <Props, State>传递进去组件泛型
export default class ShoppingCart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // console.log(e);
    // target 描述的是事件发生的元素
    // e.target
    // currentTarge 描述的是事件处理绑定的元素
    // e.currentTarget
    // 转换e.target的类型，使用as关键字
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  };

  // 表示在UI渲染前的声明周期，我们可以在这个生命周期拿到自己想要的SS自定义数据
  // getSnapshotBeforeUpdate() {}
  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button} onClick={this.handleClick}>
          <FiShoppingCart />
          <span>购物车2（件）</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    );
  }
}
