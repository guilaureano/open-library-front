import { Footer } from '@/shared/components/Footer';
import { TopBar } from '@/shared/components/TopBar';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />

      <main className="flex-1 w-full mx-auto max-w-6xl px-6 py-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
