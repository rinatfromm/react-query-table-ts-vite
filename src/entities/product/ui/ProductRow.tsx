import React from 'react';
import { Product } from '../model/types';
import styles from './ProductRow.module.css';

const ProductRow: React.FC<{ product: Product }> = ({ product }) => {
  const name = product.stocked ? (
    <span className={styles.productName}>{product.name}</span>
  ) : (
    <span className={styles.productNameOutOfStock}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;