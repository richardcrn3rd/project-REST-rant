const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
            <h1>REST-Rant</h1>

            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>

            <div>
                Photo by Brenda Godinez <img src="/images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg" />
            </div>
          </main>
      </Def>
    )
  }
  

module.exports = home;


