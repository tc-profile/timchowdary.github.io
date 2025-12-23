#!/bin/bash

# Stop the local development server
PORT=8000

echo "🛑 Stopping local development server on port $PORT..."

# Check if any process is using the port
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    # Get the process ID
    PID=$(lsof -ti:$PORT)
    
    # Kill the process
    kill $PID 2>/dev/null
    
    # Wait a moment
    sleep 1
    
    # Verify it's stopped
    if ! lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
        echo "✅ Server stopped successfully!"
    else
        echo "⚠️  Server still running. Trying force stop..."
        kill -9 $PID 2>/dev/null
        sleep 1
        echo "✅ Server force stopped!"
    fi
else
    echo "ℹ️  No server is currently running on port $PORT"
fi

