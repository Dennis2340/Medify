import type { NextPage } from 'next';
import styles from './results.module.css'; 

const SearchResults: NextPage = () => {
  const products = [
    { name: 'fluconazole 2b', weight: '128g', img: 'Frame 22.png' },
    { name: 'fluconazole diflna', weight: '320g', img: 'Frame 22.png' },
    { name: 'fluconazole', weight: '60g', img: 'Frame 22.png' },
    { name: 'fluconazole', weight: '10g', img: 'Frame 22.png' },
    { name: 'fluconazole v', weight: '5g', img: 'Frame 22.png' },
    { name: 'fluconazole p', weight: '20g', img: 'Frame 22.png' }
  ];

  return (
    <div className={styles.searchResults}> 
      {/* Search Bar */}
      <div className={styles.searchBar}>
        <img className={styles.searchIcon} alt="" src="Search.svg" />
        <div className={styles.text}>
          <div className={styles.text1}>fluconazole</div>
        </div>
      </div>

      {/* Product List */}
      <div className={styles.productsParent}>
        {products.map((product, index) => (
          <div className={styles.verticalCard} key={index}>
            <img className={styles.verticalCardChild} alt={product.name} src={product.img} />
            <div className={styles.content}>
              <div className={styles.title}>
                <div className={styles.title1}>{product.name}</div>
                <b className={styles.subtitle}>{product.weight}</b>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters and Sorting */}
      <div className={styles.filterParent}>
        <div className={styles.filter}>
          <div className={styles.title12}>
            <img className={styles.icon} alt="Sort" src="Icon.svg" />
            <div className={styles.title13}>Sort</div>
          </div>
          <img className={styles.arrowDownIcon} alt="Arrow Down" src="Arrow Down.svg" />
        </div>
        <div className={styles.filter}>
          <div className={styles.title12}>
            <img className={styles.icon} alt="Filter" src="Icon.svg" />
            <div className={styles.title13}>Filter</div>
          </div>
          <div className={styles.badge}>
            <div className={styles.div}>2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
