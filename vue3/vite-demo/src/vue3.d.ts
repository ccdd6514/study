type Lod = {
  show: () => void,
  hide: () => void
}

//编写ts loading 声明文件放置报错 和 智能提示
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
      $loading: Lod
  }
}