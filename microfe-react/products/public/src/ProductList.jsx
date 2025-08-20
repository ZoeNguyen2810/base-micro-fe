import React from 'react';

export default function ProductList() {
  const items = [
    { id: 1, name: 'iPhone 15 Pro' },
    { id: 2, name: 'iPad Air' },
    { id: 3, name: 'AirPods Pro' }
  ];
  return (
    <div style={{border:'1px solid #ddd', padding: 16, borderRadius: 12}}>
      <h3>ProductList (remote)</h3>
      <ul>
        {items.map(i => <li key={i.id}>{i.name}</li>)}
      </ul>
    </div>
  );
}
