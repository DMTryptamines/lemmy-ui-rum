import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({

  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'lemmy',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://10.162.0.4:8200',

  // Set the service version (required for source map feature)
  serviceVersion: '0.16.3',

  // Set the service environment
  environment: 'production'
  // distributedTracingOrigins: ['http://localhost:8080'], 
})
export default apm;