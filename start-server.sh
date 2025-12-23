#!/bin/bash

# Simple local web server for testing
# This script starts a local web server on port 8000

PORT=8000

# Check if port is already in use
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Port $PORT is already in use!"
    echo ""
    echo "A server is already running. Choose an option:"
    echo "  1. Open the existing server in browser (recommended)"
    echo "  2. Stop the existing server and start a new one"
    echo "  3. Cancel"
    echo ""
    read -p "Enter your choice (1/2/3): " choice
    
    case $choice in
        1)
            echo ""
            echo "🌐 Opening existing server in browser..."
            open http://localhost:$PORT
            exit 0
            ;;
        2)
            echo ""
            echo "🛑 Stopping existing server..."
            PID=$(lsof -ti:$PORT)
            kill $PID 2>/dev/null
            sleep 1
            echo "✅ Server stopped"
            ;;
        3)
            echo ""
            echo "❌ Cancelled"
            exit 0
            ;;
        *)
            echo "Invalid choice. Exiting."
            exit 1
            ;;
    esac
fi

echo "🚀 Starting local web server..."
echo "📂 Serving files from: $(pwd)"
echo ""
echo "🌐 Open your browser and go to:"
echo "   http://localhost:$PORT"
echo ""
echo "💡 Tip: Keep this terminal open while testing"
echo "   Press Ctrl+C to stop the server"
echo ""
echo "================================"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
# Fallback to Python 2
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer $PORT
else
    echo "❌ Error: Python is not installed"
    echo "Please install Python to use this local server"
    exit 1
fi
