/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-24 22:59:06
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-27 17:49:27
 * @FilePath: \my-react-ts\src\components\RobotDiscount.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext } from "../AppState";
import { useAddToCart } from "./AddToCart";

// 创建一个接口
// 接口定义数据，就是定义父组件传递给子组件的数据
interface RobotProps {
  id: number;
  name: string;
  email: string;
}

// 组件间传递参数使用props传递
// FC代表函数式组件的意思
// <>里面代表就是泛型类型
const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
  const { username } = useContext(appContext);
  const addToCart = useAddToCart();
  return (
    // <appContext.Consumer>
    //   {(value) => {
    //     return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
    // );
    //   }}
    // </appContext.Consumer>
  );
};

export default RobotDiscount;
