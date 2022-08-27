/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-27 15:53:26
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-27 16:30:41
 * @FilePath: \my-react-ts\src\appState.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React, { useState } from "react";

interface AppStateValue {
  username: string;
  shoppingCart: {
    items: { id: number; name: string }[];
  };
}

// 设置一个默认的context对象值
const defaultContextValue: AppStateValue = {
  username: "神爷",
  shoppingCart: {
    items: [],
  },
};

interface Props {
  children?: any;
}

// 设置一个context对象
export const appContext = React.createContext(defaultContextValue);
export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);

export const AppStateProvider: React.FC<Props> = (props) => {
  const [state, setState] = useState(defaultContextValue);
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  );
};
