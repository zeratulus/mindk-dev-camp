import { QueryClientProvider, QueryClient} from 'react-query';
import './App.css';
import {AppHeaderContainer} from "./containers/header";
import {AppBodyContainer} from "./containers/body";
import {AppHeader} from "./components/header";
import {ErrorBoundary} from "react-error-boundary";
import {ErrorFallback} from "./components/errorFallback";

function App() {

    const queryClient = new QueryClient();

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback('')}>
            <QueryClientProvider client={queryClient}>
                <div className="App">
                    <AppHeaderContainer/>
                    <div className={'app-header-wrapper'}></div>
                    <AppBodyContainer/>
                </div>
            </QueryClientProvider>
        </ErrorBoundary>
    );
}

export default App;
