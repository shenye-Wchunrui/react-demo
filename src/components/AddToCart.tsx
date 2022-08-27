/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-27 16:59:11
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-27 17:47:36
 * @FilePath: \my-react-ts\src\components\AddToCart.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";
import { RobotProps } from "./Robot";

export const withAddToCart = (
  ChildComponent: React.ComponentType<RobotProps>
) => {
  //   return class extends React.Component {};
  return (props) => {
    const setState = useContext(appSetStateContext);
    const addToCart = (id, name) => {
      setState &&
        setState((state) => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }],
            },
          };
        });
    };
    return <ChildComponent {...props} addToCart={addToCart} />;
  };
};

export const useAddToCart = () => {
  const setState = useContext(appSetStateContext);
  const addToCart = (id, name) => {
    setState &&
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        };
      });
  };
  return addToCart;
};
