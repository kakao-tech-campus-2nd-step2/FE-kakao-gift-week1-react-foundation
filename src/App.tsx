import './App.css';
import { Global } from '@emotion/react';
import resetStyle from '@/assets/styles/resetStyle';

function App() {
  return (
    <>
      <Global styles={resetStyle} />
      <div>하이</div>
    </>
  );
}

export default App;
