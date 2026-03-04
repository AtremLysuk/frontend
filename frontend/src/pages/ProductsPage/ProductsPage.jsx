
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './ProductsPage.module.scss';
import ProductCard from './components/ProductCard/ProductCard';
import {
  clearFilter, fetchProducts, fetchProductTypes, setSelectedType
} from '../../redux/slices/productsSlice.js';
import usePageAnimation from "../../hooks/usePageAnimation.js";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const {
    filteredProducts, productTypes, selectedType, loading, error
  } = useSelector(state => state.products);
  const container = usePageAnimation();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductTypes());
  }, [dispatch]);

  const handleTypeChange = (e) => {
    const type = e.target.value;
    if (type === 'all') {
      dispatch(clearFilter());
    } else {
      dispatch(setSelectedType(type));
    }
  };

  if (loading && filteredProducts.length === 0) {
    return (
      <section className={styles.products}>
        <div className="text-center py-5">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Загрузка...</span>
          </div>
          <p className="mt-2 text-secondary">Загрузка продуктов...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.products}>
        <div className="alert alert-danger" role="alert">{error}</div>
      </section>
    );
  }

  return (
    <section
      className={`${styles.products} bg-body-secondary`}
      aria-labelledby="products-title"
      ref={container}
    >
      <header className={`${styles.products__header} bg-body-secondary mb-5 rounded`}>
        <div className={styles.products__headerInner}>

          <h1 id="products-title" className={styles.products__title}>
            Продукты <span className={styles.products__count}>/ {filteredProducts.length}</span>
          </h1>

          <div className={styles.products__filters}>
            <label className={styles.products__filterGroup}>
              <span className={styles.products__filterLabel}>Тип:</span>
              <select
                value={selectedType || 'all'}
                onChange={handleTypeChange}
                className={styles.products__filter}
              >
                <option value="all">Все</option>
                {productTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </label>

            <label className={styles.products__filterGroup}>
              <span className={styles.products__filterLabel}>Спецификация:</span>
              <select className={styles.products__filter} disabled>
                <option>Все</option>
              </select>
            </label>
          </div>

        </div>
      </header>

      <div className={styles.products__content}>
        {filteredProducts.length > 0 ? (
          <div className={styles['products__scroll-wrapper']}>
            <div className={styles.products__list}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.products__empty}>
            <p className="text-center text-secondary py-5">
              Нет продуктов{selectedType && ` типа "${selectedType}"`}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;