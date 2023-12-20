# github-action-typescript-template

This is a template repository and several updates should be taken after using it as a repository generator:
- Remove the [trigger update from template workflow](.github/workflows/trigger-update-from-template.yml)
- Search & replace the name of the template for the template instance across the repository
- Update package.json fields such as name, description, etc...
- Update action.yml
- Update self-test.yml workflow
- Update this README to reflect the new action

## Usage

Describe the action usage here, and provide an example invocation in a GitHub workflow.


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
``` 

### Releasing

The releasing is handled at git level with semantic versioning tags. Those are automatically generated and managed
by the [git-tag-semver-from-label-action](https://github.com/infrastructure-blocks/git-tag-semver-from-label-action).
