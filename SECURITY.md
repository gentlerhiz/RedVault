# Security Policy

RedVault is a secure file storage product, so we take security reports seriously.

## Supported Versions

Only the latest code on the `main` branch receives security fixes.

## Reporting a Vulnerability

**Please do not open a public issue for security problems.**

Report vulnerabilities privately through GitHub:

1. Go to the [Security tab](https://github.com/gentlerhiz/RedVault/security) of this repository.
2. Click **Report a vulnerability**.
3. Describe the issue, the steps to reproduce it, and the impact you expect.

You can expect an acknowledgement within 72 hours. Once the issue is confirmed, we'll work on a fix and credit you in the advisory unless you'd prefer to stay anonymous.

## Scope

This repository contains the RedVault **frontend** only. In scope:

- Cross-site scripting (XSS) or HTML injection
- Leaking tokens, API keys or user data in the client bundle
- Insecure handling of auth tokens in the browser
- Open redirects

Issues in the backend API should be reported against the backend repository.
