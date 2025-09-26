Write-Host "Installing dependencies for Asendus Expo Web Project..." -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Download the LTS version and restart your terminal after installation." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Check NPM version
try {
    $npmVersion = npm --version
    Write-Host "NPM version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: NPM is not available!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Installing project dependencies..." -ForegroundColor Cyan

try {
    npm install
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "SUCCESS: All dependencies installed!" -ForegroundColor Green
        Write-Host ""
        Write-Host "To start the development server, run:" -ForegroundColor Yellow
        Write-Host "  npm run web" -ForegroundColor White
        Write-Host ""
        Write-Host "To build for production, run:" -ForegroundColor Yellow
        Write-Host "  npm run build" -ForegroundColor White
    } else {
        throw "NPM install failed"
    }
} catch {
    Write-Host ""
    Write-Host "ERROR: Failed to install dependencies!" -ForegroundColor Red
    Write-Host "Please check your internet connection and try again." -ForegroundColor Yellow
}

Write-Host ""
Read-Host "Press Enter to continue"