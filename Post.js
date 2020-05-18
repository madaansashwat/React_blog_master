import React, { Component } from 'react'
import Items from '../Items'

import Nav from '../components/Nav'

class Post extends Component {
    state = {
        posts: Items
    }

    render() {
        const id = this.props.match.params.post_id


        


        return (
            <div className="container">
                <div className="flexContainer">
                    <div className="rightChild">
                    <div className="post card">
                        <div className="card-content">
                        <h4 className="center"> {this.state.posts[id].title}</h4>
                        <img style={{width: "800px", height:"500px"}} src={this.state.posts[id].img} />
                        <p> {this.state.posts[id].blog} </p>

                    </div>
                    </div>
                    </div>
                    <div className="leftChild">
                        <Nav />
                    </div>
                </div>


            </div>
        )

    }
}

export default Post
