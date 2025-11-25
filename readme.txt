quiz-app/
│
├── index.html
├── tsconfig.json
├── vite.config.ts
├── package.json
│
├── src/
│   ├── main.ts        # entry point (connects everything)
│   ├── quiz/
│   │   ├── questions.ts      # your dummy questions
│   │   ├── render.ts         # handles UI rendering
│   │   ├── logic.ts          # next question, scoring, etc.
│   │   ├── types.ts          # types/interfaces
│   │
│   ├── styles/
│   │   └── style.css
│   │
│   └── utils/
│       └── shuffle.ts        # helper functions
│
└── public/
    └── assets/               # images if needed
