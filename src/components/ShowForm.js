import React from 'react';

const ShowForm = () => {
    return (  
        <form
            className="col-12"
        >
            <div className="row">
                <div className="col-md-4">
                    <input 
                        name="word"
                        className="form-control"
                        type="text"
                        placeholder="Find by Key word"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="genre"
                    >
                        <option value="">-- Select the genre --</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        className="btn btn-block btn-info"
                        type="submit"
                        value="Find!"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default ShowForm;