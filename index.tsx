import {createRoot} from 'react-dom/client';
import { 
    StrictMode, 
    ReactNode, 
    ReactElement, 
    Suspense,
    memo, 
} from 'react';

export type ReactComponent = ReactElement | ReactNode | JSX.Element | null;
export type TODO = unknown | null | undefined | any;

export type childrenType = {
    children: ReactComponent;
}

export const getRoot = (id: string = "root") => {
    const container = document.getElementById(id);
    return createRoot(container!);
}

export const Loading = memo(
    ({children}: childrenType): ReactComponent => (
        <Suspense fallback={<h2>Loading...</h2>}>
            {children}
        </Suspense>
    )
);
export const Loading2 = Loading;

export const Loading3 = memo(
    ({children}: childrenType): ReactComponent => (
        <Suspense fallback={<h3>Loading...</h3>}>
            {children}
        </Suspense>
    )
);

export const mount = (
    children: ReactComponent, 
    id: string = "root"
) => (
    getRoot(id).render(
        <StrictMode>
            {children}
        </StrictMode>
    )
);

export const mountSuspense = (
    children: ReactComponent, 
    id: string = "root"
) => (mount(<Loading> {children} </Loading>, id));

export default mount;
