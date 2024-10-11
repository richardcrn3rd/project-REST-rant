const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
            <footer>
                Copyright 2024 - NC SW DEV
            </footer>
        </html>
    )
  }

module.exports = Def;
