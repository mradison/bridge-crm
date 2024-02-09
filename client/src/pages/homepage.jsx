// TODO: ADD STARTER CODE
import { useQuery } from '@apollo/client';
import Tasks from '../components/Tasks';
import { Link } from 'react-router-dom';

function Homepage({ TasksValue }) {

    return(
        <main className='main'>
            <div>
                <h1>Bridge CRM</h1>
                <h3>The working person's customer management tool</h3>
                <div className='homepagelayout'>
                    <div class='leftColumn'>
                    {/* todo: make this look pretty*/}
                    <p>Sign up to start the free experience!  From here you can create or modify your contacts, put them into groups, and add your activities all online in your own personal environment.
                        <br/><Link to='signup'>Click here to sign up for free!</Link>
                    </p>
                    </div>
                <div class='rightColumn'>
                    <p>
                        The full version of this program has all of the features that are on the free tier, except you get the following:  Bragging rights.  Offline installations.  More bragging rights.
                        <br/><Link to='cart'>Click here to buy the full experience!!!!!!!!!  (not really)</Link>
                    </p>
                    </div>
                </div>
                <section className="contentSection">
                {TasksValue ? <Tasks/> : null}
                </section>
            </div>
        </main>
    );
}
    export default Homepage;