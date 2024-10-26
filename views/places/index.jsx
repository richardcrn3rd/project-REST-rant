const React = require('react')
const Default = require('../default')
function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className='col-sm-6'>
                <h2>
                    <a href={`/places/${place.id}`} >
                        {place.name}
                        </a>
                    </h2>
                <p className='text-center'>
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Default>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
                <a href="/places/new">
                    <button className="btn-primary">NEW!!</button>
                </a>
            </main>
        </Default>
    )
  }
  

module.exports = index