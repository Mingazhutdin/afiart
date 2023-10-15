import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routerConfig } from "shared/config/routerConfig/routerConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = () => {

   
    return (
        <Suspense fallback={<div className="page-wrapper">{<PageLoader />}</div>}>
            <Routes>
                {
                    Object.values(routerConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<div className="page-wrapper">{element}</div>}
                        />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

