import React from 'react';
import styles from './Content.module.css';
import Intro from './Intro/Intro';
import Maintheme from './Maintheme/Maintheme';
import Wtf from './Wtf/Wtf';
import Oneway from './Oneway/Oneway';
import {Route} from "react-router-dom";

const Content = () => {
    return (
        <div className={styles.wrapper}>
            <Route path="/Intro" component={Intro}/>
            <Route path="/Maintheme" component={Maintheme}/>
            <Route path="/Wtf" component={Wtf}/>
            <Route path="/Oneway" component={Oneway}/>
            {/*<Intro birthday="Date of birth:" date="19 january" city="City:" spb="Saint-Petersburg" social="Social network:" vk="https://vk.com/mika_dev" />*/}
        </div>
    )
}

export default Content;
