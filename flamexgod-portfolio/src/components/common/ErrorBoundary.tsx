import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          <div
            className="card"
            style={{
              maxWidth: '500px',
              padding: '3rem',
              background: 'rgba(255, 99, 99, 0.1)',
              border: '1px solid rgba(255, 99, 99, 0.3)'
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}
            >
              😵
            </motion.div>

            <h2
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                color: '#FF6363',
                margin: '0 0 1rem 0',
                fontWeight: 600
              }}
            >
              Oops! Something went wrong
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: '#B4B4B8',
                margin: '0 0 2rem 0',
                lineHeight: 1.6
              }}
            >
              Don't worry, even the best developers encounter bugs! 
              This error has been logged and I'm working on fixing it.
            </p>

            {import.meta.env.DEV && this.state.error && (
              <details
                style={{
                  marginBottom: '2rem',
                  textAlign: 'left',
                  background: 'rgba(42, 42, 47, 0.5)',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  color: '#FF6363'
                }}
              >
                <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>
                  Error Details (Development)
                </summary>
                <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                  {this.state.error.message}
                  {this.state.error.stack}
                </pre>
              </details>
            )}

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <motion.button
                onClick={this.handleRetry}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Try Again
              </motion.button>

              <motion.button
                onClick={() => window.location.reload()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn"
                style={{
                  background: 'rgba(26, 26, 31, 0.8)',
                  border: '1px solid var(--color-border)',
                  color: '#FFFFFF'
                }}
              >
                Reload Page
              </motion.button>
            </div>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}