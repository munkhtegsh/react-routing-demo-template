import React from 'react';
import Faq from './FAQ';
import { Route, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <h1> About Component </h1>
            <Link to='/about/faq'> FAQ </Link>
            <Route path='/about/faq' component={Faq}/>
        </div>
    )
}
