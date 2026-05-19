import { Footer } from '@/shared/components/Footer';
import { TopBar } from '@/shared/components/TopBar';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Outlet />
      <Footer />
    </div>
  );
}
