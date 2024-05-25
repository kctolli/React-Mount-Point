import { StrictMode, ReactNode, memo, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

export const getRoot = (id: string = "root") => {
    const container = document.getElementById(id);
    return ReactDOM.createRoot(container!);
}

export const Loading = memo(
    ({children}: {children: ReactNode}): ReactNode => (
        <Suspense fallback={<h2>Loading...</h2>}>
            {children}
        </Suspense>
    )
);

export const Loading2 = Loading;

export const Loading3 = memo(
    ({children}: {children: ReactNode}): ReactNode => (
        <Suspense fallback={<h3>Loading...</h3>}>
            {children}
        </Suspense>
    )
);

export const mount = (
    children: ReactNode, 
    id: string = "root"
) => (
    getRoot(id).render(
        <StrictMode>
            {children}
        </StrictMode>
    )
);

export const mountSuspense = (
    children: ReactNode, 
    id: string = "root"
) => (mount(<Loading> {children} </Loading>, id));

export default mount;
