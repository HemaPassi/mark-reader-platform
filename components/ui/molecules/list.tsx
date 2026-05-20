import Product from './product'
import classes from './list.module.css'

export default function List({data = []}) {
    return ( <div className={classes.container}> 
    { data && data.map(dt => (<Product key={dt.id} product={dt}></Product>))} 
    </div>
    )

}
