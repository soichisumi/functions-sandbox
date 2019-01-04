# What is this
sample of deployment of cloud functions with grouping

# how to use

1. cd path/to/ 'testgroup/groupA'
2. initialize .firebaserc of groupA with `firebase init`.
  more detail: https://firebase.google.com/docs/functions/get-started?hl=ja
3. deploy groupA with `firebase deploy --only functions:groupA`
4. deploy groupB like the above instruction

By doing the above action, you could deploy for each group.