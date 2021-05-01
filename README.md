### Setup
```
# Install amplify client
npm install -g @aws-amplify/cli

npm install
amplify init
# Obtain SECRET_KEY.js for API keys

expo start
```

### Amplify resource
We are using aws appsync. 

### Schema overview
Amplify automatically generates graphql queris and mutations from schema:
```amplify/backend/api/gogoh/schema.graphql```

Queries and mutations are generated at:
```src/graphql/```
