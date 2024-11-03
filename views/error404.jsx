const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops!!! sorry, we can't find this page!</p>

              <div>
                Photo by Luke Miller <img src="/images/luke-miller-LSd5sX9ThiI-unsplash.jpg"/>
            </div>
          </main>
      </Def>
    )
  }
  
module.exports = error404;
