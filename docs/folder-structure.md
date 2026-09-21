PLAYWRIGHT-TDD-FRAMEWORK/
├── .github/
│   └── workflows/
│       └── playwright.yml             # CI/CD pipeline automation (GitHub Actions)
├── commons/                           # Reusable framework-wide orchestration layer
│   ├── api/
│   │   └── api-commons.ts             # Custom HTTP request handlers (Postman-like helpers)
│   ├── db/
│   │   └── db-commons.ts              # Database connectors & validator scripts (PostgreSQL)
│   ├── ui/
│   │   └── ui-commons.ts              # Global UI interaction wrapping (custom smart waits)
│   └── ai/
│       └── ai-commons.ts              # AI evaluation utility helpers
├── config/
│   └── config.json                    # Central environment URLs, connections, and timeouts
├── files/                             # Secure flat files handled during tests (PDFs, Excel data)
├── page-object/                       # Isolated Hybrid Page Object Model (POM)
│   ├── page-elements/                 # Strictly static JSON structural maps
│   │   ├── login-page-elements.json   # UI element locators for login screen
│   │   └── home-page-elements.json    # UI element locators for landing page
│   └── page-steps/                    # TypeScript operational classes
│   │   ├── login-page-steps.ts        # UI operational actions using login elements
│   │   └── home-page-steps.ts         # UI operational actions using home elements
├── testdata/                          # Data-Driven TDD engine repository
│   ├── api/ | db/ | ui/ | ai/         # Component data profiles (JSON datasets)
│   └── env-inputs.json                # Global runtime environment profiles
├── tests/                             # Pure test execution execution block files
│   ├── api/                           # Backend standalone validation integration scripts
│   ├── db/                            # Direct database validation scripts
│   ├── ui/                            # Front-facing E2E browser behavior scripts
│   │   └── login-workflow.test.ts     # Clean structural execution scripts using step components
│   └── ai/                            # Specialized intelligence validation scripts
├── test-results/                      # Auto-captured failing state artifacts (Traces/Screenshots)
├── package.json                       # Core dependency library registry and custom execution scripts
├── playwright.config.ts               # Core execution control desk (Workers, browsers, retries)
└── tsconfig.json                      # Strict compiler flags for TypeScript rules
