const express = require('express')
const app = express()
const port = 3001

const { Book } = require('./model/book.model');

async function getBooks() {
	const books = await Book.findAll();
	return books;
}

async function createBook() {
	const body = {
		id: null,
		title: 'Best JS',
		author: 'Yeng Tst',
		release_date: '2022-02-10',
		subject: 2
	}
	const books = await Book.create(body)
	return books;
}

async function updateBook() {
	const body = {
		title: 'Kayengxiong JavaScript',
		author: 'Kyeng Tst',
	}
	const books = await Book.update(body, {
		where: {
			id: 3
		}
	})
	return books;
}

app.get('/', async (req, res) => {
	const books = await getBooks()
	res.json(books)
})

app.get('/post', async (req, res) => {
	const books = await createBook()
	res.json(books)
})

app.get('/update', async (req, res) => {
	const books = await updateBook()
	res.json(books)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})