# AWS Cloud Practitioner Roadmap

An interactive visualization of the AWS Cloud Practitioner certification roadmap, built with React, TypeScript, and Vite.

## Features

- Interactive tree-like visualization of AWS services
- Animated connections between related services
- Responsive design
- Modern UI with smooth animations
- Checkable items to track progress

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd aws-roadmap
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technology Stack

- React
- TypeScript
- Vite
- Framer Motion (animations)
- React Flow (tree visualization)
- Styled Components (styling)
- Material-UI (components)

## Project Structure

```
src/
  ├── components/     # React components
  ├── types/         # TypeScript type definitions
  ├── data/          # Roadmap data
  ├── styles/        # Global styles
  └── App.tsx        # Main application component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
