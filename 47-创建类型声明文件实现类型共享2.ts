// 2.ts

// 把 下面这个类型 写了多次
// type PropsT = { x: number; y: number }

// (2) 类型共享文件     推荐
import { PropsT } from './48-typeDeclarationFile'

let p2: PropsT = {
  x: 10,
  y: 20
}