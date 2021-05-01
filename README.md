### Setup
```
# Install amplify client
npm install -g @aws-amplify/cli

npm install
amplify init
# Obtain SECRET_KEY.js for API keys

expo start
```

### Amplify resources
```
# Good resource to get started
https://docs.amplify.aws/start/getting-started/data-model/q/integration/react-native#deploying-the-api

# Show current aws service in use
amplify status

# If you modify graphql schema and want to test the api
amplify api mock

# Update the api service
amplify api push
```

### Schema overview
Amplify automatically generates graphql queris and mutations from schema:
```amplify/backend/api/gogoh/schema.graphql```

Queries and mutations are generated at:
```src/graphql/```
