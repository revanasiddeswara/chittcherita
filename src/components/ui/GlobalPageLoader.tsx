import { useIsFetching } from '@tanstack/react-query';
import CraftLoader from './CraftLoader';

const GlobalPageLoader = () => {
  const isFetching = useIsFetching();

  if (!isFetching) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-sm">
      <CraftLoader />
    </div>
  );
};

export default GlobalPageLoader;
