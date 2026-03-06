# Contributing to Sahay

Thank you for your interest in contributing to **Sahay**! Every contribution — big or small — helps us build a better platform for NGOs and donors across India.

This guide will help you get started with contributing to the project.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Project Context](#project-context)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Project Roadmap](#project-roadmap)
- [Branch Naming Convention](#branch-naming-convention)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)
- [Reporting Bugs](#reporting-bugs)

---

## Code of Conduct

By participating, you agree to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

We are committed to providing a welcoming and inspiring community for all.

---

## Project Context

### What is Sahay?

Sahay is a two-sided platform that bridges the gap between NGOs and individual donors. The platform creates a transparent, efficient, and trust-based ecosystem where:

- **NGOs** can list their needs — food, clothing, books, medicine, or monetary funds
- **Donors** can fulfill specific requests or list items they wish to donate freely

### Problem We Solve

1. NGOs lack a centralized digital presence to communicate their real-time needs
2. Donors have surplus goods but no reliable, verified channel to connect with NGOs
3. The process is fragmented — phone calls, physical visits, and word of mouth lead to inefficiency

### Our Solution

A verified, structured, and searchable digital marketplace for humanitarian giving — where every need is visible, every donor is empowered, and every donation is traceable.

---

## How Can I Contribute?

### Report Bugs 🐛
Found something broken? [Open a Bug Report](.github/Bug_Report.md).

### Suggest Features 💡
Have an idea to improve Sahay? [Open a Feature Request](.github/Feature_Request.md).

### Fix Issues 🔧
Browse [open issues](https://github.com/pilot32/Sahay/issues) — issues labelled `good first issue` are great for newcomers.

### Improve Documentation 📖
Spotted unclear docs, typos, or missing information? PRs for docs are always welcome.

---

## Development Setup

### Prerequisites

Ensure you have the following installed:

| Requirement | Version | Check Command |
|-------------|---------|---------------|
| Node.js | 18.x+ | `node --version` |
| npm | 9.x+ | `npm --version` |
| Git | 2.x+ | `git --version` |

### Step-by-Step Setup

1. **Fork** the repository on GitHub

2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Sahay.git
   cd Sahay
   ```

3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/pilot32/Sahay.git
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Set up environment variables:**
   ```bash
   cp env_example .env
   ```
   
   Edit `.env` with your local configuration. See `env_example` for all available variables.

6. **Start the development server:**
   ```bash
   npm run dev
   ```

7. **Create a new branch** for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## Project Structure

```
Sahay/
├── .github/                 # GitHub templates and config
│   ├── Bug_Report.md       # Bug report template
│   ├── Feature_Request.md  # Feature request template
│   ├── PULL_REQUEST_TEMP.md
│   └── documentation.md
├── public/                  # Static assets
├── src/                     # Source code
│   ├── assets/             # Images, fonts, etc.
│   ├── App.jsx             # Main React component
│   ├── App.css             # App styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .env_example            # Environment variables template
├── CODE_OF_CONDUCT.md      # Community guidelines
├── CONTRIBUTING.md         # This file
├── LICENSE.txt             # MIT License
├── README.md               # Project documentation
├── SECURITY.md             # Security policy
├── CHANGELOG.md            # Version history
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

---

## Project Roadmap

Understanding our development phases will help you identify where you can contribute:

### Phase 1: Foundation (Current)
*Focus: Frontend UI and design system*

- [x] Core React components and UI library
- [x] Responsive layout and navigation
- [ ] Design system with Tailwind CSS
- [ ] Landing page design
- [ ] Authentication UI (login/signup forms)

**Good for contributors interested in:** React, UI/UX, CSS, Design Systems

### Phase 2: Backend & Authentication
*Focus: Server setup and user management*

- [x] Express.js API server setup
- [x] PostgreSQL database with Subabase 
- [x] User authentication (JWT + OAuth)
- [x] NGO registration API endpoints
- [x] Donor registration API endpoints

**Good for contributors interested in:** Node.js, Databases,Supabase, Security, API Design,Frontend Architecture

### Phase 3: Core Features
*Focus: Main platform functionality*

- [ ] NGO verification workflow
- [ ] Need listing module with categories
- [ ] Donor surplus listing functionality
- [ ] Smart matching algorithm
- [ ] In-app notification system

**Good for contributors interested in:** Full-stack development, Algorithms, Real-time features,System Design(LLD HLD)

### Phase 4: Enhancement & Scale
*Focus: Optimization and advanced features*

- [ ] Admin dashboard
- [ ] Analytics and reporting
- [ ] Mobile-responsive optimizations
- [ ] Performance improvements
- [ ] Testing infrastructure

**Good for contributors interested in:** Performance, Testing, DevOps, Data Visualization

---

## Branch Naming Convention

Use clear, descriptive branch names following these patterns:

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/short-description` | eg:`feature/ngo-registration-form` |
| Bug Fix | `fix/short-description` | eg: `fix/login-validation-error` |
| Documentation | `docs/short-description` | eg: `docs/update-api-endpoints` |
| Refactor | `refactor/short-description` | eg: `refactor/auth-service` |
| Test | `test/short-description` | eg: `test/need-listing-component` |
| Chore | `chore/short-description` | eg: `chore/update-dependencies` |

---

## Commit Message Guidelines

We follow the **Conventional Commits** standard for clear, consistent commit messages:

```
<type>(<scope>): <short summary>
```

### Types

| Type | When to Use | Example |
|------|-------------|---------|
| `feat` | New feature | `feat(auth): add Google OAuth login for donors` |
| `fix` | Bug fix | `fix(needs): correct quantity fulfillment calculation` |
| `docs` | Documentation only | `docs(readme): add environment variable instructions` |
| `style` | Formatting, no logic change | `style(button): fix alignment on mobile` |
| `refactor` | Code restructure, no feature/fix | `refactor(api): reorganize route handlers` |
| `test` | Adding or fixing tests | `test(auth): add unit tests for JWT validation` |
| `chore` | Build process, dependencies | `chore(deps): update React to v19.2` |

### Writing Good Commit Messages

**Do:**
- Use the imperative mood ("add feature" not "added feature")
- Keep the first line under 50 characters
- Reference issues when applicable (`Closes #123`)

**Don't:**
- Use vague messages like "fix bug" or "update code"
- Commit unrelated changes together
- Include sensitive information

---

## Pull Request Process

### Before You Start

1. **Check existing issues/PRs** - Ensure your change hasn't been addressed
2. **Sync your fork** with upstream:
   ```bash
   git fetch upstream
   git checkout main
   git rebase upstream/main
   ```

### Submitting a PR

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** in the dedicated branch (never commit to `main` directly)

3. **Test your changes thoroughly:**
   - Run the dev server: `npm run dev`
   - Run linting: `npm run lint`
   - Test all affected functionality

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat(scope): description of your change"
   ```

5. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub using the [PR template](.github/PULL_REQUEST_TEMP.md)

### PR Requirements Checklist

Before submitting, ensure:

- [ ] Code follows the project style guide
- [ ] Self-reviewed the diff before submitting
- [ ] No `console.log` statements left in code
- [ ] Relevant tests added or updated (when test infrastructure exists)
- [ ] Documentation updated if applicable
- [ ] Linked to the relevant issue (`Closes #123` or `Relates to #123`)

### After Submitting

- **Wait for review** — maintainers will review within 48–72 hours
- **Address feedback** — push additional commits to the same branch
- **Keep your PR updated** — rebase on upstream/main if needed

---

## Style Guide

### JavaScript / React

```javascript
// ✅ Good
const NeedCard = ({ title, urgency, quantity }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="need-card">
      <h3>{title}</h3>
      <span className={`urgency-${urgency}`}>{urgency}</span>
    </div>
  );
};

// ❌ Bad
var NeedCard = function(props) {
  return <div class="need-card"><h3>{props.title}</h3></div>
}
```

**Guidelines:**
- Use `const` and `let`, never `var`
- Use functional components with hooks
- Use `async/await` over `.then()` chains
- Always handle errors with try/catch
- Use meaningful, descriptive variable names
- One component per file
- Keep components small and focused

### CSS / Tailwind

```jsx
// ✅ Good - Use Tailwind utility classes
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
  Submit
</button>

// ❌ Bad - Avoid inline styles
<button style={{ padding: '8px 16px', backgroundColor: 'blue' }}>
  Submit
</button>
```

**Guidelines:**
- Use Tailwind utility classes for styling
- Extract repeated patterns into components
- Follow mobile-first responsive design
- Use semantic color names in custom CSS

### File Organization

```
ComponentName/
├── ComponentName.jsx      # Main component
├── ComponentName.css      # Component styles (if needed)
├── ComponentName.test.jsx # Tests (when test infrastructure exists)
└── index.jsx              # Export
```

---

## Reporting Bugs

When reporting bugs, please include:

### Required Information

- **Steps to reproduce** - Clear, numbered steps
- **Expected behavior** - What should happen
- **Actual behavior** - What actually happened
- **Screenshots** - If applicable, especially for UI bugs

### Environment Details

| Detail | Value |
|--------|-------|
| OS | e.g., Windows 11, macOS 14, Ubuntu 22 |
| Browser | e.g., Chrome 121, Firefox 122 |
| Node.js version | e.g., 18.17.0 |
| Role affected | NGO / Donor / Admin / All |

### Example Bug Report

```markdown
## Bug Description
The need listing form doesn't submit when urgency is set to "Critical"

## Steps to Reproduce
1. Go to 'List a Need' page
2. Fill in all required fields
3. Set urgency to "Critical"
4. Click Submit

## Expected Behavior
Form should submit successfully

## Actual Behavior
Nothing happens, no error message displayed

## Environment
- OS: macOS 14
- Browser: Chrome 121
- Node.js: 20.10.0
```

Use the [Bug Report template](.github/Bug_Report.md) for all bug reports.

---

## Need Help?

- **Questions?** Open a [GitHub Discussion](https://github.com/pilot32/Sahay/discussions)
- **Stuck?** Comment on the issue you're working on
- **Found a security issue?** Email us (see [SECURITY.md](SECURITY.md))

---

Thank you for helping make Sahay better! 💚

Your contributions help NGOs connect with donors and make charitable giving more transparent and efficient for everyone.
