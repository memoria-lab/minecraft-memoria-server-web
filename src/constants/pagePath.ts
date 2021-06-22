/**
 * 画面ごとのURL
 */
const PAGE_PATH: PagePathProps = {
  INDEX: '/',
  ERROR: '/error',
}

type PagePathProps = {
  [PAGE: string]: string
}

export default PAGE_PATH
