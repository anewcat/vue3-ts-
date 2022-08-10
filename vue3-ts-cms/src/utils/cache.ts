class LocalCache {
  // 保存缓存,value值类型不确定序所以用any
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
    // 所有值通过JSON.stringify转换为要存储的字符串
  }
  // 获取缓存内容
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  // 删除缓存
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  // 清空缓存
  clearCache() {
    window.localStorage.clear()
  }
}
export default new LocalCache()
