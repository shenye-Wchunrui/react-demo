/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-24 23:41:25
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-24 23:46:22
 * @FilePath: \my-react-ts\src\custom.d.ts
 * @Description: *.d.ts文件只包含类型声明，不包含逻辑。不会被编译，也不会被webpack打包
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
// 声明css关键词
// 表示只要import css文件时都会遵循一下约定
// 这个约定会将值导出为约定对象
declare module '*.css' {
    const css: { [key: string]: string }
    export default css;
}
