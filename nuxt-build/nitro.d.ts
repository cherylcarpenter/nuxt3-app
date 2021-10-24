declare module '@nuxt/nitro' {
  interface InternalApi {
    '/api/home': ReturnType<typeof import('../server/api/home').default>
    '/api/hello': ReturnType<typeof import('../server/api/hello').default>
  }
}
export {}