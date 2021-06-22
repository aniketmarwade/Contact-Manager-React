import React from 'react';

function AddContact() {
    return (
        <div className="container">
            <h2>Add Contact</h2>
            <div className="ui-form">
                <form>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <button  class="btn btn-primary">Add</button>


                </form>

            </div>
        </div>
    )
}

export default AddContact
