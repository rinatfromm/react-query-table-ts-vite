import React from 'react';
import SearchBar from '../../../shared/ui/SearchBar';
import ProductTable from './ProductTable';
import { Product } from '../../../entities/product/model/types';

const FilterableProductTable: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};

export default FilterableProductTable;