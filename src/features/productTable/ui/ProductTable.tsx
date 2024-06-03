import React from 'react';
import ProductCategoryRow from '../../../features/productTable/ui/ProductCategoryRow';
import ProductRow from '../../../entities/product/ui/ProductRow';
import { Product } from '../../../entities/product/model/types';
import styles from './ProductTable.module.css';

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const rows: JSX.Element[] = [];
  let lastCategory: string | null = null;

  products.forEach((product, index) => {
    const key = `product-${product.category}-${product.name}-${index}`;
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={`category-${product.category}`}
        />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={key}
      />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className={styles.categoryRow}>{rows}</tbody>
    </table>
  );
};

export default ProductTable;

