import { toast } from 'sonner';

import { ThemeProvider } from '@/context/theme-context.tsx';

import { ModeToggle } from '@/components/mode-toggle.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Toaster } from '@/components/ui/sonner.tsx';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='flex justify-between p-6'>
        <Button onClick={() => toast.error('Event has been created.')}>
          Open Toast
        </Button>
        <ModeToggle />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
