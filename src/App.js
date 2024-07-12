import './App.css';
const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
function App() {  
  return <FilterProductTable products={PRODUCTS}></FilterProductTable>
}

function SearchBar() {
  return (
    <form>
      <input type='text' placeholder='Search...'>
      </input>
      <label>
        <input type='checkbox'/>
        
        Only Show product in stocks
      </label>
    </form>

  );
}

function ProductCategoryRow({category}) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({product}) {

  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({products}) {
  const rows = [];
  let lastCategory = null;
  products.forEach((product)=> {
    if (product.category !== lastCategory ) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category}></ProductCategoryRow>
      );
    }
    rows.push(
      <ProductRow product={product} key={product.name}></ProductRow>
    );
    lastCategory = product.category;

  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

function FilterProductTable({products}) {
    return (
      <div>
        <SearchBar></SearchBar>
        <ProductTable products={products}></ProductTable>
      </div>
    );
  
}

export default App;
