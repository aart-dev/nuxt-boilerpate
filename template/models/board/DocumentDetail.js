/**
 * Faq
 * Deokin 2019.01.24
 * */
export default class PostDetail {
  constructor ({id = '', title = '', title = '', content = '', type = '', executeDate = ''} = {}) {
    this.id = id
    this.title = title
    this.content = content
    this.type = type
    this.executeDate = executeDate
  }
}
