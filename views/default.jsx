const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'></link>
                <link rel='stylesheet' href='/css/style.css'></link>
            </head>
            <body>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/places">PLACES</a></li>
                    <li><a href="/places/new">Adding Places</a></li>
                </ul>
            </nav>
                {html.children}
            </body>
            <footer>
                Copyright 2024 - NC SW DEV
            </footer>
        </html>
    )
  }

module.exports = Def;
