# Sahay - Connecting NGOs with Donors

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.txt)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub Issues](https://img.shields.io/github/issues/pilot32/Sahay)](https://github.com/pilot32/Sahay/issues)
[![Good First Issues](https://img.shields.io/github/issues/pilot32/Sahay/good%20first%20issue?label=good%20first%20issue&color=7057ff)](https://github.com/pilot32/Sahay/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

> **Sahay** (meaning "help" in Hindi) is a two-sided platform that bridges the gap between NGOs and individual donors, creating a transparent, efficient, and trust-based ecosystem for humanitarian giving.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Key Features](#key-features)
- [Value Propositions](#value-propositions)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Roadmap](#project-roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

Sahay creates a transparent, efficient, and trust-based ecosystem where NGOs can list their needs — whether it's food, clothing, books, medicine, or monetary funds — and donors can either fulfill these specific requests or list items they wish to donate freely.

Our mission is to become the trusted infrastructure layer for charitable giving, where every need is visible, every donor is empowered, and every donation is traceable.

---

## Problem Statement

Today, donation and charity suffers from three core problems:

| Problem | Impact |
|---------|--------|
| **NGOs lack digital presence** | No centralized way to communicate real-time needs to potential donors |
| **Donors lack verified channels** | Have surplus goods and money but no reliable way to connect with NGOs that need them |
| **Fragmented process** | Phone calls, physical visits, and word of mouth lead to inefficiency, waste, and missed opportunities |

---

## Solution

Sahay solves this by creating a **verified, structured, and searchable digital marketplace for humanitarian giving** — where every need is visible, every donor is empowered, and every donation is traceable.

### How It Works

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│      NGOs       │     │     Sahay       │     │     Donors      │
│                 │     │    Platform     │     │                 │
│  • Register     │────▶│                 │◀────│  • Browse Needs │
│  • List Needs   │     │  • Verification │     │  • Offer Surplus│
│  • Track Status │     │  • Smart Match  │     │  • Contact NGOs │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

---

## Key Features

### For NGOs
- **Registration & Verification** - Secure onboarding with document verification to build trust
- **Need Listing** - List specific needs with categories, urgency levels, and quantities
- **Fulfillment Tracking** - Track donations and communicate with donors
- **Dashboard Analytics** - Insights into donation patterns and donor engagement

### For Donors
- **Browse Real Needs** - Search and filter verified NGO needs by category, location, urgency
- **Surplus Listing** - List items you wish to donate (food, clothing, books, medicine, etc.)
- **Smart Matching** - Get matched with NGOs that need what you're offering
- **Direct Communication** - Connect directly with verified NGOs

### For Platform Administrators
- **NGO Verification Workflow** - Review and approve NGO registrations
- **Content Moderation** - Ensure quality and authenticity of listings
- **Analytics Dashboard** - Platform-wide metrics and insights

---

## Value Propositions

| Stakeholder | Value Delivered |
|-------------|-----------------|
| **NGOs** | Reach thousands of donors digitally. List specific needs with urgency levels and track fulfillment. |
| **Donors** | Browse real needs, offer surplus items, and directly contact verified NGOs. |
| **Society** | Reduces waste, increases giving efficiency, and builds community trust through transparency. |
| **Platform** | Becomes the trusted infrastructure layer for charitable giving in the country. |

---

## Tech Stack

### Frontend (Current)
| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [ESLint](https://eslint.org/) | Code linting |

### Backend (Planned - Phase 2)
| Technology | Purpose |
|------------|---------|
| [Node.js](https://nodejs.org/) | Runtime environment |
| [Express.js](https://expressjs.com/) | Web framework |
| [PostgreSQL](https://www.postgresql.org/) | Relational database |
| [Supabase](https://www.supabase.co/) | ORM for database operations |
| [Supabase S3 Bucket](https://www.supabase.co/) | ORM for database operations |
| [JWT](https://jwt.io/) | Authentication tokens |
| [OAuth 2.0](https://oauth.net/2/) | Social login (Google, etc.) |

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or **bun** as an alternative)
- **Git** for version control

### Installation

1. **Fork the repository** on GitHub

2. **Clone your fork locally:**
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
   # or with bun
   bun install
   ```

5. **Set up environment variables:**
   ```bash
   cp env_example .env
   ```
   Then edit `.env` with your local configuration.

6. **Start the development server:**
   ```bash
   npm run dev
   # or with bun
   bun run dev
   ```

7. **Open your browser** and navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint checks |
| `npm run preview` | Preview production build |

---

## Project Roadmap

### Phase 1: Foundation (Current)
- [ ] Core React components and UI library
- [ ] Responsive layout and navigation
- [ ] Design system with Tailwind CSS
- [ ] Landing page and authentication UI

### Phase 2: Backend & Authentication
- [ ] Express.js API server setup
- [ ] PostgreSQL database with Prisma ORM
- [ ] User authentication (JWT + OAuth)
- [ ] NGO registration API endpoints

### Phase 3: Core Features
- [ ] NGO verification workflow
- [ ] Need listing module with categories
- [ ] Donor surplus listing functionality
- [ ] Smart matching algorithm
- [ ] In-app notification system

### Phase 4: Enhancement
- [ ] Admin dashboard
- [ ] Analytics and reporting
- [ ] Mobile-responsive optimizations
- [ ] Performance improvements

---

## Contributing

We welcome contributions from the community! Whether you're fixing a bug, adding a feature, or improving documentation, your help is appreciated.

### Quick Start

1. Read our [Contributing Guide](CONTRIBUTING.md) for detailed instructions
2. Check out [Good First Issues](https://github.com/pilot32/Sahay/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) for beginner-friendly tasks
3. Review our [Code of Conduct](CODE_OF_CONDUCT.md)

### Ways to Contribute

- 🐛 **Report bugs** using our [Bug Report template](.github/Bug_Report.md)
- 💡 **Suggest features** using our [Feature Request template](.github/Feature_Request.md)
- 📖 **Improve documentation** - fix typos, add examples, clarify instructions
- 🔧 **Submit pull requests** - fix issues or add new features

---

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

---

## Contact

- **GitHub Issues**: [https://github.com/pilot32/Sahay/issues](https://github.com/pilot32/Sahay/issues)
- **GitHub Discussions**: [https://github.com/pilot32/Sahay/discussions](https://github.com/pilot32/Sahay/discussions)
- **Security Issues**: Please report security vulnerabilities via email (see [SECURITY.md](SECURITY.md))

---

<p align="center">
  <strong>Built with ❤️ to help those who help others</strong>
</p>

<p align="center">
  <sub>Sahay - Making charitable giving transparent, efficient, and accessible for everyone.</sub>
</p>
