import React from 'react';
import useScreenWidth from '../../Hooks/useScreenWidth';

export default function Logo({ alwaysShowText = false }) {
    const isMobile = useScreenWidth() < 768;

    return (
        <div className='logo' style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src="/images/logo%20(3).png"
                alt="Keerthan V logo"
                style={{
                    display: 'block',
                    width: isMobile ? '5.5rem' : '8.5rem',
                    height: isMobile ? 'auto' : 'auto',
                    maxHeight: isMobile ? '2.8rem' : '3.4rem',
                    objectFit: 'contain',
                }}
            />
        </div>
    );
}
