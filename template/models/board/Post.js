/**
 * Faq
 * Deokin 2019.01.24
 * */
export default class PostDetail {
  constructor ({id = '', type = '',  title = '', summary = '', thumbnail = '', pageView = '', regDate = '', categories = '', writer = ''} = {}) {
    this.id = id
    this.type = type
    this.title = title
    this.summary = summary
    this.thumbnail = thumbnail
    this.pageView = pageView
    this.regDate = regDate
    this.categories = categories
    this.writer = writer
  }
}
