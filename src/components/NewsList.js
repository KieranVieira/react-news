import React from 'react';
import { connect } from 'react-redux';

import { fetchNews } from '../store/actions';

class NewsList extends React.Component{
    componentDidMount(){
        this.props.fetchNews()
    }

    render(){
        return(
            // this.props.news.map(story => {
            //     return <h1>{story.author}</h1>
            // })
            <h1></h1>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return{
        
    }
}

export default connect(
    mapStateToProps,
    {
        fetchNews
    }
)(NewsList);