import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSmurf } from '../actions'
import { newSmurf } from '../actions'
import Smurf from './smurf'

class SmurfList extends Component {
    state={
        newsmurf:{
            name:'',
            age:'',
            height:'',
        }
    }

    componentDidMount(){
        this.props.getsmurf()
    }
    handlechange = (e) =>{
        e.preventDefault()

        this.setState({
            newsmurf:{
                ...this.state.newsmurf,
                [e.target.name] : e.target.value
            }
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()

            this.props.newSmurf(this.state.newsmurf)
        
    }
    render() {
        return(
            <div>
                <div>{this.props.smurf.map((smurf, id)=> <Smurf key= {id} smurf= {smurf} />)} 
                </div>

                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input onChange= {this.handleChange} type= 'name' placeholder= 'name' name= 'name' value= {this.state.name} />

                        <input onChange= {this.handleChange} type= 'age' placeholder= 'age' name= 'age' value= {this.state.age} />

                        <input onChange= {this.handleChange} type= 'height' placeholder= 'height' name= 'height' value= {this.state.height} />

                        <button value= 'submit'>New Smurf</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        smurfs: state.smurfs
    }
}
export default connect(
    mapStateToProps,
    {getsmurf, newsmurf}
)(SmurfList)