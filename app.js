import { client } from './config/prismicConfig.js'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import * as prismicH from '@prismicio/helpers'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Define "require"
const require = createRequire(import.meta.url)

require('dotenv').config()

const express = require('express')
const prismic = require('@prismicio/client')
const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const logger = require('morgan')
const UAParser = require('ua-parser-js')

const app = express()
const port = 3000

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())
app.use(errorHandler())
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const linkResolver = doc => {
    // console.log(doc)
    if (doc.type === 'product') {
        return `detail/${doc.uid}`
    }

    if (doc.type === 'collections') {
        return '/collections'
    }

    if (doc.type === 'about') {
        return '/about'
    }

    return '/'
}

app.use((req, res, next) => {
    const ua = UAParser(req.headers['user-agent'])

    res.locals.isDesktop = ua.device.type === undefined
    res.locals.isTablet = ua.device.type === 'tablet'
    res.locals.isPhone = ua.device.type === 'mobile'

    // console.log(res.locals.isDesktop, res.locals.isTablet, res.locals.isPhone)

    res.locals.ctx = {
        prismic
    }

    res.locals.prismicH = prismicH
    res.locals.numToWord = num => {
        return num === 0 ? 'One' : num === 1 ? 'Two' : num === 2 ? 'Three' : num === 3 ? 'Four' : ''
    }
    res.locals.Link = linkResolver
    next()
})

const handleDefaults = async (client) => {
    const meta = await client.getSingle('meta')
    const preloader = await client.getSingle('preloader')
    const navigation = await client.getSingle('navigation')
    const home = await client.getSingle('home')
    // const collections = await client.getAllByType('collection')
    const collections = await client.getAllByType('collection', {
        fetchLinks: 'product.image'
    })
    const about = await client.getSingle('about')

    const assets = []

    home.data.gallery.forEach(item => {
        assets.push(item.image.url)
    })

    about.data.gallery.forEach(item => {
        assets.push(item.image.url)
    })

    about.data.body.forEach(section => {
        if (section.slice_type === 'gallery') {
            section.items.forEach(item => {
                assets.push(item.image.url)
            })
        }
    })

    collections.forEach(collection => {
        collection.data.products.forEach(item => {
            assets.push(item.products_product.data.image.url)
        })
    })

    console.log('Print****', assets, collections, home)

    return {
        assets,
        collections,
        home,
        about,
        meta,
        preloader,
        navigation
    }
}

app.get('/', async (req, res) => {
    const defaults = await handleDefaults(client)

    res.render('pages/home', {
        ...defaults
    })
})

app.get('/about', async (req, res) => {
    const defaults = await handleDefaults(client)

    // console.log(about.data.body)
    res.render('pages/about', {
        ...defaults
    })
})

app.get('/detail/:uid', async (req, res) => {
    const defaults = await handleDefaults(client)
    const product = await client.getByUID('product', req.params.uid, {
        fetchLinks: 'collection.title'
    })

    // console.log(product.data)
    res.render('pages/detail', {
        ...defaults,
        product
    })
})

app.get('/collections', async (req, res) => {
    // const collections = await client.getAllByType('collection', {
    //     fetchLinks: 'product.image'
    // })
    const defaults = await handleDefaults(client)

    // console.log(collections[0].data.products[0].products_product)
    res.render('pages/collections', {
        ...defaults
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
