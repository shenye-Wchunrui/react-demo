<!--
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-24 22:06:11
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-27 17:44:50
 * @FilePath: \my-react-ts\README.md
 * @Description: 
 * 
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved. 
-->
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


> tsconfig.json
> noImplicitAny为false不需要显示声明变量的类型any

`react-icons`可以使用多个svg图标库

- setState() 是异步还是同步

> setState是异步更新，同步执行，可传入第二个参数（回调函数），可以拿到this.state的数据


- `useState()` state声明钩子
  + React自带的一个hook函数，声明组件状态
  + 参数可以设置state的初始值
  + 返回值是一个只有两个元素的数组：[状态,状态更新函数]

- `useEffect()` 副作用钩子
  + 可以取代类组件中的生命周期函数`componentDidMount` `componentDidUpdate`和`componentWillUnmount`
  + 给函数式组件添加副作用

- `useContext`处理跨组件的数据传递
- `useReducer`管理全局状态
- `useCallBack`用来处理回调的副作用
- `useRef`返回一个引用的对象，这个对象在整个生命周期中会保持不变


### 自定义高阶组件HOC

> HOC的公式

```
const hoc = higherOrde(wrappedComponent);
```

- 高阶组件（HOC）就是一个返回了组件的函数
- 通过组件嵌套的方法给子组件添加更多的功能
- 接受一个组件作为参数并返回一个经过改造的新组件


### 自定义hook

> 要点

- 函数
- 命名以`use`开头
- 内部可以调用其他的hook函数
- 并非React的特性




















