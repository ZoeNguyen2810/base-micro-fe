import React, { Suspense } from 'react';

// import component từ remote "products"
const RemoteProductList = React.lazy(() => import('products/ProductList'));

export default function App() {
  return (
    <main style={{fontFamily: 'sans-serif', padding: 24}}>
      <h1>Container (host)</h1>
      <p>Component dưới đây được tải từ remote <code>products</code> qua Module Federation:</p>

      <Suspense fallback={<p>Đang tải remote...</p>}>
        <RemoteProductList />
      </Suspense>
    </main>
  );
}
