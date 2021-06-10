import React, {Component } from 'react'
import moment from 'moment'
import Control from './Control'

class countDown extends Component{

    constructor(props){
        super(props);

        this.state = {
            duration : this.getRemainingTime(),
            paused: false,
            st:false
        }
    }
    count = 1;
    
    componentDidMount(){
        
        this.resume()
    }

    componentWillUnmount(){
        this.paused();
        this.setState({st:!this.state.st})
        if(this.state.st){
            window.location.reload(this.state.st
                )
        }
        console.log(this.state.st);
    }

    getRemainingTime(){
       let now = moment(),
           birthday = moment([moment().year() , 5, 22]),
           diff = birthday.diff(now)
        return moment.duration(diff)
        
    }

    onHandlePause = () =>{
        // console.log("onhandle function:",this.state.paused)
        this.setState((prevState, props) =>{
            const paused = !prevState.paused
            if(paused){
                this.componentWillUnmount()
            } else{
                this.componentDidMount()
            }  
            return {paused}

        })
    }

    paused(){
        console.log("inter:",this.inter);
        clearInterval(this.inter);
        
    }
   
    resume(){
        if(this.state.st){
            this.componentDidMount();
        }
        
        // console.log("REsume:",this.state.paused);
        this.inter = setInterval(() =>{
            this.setState({
                duration : this.getRemainingTime(),
                st: !this.state.st
            })
        }, 1000)
        console.log("initial:",this.inter);
    }

    render(){

        const {duration} = this.state;

        return <section className="hero is-dark is-bold is-fullheight has-text-centered">
            <div className="hero-body">
            <div className="container">
                <h1 className="title">
                Birthday is coming up!!
                </h1>  
                <div className="section">
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Days</p>
                        <p className="title">{Math.floor(duration.asDays())}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Hours</p>
                        <p className="title">{duration.hours().toString().padStart(2,0)}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Minutes</p>
                        <p className="title">{duration.minutes().toString().padStart(2,0)}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Seconds</p>
                        <p className="title">{duration.seconds().toString().padStart(2,0)}</p>
                        </div>
                    </div>
                </nav>
                </div>
            <Control paused={this.state.paused} onPauseToggle={this.onHandlePause} />
            </div>
            </div>
      </section>

    }
}

export default countDown
