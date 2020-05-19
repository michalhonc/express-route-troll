Troll users of your Express app. Redirect them to rick roll song or 5GB file download when they hit known secure route.

## install
```
npm i -S express-route-troll
```

## usage
```js
const express = require('express')
const app = express()
const port = 3000
const routeTroll = require('express-route-troll')

app.use(routeTroll())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
```

## custom settings
Specify routes or redirectUrl for your custom needs

`routes` - array of routes (`req.path`)
`redirectUrl` - url string

```js
app.use(routeTroll({
    routes: ['/.env', '/wp-admin'],
    redirectUrl: 'https://example.com'
}))
```
