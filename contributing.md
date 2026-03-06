# 🤝 Contributing to Sahay

Thank you for your interest in contributing to **Sahay**! Every contribution — big or small — helps us build a better platform for NGOs and donors across India.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Branch Naming Convention](#branch-naming-convention)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)
- [Reporting Bugs](#reporting-bugs)

---

## 📜 Code of Conduct

By participating, you agree to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

---

## 💡 How Can I Contribute?

### 🐛 Report Bugs
Found something broken? [Open a Bug Report](.github/ISSUE_TEMPLATE/bug_report.md).

### ✨ Suggest Features
Have an idea? [Open a Feature Request](.github/ISSUE_TEMPLATE/feature_request.md).

### 🔧 Fix Issues
Browse [open issues](https://github.com/yourusername/sahay/issues) — issues labelled `good first issue` are great for newcomers.

### 📖 Improve Documentation
Spotted unclear docs, typos, or missing information? PRs for docs are always welcome.

---

## 🚀 Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/sahay.git
   cd sahay
   ```
3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/yourusername/sahay.git
   ```
4. **Install dependencies:**
   ```bash
   cd server && npm install
   cd ../client && npm install
   ```
5. **Set up your `.env`** (see README for required variables)
6. **Run migrations:**
   ```bash
   cd server && npx prisma migrate dev
   ```
7. **Create a new branch** for your work (see below)

---

## 🌿 Branch Naming Convention

```
feature/short-description       # New features
fix/short-description           # Bug fixes
docs/short-description          # Documentation updates
refactor/short-description      # Code refactoring
test/short-description          # Adding tests
chore/short-description         # Maintenance tasks
```

**Examples:**
```
feature/ngo-verification-workflow
fix/contact-form-validation
docs/update-api-endpoints
```

---

## ✍️ Commit Message Guidelines

We follow the **Conventional Commits** standard:

```
<type>(<scope>): <short summary>
```

| Type | When to use |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only changes |
| `style` | Formatting, no logic change |
| `refactor` | Code restructure, no feature/fix |
| `test` | Adding or fixing tests |
| `chore` | Build process, dependency updates |

**Examples:**
```
feat(auth): add Google OAuth login for donors
fix(needs): correct quantity fulfillment calculation
docs(readme): add environment variable instructions
```

---

## 🔁 Pull Request Process

1. **Sync your fork** before starting:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Make your changes** in a dedicated branch (never commit to `main` directly)

3. **Test your changes** thoroughly before submitting

4. **Push your branch:**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request** on GitHub using the PR template

6. **Wait for review** — a maintainer will review within 48–72 hours

7. **Address feedback** — push additional commits to the same branch

8. **Squash & Merge** — maintainers will merge once approved

### PR Requirements Checklist
- [ ] Code follows the project style guide
- [ ] Self-reviewed the diff before submitting
- [ ] No console.log statements left in code
- [ ] Relevant tests added or updated
- [ ] Documentation updated if applicable
- [ ] Linked to the relevant issue (`Closes #123`)

---

## 🎨 Style Guide

### JavaScript / Node.js
- Use `const` and `let`, never `var`
- Use `async/await` over `.then()` chains
- Always handle errors with try/catch
- Use meaningful variable names

### React
- One component per file
- Use functional components with hooks
- Keep components small and focused
- Use Tailwind utility classes for styling

### Database
- All new tables must have `id`, `created_at`, `updated_at`
- Use UUID for primary keys
- Write migrations, never edit the schema directly

---

## 🐛 Reporting Bugs

When reporting bugs, please include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Environment (OS, browser, Node version)

Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md).

---

Thank you for helping make Sahay better. 💚