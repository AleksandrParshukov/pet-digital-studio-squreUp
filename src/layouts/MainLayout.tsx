import { Outlet, useLocation } from 'react-router';
import { Header } from '../components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { useEffect, useState } from 'react';

export function MainLayout() {
  const [is_disclaimer_open, set_is_disclaimer_open] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handle_link_click = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href="#"]');

      if (link) {
        event.preventDefault();
        set_is_disclaimer_open(true);
      }
    };

    document.addEventListener('click', handle_link_click);

    return () => {
      document.removeEventListener('click', handle_link_click);
    };
  }, []);

  return (
    <>
      <Header />

      <main className="page-transition" key={location.pathname}>
        <Outlet />
      </main>

      <Footer />

      <div className={`modal fade ${is_disclaimer_open ? 'show' : ''}`} onClick={() => set_is_disclaimer_open(false)}>
        <div className="modal__dialog" onClick={(event) => event.stopPropagation()}>
          <div className="modal__content">
            <div className="modal__body">
              <h2 id="disclaimer_title">Demo Website</h2>

              <p>
                This website is a demonstration project. All links and interactive elements are provided for
                demonstration purposes only and do not lead to actual services.
              </p>

              <button className="btn btn-primary" onClick={() => set_is_disclaimer_open(false)}>
                Got it
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
