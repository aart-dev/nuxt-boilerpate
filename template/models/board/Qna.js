/**
 * Faq
 * Deokin 2019.01.24
 * */
export default class PostDetail {
  constructor ({id = '', title = '', content = '', answer = '', regDate = '', fullname = '', categories = '') {
    this.id = id
    this.title = title
    this.content = content
    this.answer = answer
    this.regDate = regDate
    this.fullname = fullname
    this.categories = categories
  }
}
