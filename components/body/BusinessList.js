import Card from './Card'
import classes from './ListContainer.module.css'
import { BusinessData } from '../data'

export default function BusinessList(props) {
  // const data = props.data;
  // const title = props.title;
  return (
    <div className={classes.list}>
      <div className={classes.list_title}>
        <h2>Business Projects</h2>
      </div>
      <div className={classes.cards}>
        {BusinessData.map(obj => {
          return <Card data={obj} key={obj.id} blank={false} />
        })}
      </div>
    </div>
  )
}
