import React,{ Component } from 'react'
import axios from 'axios'

class PostList extends Component{
    constructor(props){
        super(props)

        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        axios.get('abc')
        .then(response=>{
            this.setState({
                posts:response.data
            })
            
        })
    }
}