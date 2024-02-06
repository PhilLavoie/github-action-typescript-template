# github-action-typescript-template
[![Build](https://github.com/infrastructure-blocks/github-action-typescript-template/actions/workflows/build.yml/badge.svg)](https://github.com/infrastructure-blocks/github-action-typescript-template/actions/workflows/build.yml)
[![Git Tag Semver From Label](https://github.com/infrastructure-blocks/github-action-typescript-template/actions/workflows/git-tag-semver-from-label.yml/badge.svg)](https://github.com/infrastructure-blocks/github-action-typescript-template/actions/workflows/git-tag-semver-from-label.yml)
[![Self Test](https://github.com/infrastructure-blocks/github-action-typescript-template/actions/workflows/self-test.yml/badge.svg)](https://github.com/infrastructure-blocks/github-action-typescript-template/actions/workflows/self-test.yml)
[![Trigger Update From Template](https://github.com/infrastructure-blocks/github-action-typescript-template/actions/workflows/trigger-update-from-template.yml/badge.svg)](https://github.com/infrastructure-blocks/github-action-typescript-template/actions/workflows/trigger-update-from-template.yml)
[![codecov](https://codecov.io/gh/infrastructure-blocks/github-action-typescript-template/graph/badge.svg?token=5T4PKYVMDH)](https://codecov.io/gh/infrastructure-blocks/github-action-typescript-template)

This is a template repository and several updates should be taken after using it as a repository generator:
- Remove the [trigger update from template workflow](.github/workflows/trigger-update-from-template.yml)
- Search & replace the name of the template for the template instance across the repository
- Update package.json fields such as name, description, etc...
- Update action.yml
- Update self-test.yml workflow
- Update the status badges:
    - Remove the `Trigger Update From Template` status badge.
    - Add the `Update From Template` status badge.
    - Rename the rest of the links to point to the right repository.
- Update this README to reflect the new action

## Inputs

|     Name      | Required | Description       |
|:-------------:|:--------:|-------------------|
| example-input |   true   | An example input. |

## Outputs

|      Name      | Description        |
|:--------------:|--------------------|
| example-output | An example output. |

## Permissions

|     Scope     | Level | Reason   |
|:-------------:|:-----:|----------|
| pull-requests | read  | Because. |

## Usage

```yaml
name: Template Usage

on:
  push: ~

# The required permissions.
permissions:
  pull-requests: read

# The suggested concurrency controls.
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  example-job:
    runs-on: ubuntu-22.04
    steps:
      - uses: infrastructure-blocks/github-action-typescript-template@v1
```

## Development

This project is written in Typescript and leverages `nvm` to manage its version. It also uses Git hooks
to automatically build and commit compiled code. This last part emerges from the fact that GitHub actions
run Javascript (and not typescript) and that all the node_modules/ are expected to be provided in the Git
repository of the action.

Having a Git hook to compile automatically helps in diminishing the chances that a developer forgets to
provide the compiled sources in a change request.

### Setup

Once `nvm` is installed, simply run the following:

```
nvm install
npm install
# Build
npm run build
# Compile, including the tests
npm run compile
# Lint
npm run lint
# Test
npm run test
``` 

### Releasing

The releasing is handled at git level with semantic versioning tags. Those are automatically generated and managed
by the [git-tag-semver-from-label-workflow](https://github.com/infrastructure-blocks/git-tag-semver-from-label-workflow).
