import '@/styles/globals.css';

import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppType } from 'next/app';

import { api } from '@/utils/api';

export const MyApp: AppType<{ session: Session | null }> = props => {
    const {
        Component,
        pageProps: { session, ...pageProps }
    } = props;

    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
