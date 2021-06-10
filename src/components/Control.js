import React from 'react'

const Control = ({paused, onPauseToggle }) =>
    <section className="field is-grouped is-grouped-centered is-medium">
        <p className="control">
            <button className="button is-danger is-outlined" 
                    disabled={paused} 
                    onClick={onPauseToggle} >
                Pause!
            </button>
        </p>
        <p className="control">
            <button className="button is-success is-outlined" 
                    disabled={!paused} 
                    onClick={onPauseToggle} >
                Resume!
            </button>
        </p>
    </section>

export default Control