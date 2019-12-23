# Monorepo structure: sharing code between projects

With this, we are able to share code between ReactJS and React Native using react-native-web package.

This is adapted from [Monorepo tutorial](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej) from [Bruno Lemos](https://github.com/brunolemos).

Monorepo is powered by Yarn Workspaces and components sharing is powered by [react-native-web](https://github.com/necolas/react-native-web).

We can also add other packages (like a package with basic logic) and share code even with a backend project.

Both ReactJS and React Native projects were started with its most common boilerplates (i.e create-react-app and react-native-cli).