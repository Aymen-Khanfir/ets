import * as React from 'react';

function calculateBullets(
  totalItems: number,
  breakpoints: Record<number, number>
) {
  const screenWidth = window.innerWidth;
  let itemsInView = 1;

  for (const [width, items] of Object.entries(breakpoints)) {
    if (screenWidth >= parseInt(width)) {
      itemsInView = items;
    }
  }

  const bulletsCount = Math.ceil(totalItems / itemsInView);
  return { bulletsCount, itemsInView };
}

export const useCarouselBullets = (totalItems: number) => {
  const [bullets, setBullets] = React.useState<number>(0);
  const [itemsInView, setItemsInView] = React.useState<number>(0);

  const breakpoints = React.useMemo(
    () => ({
      1024: 5,
      768: 4,
      640: 3,
      0: 2,
    }),
    []
  );

  React.useEffect(() => {
    const updateBullets = () => {
      const { bulletsCount, itemsInView } = calculateBullets(
        totalItems,
        breakpoints
      );
      setBullets(bulletsCount);
      setItemsInView(itemsInView);
    };

    updateBullets();
    window.addEventListener('resize', updateBullets);

    return () => {
      window.removeEventListener('resize', updateBullets);
    };
  }, [breakpoints, totalItems]);

  return { bullets, itemsInView };
};
