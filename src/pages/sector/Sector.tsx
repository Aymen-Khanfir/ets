import { useParams } from '@tanstack/react-router';

import MainLayout from '@/components/layouts/main-layout.tsx';
import Sectors from '@/components/shared/sectors.tsx';

function Sector() {
  const { index } = useParams({ from: '/sector/$index' });

  return (
    <MainLayout>
      <p>Description of the sector {index}</p>
      <Sectors />
    </MainLayout>
  );
}

export default Sector;
