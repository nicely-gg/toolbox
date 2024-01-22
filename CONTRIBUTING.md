# Contributing to @nicely/toolbox

First off, thank you for considering contributing to `@nicely/toolbox`. It's people like you that make it a great tool for everyone. We welcome contributions from the community and are pleased to have you join us.

## Using the Right Tools

To ensure consistency across the codebase, contributors are required to use Visual Studio Code (VSCode) or any IDE that is compatible with ESLint and Prettier. This ensures that all contributions follow the same format and style.

## Making a Contribution

1. **Fork the Repository**: Start by forking the repository to your own GitHub account.

2. **Create a Branch**: Create a branch in your fork for your contribution. Preferably, name it in a way that reflects the nature of the contribution.

3. **Develop**: Make your changes in your branch. Be sure to adhere to the guidelines outlined below.

4. **Ensure Code Quality**:

    - Before committing your changes, make sure your code is ESLint and Prettier compliant.
    - Run ESLint and Prettier checks and fix any issues that arise.

5. **Submit a Pull Request (PR)**:
    - Once you've made your changes, push your branch to your fork and open a PR to the main repository.
    - Clearly describe the changes you've made and the issue(s) it addresses.

## Development Guidelines

### File Structure

-   **Routes**:

    -   All new routes should be placed in the `routes/` folder.
    -   Naming Convention: Use lower-case with dashes for multi-word files (e.g., `user-profile.jsx`).
    -   I acknowledge the absence of file-side routing and appreciate your adherence to this structure.

-   **Components**:

    -   All React components must be placed in `lib/components`.
    -   Use PascalCase for naming components (e.g., `UserProfile.jsx`).

-   **Utilities/Custom Hooks**:
    -   Place all utilities and custom hooks in `lib/`.
    -   Naming should be clear and descriptive, using camelCase.

### Coding Standards

-   Ensure that all code is compliant with ESLint and Prettier configurations.
-   Write clear, understandable, and maintainable code.
-   Include comments where necessary to explain complex logic.
-   Follow React best practices.

### PR Process

-   PRs should be focused: they should address a single concern or feature.
-   Include screenshots or screen recordings for UI changes.
-   Tag relevant issue(s) in your PR description.

### Review Process

-   PRs will be reviewed for code quality, adherence to project standards, and alignment with the project's goals.
-   Feedback or requests for changes should be addressed promptly.
-   Merging will be done after satisfactory review and approval by the project maintainers.

## Questions or Suggestions?

If you have any questions or suggestions on how we can improve the contribution process, please feel free to create an issue discussing your ideas or concerns.

Thank you for contributing to @nicely/toolbox, and happy coding!
