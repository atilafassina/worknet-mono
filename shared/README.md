# Shared folder

Here there is a series of files and settings which are shared by the apps inside this workspace.
These files are not published anywhere and are an interdependency of the apps.

## Caveat

Dependencies in modules of this repository are workspace dependencies and thus must be also added to the consuming apps.
This mimics the scenario where these files would be published as independent package and thus their dependencies would be `peerDependencies`.
