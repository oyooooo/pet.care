@echo off
setlocal
cd /d "%~dp0"
set "NODE_BIN=node"
where node >nul 2>&1
if errorlevel 1 set "NODE_BIN=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "node_modules\next\dist\bin\next" (
  echo Dependencies are missing. Install Node.js, then run npm ci.
  pause
  exit /b 1
)
echo Pet shop preview: http://127.0.0.1:3000
echo Keep this window open while using the preview. Press Ctrl+C to stop.
"%NODE_BIN%" node_modules\next\dist\bin\next dev --hostname 127.0.0.1 --port 3000
if errorlevel 1 pause
