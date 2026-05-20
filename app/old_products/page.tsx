//import List from '@/components/ui/molecules/list'


export default async function Products() {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()

    return( <div className='flex flex-col gap-5' > 
        {/* <List data={products} /> */}
    </div>
    )

}