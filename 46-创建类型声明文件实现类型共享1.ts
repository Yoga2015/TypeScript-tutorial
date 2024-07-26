// 1.ts

// (1)、把 下面这个类型 写了多次    
// type PropsT = { x: number; y: number }

// (2) 类型共享文件     推荐
import { PropsT } from './48-typeDeclarationFile'

let p1: PropsT = {
  x: 10,
  y: 20
}