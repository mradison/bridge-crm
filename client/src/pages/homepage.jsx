import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';


function Homepage({ TasksValue }) {

    return(
        <main className='main'>
                <h1>Bridge CRM</h1>
                <h3>The working person's Customer Relationship Management tool</h3>
            <div className='homepageLayout'>
                <div className='leftColumn'>
                        <img className="frontPics" src="badbusiness.png"/>
                    <p className="LCText">
                        Sign up to start the free experience!  From here you can create or modify your contacts, put them into groups, and add your activities all online in your own personal environment.
                    </p>
                        <br/>
                        <Link className="LCLink" to='signup'>Click here to sign up for free!</Link>
                    </div>
                <div className='rightColumn'>
                        <img className="frontPics" src="goodbusiness.png"/>
                    <p className="RCText">
                        The full version of this program has all of the features that are on the free tier, except you get the following:  Bragging rights.  Offline installations.  More bragging rights.
                        </p>
                        <br/>
                        <Link 
                        className="RCLink"
                        to='cart'>Click here to buy the full experience!!! (not really)</Link>
                </div>
                <section className="contentSection">
                {TasksValue ? <Tasks/> : null}
                </section>
            </div>
        </main>
    );
};
    export default Homepage;