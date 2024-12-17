import { useState, useCallback } from 'react';

export function usePopover() {
  const [open, setOpen] = useState(false);

  const onOpenChange = useCallback((open: boolean) => {
    setOpen(open);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  return { open, onOpenChange, close };
}
