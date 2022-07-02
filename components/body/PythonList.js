import Card from './Card';
import classes from './ListContainer.module.css';
import { FrontData, PyData } from '../data';


export default function PythonList(props) {
    // const data = PyData;
    // const title = props.title;
    return (
        <div className={classes.list}>
            <div className={classes.list_title}>
                <h2>AI &#38; Big-Data Projects</h2>
            </div>
            <div className={classes.cards}>
                {
                    PyData.map(obj => {
                        return (
                            <Card data={obj} key={obj.id} blank={true} />
                        )
                    })
                }
            </div>
        </div>
    );
};