import Image from 'next/image'
import { ProductModel } from '@/types/product'
import classes from './product.module.css'

export default function Product({product}:ProductModel) {
    const { id, title, description, price, image }= product
console.log(image)
    return (
        <div className={classes.wrapper}>
            <div className={classes['image-wrapper']}>
            <Image className={classes['image']} src={image} alt={title} width="150" height="150"/> 
            </div>
            <h3 className='py-2'>{price}</h3>
             <h2 className='py-2'>{title}</h2>
            {/* <p>{description}</p> */}
        </div>
    )

}