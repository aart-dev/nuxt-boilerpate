/**
 * Faq
 * Deokin 2019.01.24
 * */
import AspectBoard from './AspectBoard'

export default class PostDetail extends AspectBoard {
	constructor ({type = '', thumbnail = '', thumbnailFullUrl = '', pageView = '', seo = '', categories = '', hasPrevious = '', idPrevious = '', hasNext = '', idNext = '', files = '', idUser = ''} = {}) {
		super()
		this.type = type
		this.thumbnail = thumbnail
		this.thumbnailFullUrl = thumbnailFullUrl
		this.pageView = pageView
		this.seo = seo
		this.categories = categories
		this.hasPrevious = hasPrevious
		this.idPrevious = idPrevious
		this.hasNext = hasNext
		this.idNext = idNext
		this.files = files
		this.idUser = idUser
	}
}
