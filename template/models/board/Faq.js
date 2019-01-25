/**
 * Faq
 * Deokin 2019.01.24
 * */
export default class Faq {
  constructor ({categories = '', answer = '', question = '', id = ''} = {}) {
    this.id = id
    this.question = question
    this.answer = answer
    this.categories = categories
  }
}
