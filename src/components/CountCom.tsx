/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-26 22:10:32
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-27 15:54:27
 * @FilePath: \my-react-ts\src\components\CountCom.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React, { useState } from "react";

const CountCom: React.FC = () => {
  // useState返回两个数值的数组，第一个是组件的状态state的定义，第二个是更新状态的函数
  // useState传入一个参数为状态的初始值
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
      <span>{count}</span>
    </div>
  );
};

export default CountCom;
