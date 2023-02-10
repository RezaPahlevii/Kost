import React from 'react'

const FormEditKost = () => {
  return (
    <div>
        <h1 className='title'>Rumah Kost</h1>
        <h2 className='subtitle'>Update Kost</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form >
               
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <imput type="text" className="input" placeholer='Name'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Harga</label>
                        <div className="control">
                            <imput type="text" className="input" placeholer='Harga'/>
                        </div>
                    </div>
                    

                    <form >
                    <div className="field">
                        <div className="control">
                        <button className="button is-success">Update</button>
                        </div>
                    </div>
                </form>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormEditKost