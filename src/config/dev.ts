import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'chxK3kDh6u4ppXddViLOjE4BP3IvjXsUHBof',
  sdkSecret: 'SqjzFzKPZeVpjCzwzZHFXR1nLq1Wbk4q1gQX',
  webEndpoint: 'zoom.us',
  topic: 'Test Topic',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '',
  signature: '',
  sessionKey: 'Test Session',
  userIdentity: '',
  // role = 1 to join as host, 0 to join as attendee. The first user must join as host to start the session
  role: 1
};
