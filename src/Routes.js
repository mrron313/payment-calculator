import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ClimbingBoxLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import routeDefinitions from './routeDefinitions';

const Routes = props => {
    const pageVariants = {
        initial: {
            opacity: 0,
            scale: 0.99,
            width: '100%',
            height: '100%',
        },
        in: {
            opacity: 1,
            scale: 1,
        },
        out: {
            opacity: 0,
            scale: 1.01,
        },
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.4,
    };
    
    const SuspenseLoading = () => {
        return (
          <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
            <div className="d-flex align-items-center flex-column px-4">
              <ClimbingBoxLoader color={'#0153a3'} loading={true} />
            </div>
            <div className="text-muted font-size-xl text-center pt-3">
              Please wait while we load the view...
            </div>
          </div>
        );
    };

    return (
        <Suspense fallback={<SuspenseLoading />}>
            <Switch>
                {routeDefinitions.map((route, key) => {
                    const Layout = route.layout;
                    return (
                        <Route path={[route.url]} key={key}>
                            <Layout>
                                <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                                <Route
                                    component={route.component}
                                />
                                </motion.div>
                            </Layout>
                        </Route>
                    );
                })}
            </Switch>
        </Suspense>
    );
};

export default Routes;
