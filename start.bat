@echo off
IF NOT EXIST node_modules (
	call npm install
)
npm start