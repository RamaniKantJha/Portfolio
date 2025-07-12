import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    background: 'var(--gradient-bg)',
                    color: 'var(--color-light)',
                    padding: 'var(--space-lg)',
                    textAlign: 'center'
                }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>
                        Oops! Something went wrong
                    </h2>
                    <p style={{ marginBottom: 'var(--space-lg)', opacity: 0.8 }}>
                        We're sorry, but something unexpected happened. Please try refreshing the page.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            background: 'var(--gradient-primary)',
                            color: 'var(--color-bg)',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            borderRadius: 'var(--radius-md)',
                            cursor: 'pointer',
                            fontWeight: 500,
                            transition: 'var(--transition)'
                        }}
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 