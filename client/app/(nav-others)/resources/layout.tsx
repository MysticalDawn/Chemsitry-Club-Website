import React from 'react';
import background from '../../../public/resources/background.svg';
import Footer from "@/app/components/desktop/footer";

interface ResourcesLayoutProps {
  children: React.ReactNode;
}

const ResourcesLayout: React.FC<ResourcesLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: '#F3F3F3',
      }}
    >
      <main style={{ minHeight: '100vh' }}>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default ResourcesLayout;
