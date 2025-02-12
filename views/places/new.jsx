const React = require('react')
const Def = require('../default')

function new_form (data) {
    // console.log(data)
    let message = ''
        if (data.message) {
            message = (
                <h4 className="alert-danger">
                    {data.message}
                </h4>
            )
        }
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>

            <form method="POST" action="/places/${data.place.id}?_method=PUT">

                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control"  id="city" name="city" />
                    </div>

                    <div>
                        <label htmlFor="state">State</label>
                        <input className="form-control"  id="state" name="state" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control"  id="cuisines" name="cuisines" required />
                    </div>

                <input className="btn btn-primary" type="submit" value="Add Place" />
            </form>
          </main>
        </Def>
    )
}


module.exports = new_form

