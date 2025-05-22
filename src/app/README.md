# App Folder

This is the root folder of the Angular application and serves as the main entry point for the app's logic and structure.

## Purpose

The `app/` folder contains the core building blocks of the application, including:

- Root component and configuration files
- Application-wide modules and routing
- Core and shared modules
- Feature modules organized by domain
- Layout components for consistent UI structure

## Folder Structure

app/ 
├── core/ # Singleton services, guards, interceptors 
├── shared/ # Reusable components, pipes, directives 
├── features/ # Domain-specific feature modules 
├── layout/ # UI shell components (header, footer, etc.) 
├── app-routing.module.ts # Central routing configuration 
├── app.component.* # Root component files 
├── app.config.ts # Global configuration and providers 
├── app.routes.ts # Functional route definitions

## Notes

- `AppComponent` is the root of the component tree and bootstrapped in `main.ts`.
- `app.config.ts` is used for dependency injection tokens and global settings.
- `app.routes.ts` is used for defining routes in a standalone or functional routing style.
