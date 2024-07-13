# Contributing

## About this repository

This repository is a monorepo. Below are the major tools we use.

- We use [NextJs](https://nextjs.org/docs) with page routing as our framework.
- We use [Tailwind Css](https://tailwindcss.com/docs/utility-first) for CSS management.
- We use [Tanstack Table](https://tanstack.com/table/v8) for our tables.

## Structure

This repository is structured as follows:

``` sh
src
└── data                # Static data
└── features            # React components for site features
    ├── common
    ├── ...
└── lib                 # Collection of reusable logic
    ├── utils
    ├── ...
└── pages               # NextJs page routing
    ├── api             # NextJs API system
    ├── ...
└── store               # Redux related files
└── styles              # Site-wide styles
```

## Developing

The production branch is `main`. This is the branch that all pull requests should be made against. The changes on the `main` released immediately on vercel.

To develop locally:

1. Clone the repository on to the local device

    ```bash
    git clone git@github.com:BrunelAmC/vandame.git
    ```

2. Create a new branch. See branch naming conventions below.

    ```bash
    git checkout -b MY_BRANCH_NAME
    ```

3. Install yarn

    ```bash
    npm install -g yarn
    ```

4. Install dependencies

    ```bash
    yarn
    ```

## Run in Development

You can build the project with:

```bash
yarn dev
```

## Testing

### Adding tests

To add new tests, follow the pattern used by existing tests

### Running tests

You can run tests with;

```bash
yarn test
```

## Linting and formatting

To check  the formatting of your code (and fix some issues):

```bash
yarn lint
yarn lint-fix
yarn format
```

Fix all errors before committing.

## Making a Pull Request

- Build code successfully locally
- Check and fix lint issues, format code
- Create PR and add description of changes
- Request reviewers

## Conventions

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification checkout the
[Conventional Commits Specification](https://www.conventionalcommits.org/)
and consider using [Comittizen](https://commitizen-tools.github.io/commitizen/).

### Branches

- Branch are named `feat/{short-description}`
- Other conventions are enforced by lint rules
- branches are/should be deleted after they are merged
