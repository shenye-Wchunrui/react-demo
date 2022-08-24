/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-24 22:59:06
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-25 00:01:43
 * @FilePath: \my-react-ts\src\components\Robot.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React from "react";
import styles from "./Robot.module.css";

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
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Robot;
