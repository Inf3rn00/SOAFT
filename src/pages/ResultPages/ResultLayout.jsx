import { Outlet } from 'react-router-dom';

const ResultLayout = () => {
    return (  
      <div>
        <Outlet /> {/* This will render the matched child route */}
      </div>
    );
}

export default ResultLayout;