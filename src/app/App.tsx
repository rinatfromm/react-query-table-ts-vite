import React from 'react';
import FilterableProductTable from '../features/productTable/ui/ FilterableProductTable';
import { useProducts } from '../features/productTable/model/ useProducts';

const App: React.FC = () => {
  const { data: products, error, isLoading } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      {products && <FilterableProductTable products={products} />}
    </div>
  );
};

export default App;
