# capacitor-analytics-demo

- `git clone https://github.com/stewwan/capacitor-analytics-demo`
- `cd capacitor-analytics-demo && npm install`
- add your `GoogleService-Info.plist` to `ios/App/App`
- `npm run start`

## debug view

analytics data aren't sent in realtime due to performance implications, so while developing we need to enable debug view in xcode.

1. In Xcode, select Product > Scheme > Edit scheme
2. Select Run from the left menu
3. Select the Arguments tab
4. In the Arguments Passed On Launch section, add `-FIRAnalyticsDebugEnabled`
