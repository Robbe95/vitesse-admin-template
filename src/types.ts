import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type TableData = {
  headers: Array<Object>
  data: Array<Object>
  pagination: {
    currentPage: Number
    totalPages: Number
    baseUrl: String
  }
  ordered_by: String
}
