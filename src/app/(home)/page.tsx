import type { NextPage } from 'next';

import { ProductList } from '@/components/product-list';

const Home: NextPage = () => {
    return (
        <main className='mx-auto mt-5 max-w-3xl'>
            <ProductList />
        </main>
    );
};

export default Home;
