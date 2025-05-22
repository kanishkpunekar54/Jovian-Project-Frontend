# Core Module

The `core` folder contains singleton services, interceptors, and guards that are used across the entire application.

## Purpose
- Provide application-wide services (e.g., AuthService, ApiService)
- Register HTTP interceptors
- Define route guards
- Should be imported **only once** in `AppModule`

## Contents
- `services/`: Singleton services
- `interceptors/`: HTTP interceptors
- `guards/`: Route guards
- `core.module.ts`: Core module definition

> ⚠️ Avoid importing `CoreModule` in feature modules to prevent multiple instances of services.
