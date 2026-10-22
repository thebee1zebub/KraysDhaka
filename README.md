KRAYS DHAKA — Security & Administration

Security Statement

KRAYS DHAKA is a premium bespoke and made-to-measure tailoring website built with React, TypeScript, and Vite.

Security is an ongoing responsibility. No website can be guaranteed to be completely immune to attacks. This project follows security best practices to reduce the risk of unauthorized access, data exposure, and website manipulation.

Atelier Administration

The Atelier Admin Portal is intended exclusively for authorized KRAYS DHAKA personnel.

Never publish administrator passwords, authentication tokens, private API keys, or other credentials in source code, documentation, screenshots, or public repositories.

Administrator authentication and authorization must be enforced by a trusted server-side service.

Do not treat a hidden URL, frontend password prompt, or client-side role check as security protection.

Restrict administrative actions to authenticated users with appropriate permissions.

Validate all submitted data on the server before creating, updating, or deleting garments.

Keep administrative operations and catalog changes auditable where supported.

Use a secure password manager and unique administrator credentials.

Enable multi-factor authentication for administrative accounts whenever supported.

Important: A static website hosted on GitHub Pages cannot securely enforce private administrative permissions by itself. A protected backend or trusted content-management service is required for secure, persistent administrative changes.

Product Catalog Management

The product catalog may contain garment names, descriptions, prices, photographs, fabric specifications, and collection classifications.

Administrative catalog changes must be authorized before they are saved to a shared, persistent data source.

Browser storage may be used for temporary drafts or preferences, but it must not be treated as a secure database or trusted source of authorization.

Validate garment data, restrict upload types and file sizes, and prevent unsafe HTML or script injection in product descriptions.

Secrets and Configuration

Keep private credentials outside the frontend source code and public documentation.

Never place private secrets in variables exposed to the Vite client bundle, including variables prefixed with VITE_.

Store server-side credentials in the hosting platform's protected secret manager or environment configuration.

Rotate credentials immediately if they may have been exposed.

Review Git history if a secret was previously committed. Removing it from the latest version does not remove earlier copies.

GitHub Repository and Deployment

Require review of changes to the production branch where practical.

Enable GitHub account two-factor authentication.

Grant GitHub Actions only the permissions required to build and deploy the website.

Pin third-party GitHub Actions to reviewed versions or commit SHAs according to your maintenance policy.

Keep dependencies updated and investigate reported vulnerabilities.

Never deploy local environment files, private credentials, customer records, or development-only configuration.

Verify that the production build contains only intended public assets.

Security Verification Checklist

Before each production release:

No administrator passwords or private secrets are committed.

Admin access is enforced by a trusted authentication service.

Unauthorized users cannot perform administrative catalog operations.

Inputs are validated and unsafe content is handled appropriately.

Dependencies and deployment workflows have been reviewed.

Production configuration contains no private credentials.

Recovery and credential-rotation procedures are available.

Report suspected security vulnerabilities privately to the website maintainers. Do not publish credentials, personal information, or exploit details in public issues.

© 2026 KRAYS DHAKA Atelier.
