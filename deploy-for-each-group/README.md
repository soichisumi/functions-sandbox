# What is this
sample of deployment of cloud functions with grouping

# how to use

1. cd path/to/ 'testgroup/groupA'
2. initialize groupA with `firebase init`
  * more detail: https://firebase.google.com/docs/functions/get-started?hl=ja
3. deploy groupA with `firebase deploy --only functions:groupA`
4. cd path/to/ 'testgroup/groupB'
5. initialize groupB with `firebase init`
6. deploy groupB with `firebase deploy --only functions:groupB`

By doing the above action, you could deploy for each group.