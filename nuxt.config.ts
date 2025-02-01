import ElementPlus from 'element-plus'
export default defineNuxtConfig({
  // 其他配置项
  nitro: {
    // 生产服务器端口配置
    devServer: {
      port: 3001 // 开发环境端口（可选）
    },
    // 生产环境端口（优先级低于环境变量）
    server: {
      port: 3001 // 显式指定生产端口
    }
  },
  buildModules: [
    '@vueuse/head/nuxt'
  ],
  plugins: [
    { src: '~/plugins/element-plus', mode: 'client' }
  ],

  compatibilityDate: '2025-01-31',
})