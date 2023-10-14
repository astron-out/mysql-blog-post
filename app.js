const express = require('express')
const { query } = require('./data/database')
const fs = require('fs')
const path = require('path')
const uuid = require('uuid')

const db = require('./data/database')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// hosting pages

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/create', function (req, res) {
    res.render('create-post')
})

app.get('/upgrade', function (req, res) {
    res.render('upgrade-post')
})

app.get('/posts', async function (req, res) {
    const query = `
    SELECT * FROM posts
    `
    const [posts] = await db.query(query)
    res.render('posts', {posts: posts})
})

app.get('/posts-vw/:id', async function(req, res) {
    const query = `
    SELECT *
    FROM mypost.posts
    WHERE posts.id = ?
    `
    const [posts] = await db.query(query, [req.params.id])

    const postData = {
        ...posts[0]

    }

    res.render('vw-post', { post: postData })
})

app.post('/posts', async function (req, res) {
    const data = [
        req.body.titleauthor,
        req.body.titlepost,
        req.body.summary,
        req.body.describtion
    ]
    await db.query('INSERT INTO posts (author, title, summary, describtion) VALUES (?)', [
        data,
    ]);
    res.redirect('/posts')
})



app.listen(3000)