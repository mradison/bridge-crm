// TODO: ADD STARTER CODE
import { useQuery } from '@apollo/client';
import Tasks from '../components/Tasks';

function Homepage({ TasksValue }) {

    return(
        <main>
            <div>
                <h1>Welcome!</h1>
                <section className="contentSection">
                {TasksValue ? <Tasks/> : null}
                </section>
            </div>
        </main>
    );
}
    export default Homepage;