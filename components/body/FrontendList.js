import Card from './Card';
import classes from './ListContainer.module.css';
import { FrontData, PyData } from '../data';


export default function FrontendList(props) {
    // const data = props.data;
    // const title = props.title;
    return (
        <div className={classes.list}>
            <div className={classes.list_title}>
                <h2>Front-End Projects</h2>
            </div>
            <div className={classes.cards}>
                {
                    FrontData.map(obj => {
                        return (
                            <Card data={obj} key={obj.id} blank={false}/>
                        )
                    })
                }
            </div>
        </div>
    );
};