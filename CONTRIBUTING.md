
# Hello!

...and thanks for considering a contribution to this project! Being a tiny project, the rules here are pretty informal and contributions are welcome from anyone regardless of experience.

If you have a requested feature, bugfix, or doc update, feel free to open up an issue. Try to explain your suggestion as well as possible, and try to be responsive for follow-up questions. If the fix/change gets the "go ahead" and you have the desire, you're welcome to open up a PR for the fix. If you're unable, we'll take care of it the first chance we get.

If you have a question about using this project, you can either open an issue for that or email me at ben@mooonwafer.io

# Building this project

Yarn is required - latest version should be fine.

1. Clone this repo: `git clone git@github.com:moonwafer-io/mw-vue-notify.git`
2. Run "yarn install" from the top level of the project.
3. Run "yarn build" for a one-time build, or "yarn watch" to have the build stay alive watching for changes.

If you'd like to link this to another project to test out your changes:

1. Run `yarn link` from the top level of this project. (or `npm link`)
2. Run `yarn link mw-vue-notify` from the top level of your other project. (or `npm link mw-vue-notify`). You may need to first remove `mw-vue-notify` as a dependency from that project.
3. When you're done testing, run `yarn unlink mw-vue-notify` from the top level of your other project, and re-add the dependency if needed.

If you run into any questions or issues, feel free to ask!