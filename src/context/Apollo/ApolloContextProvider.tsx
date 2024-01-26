import {ApolloProvider} from '@apollo/client';
import apolloClient from 'settings/Apollo';
interface ApolloContextProviderProps {
  children: React.ReactNode;
}

export function ApolloContextProvider(props: ApolloContextProviderProps) {
  // Initialize Apollo Client
  // const client = new ApolloClient({
  //   uri: `${CONSTANTS.Apollo.URI}/graphql`,
  //   cache: new InMemoryCache(),
  //   defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
  // });

  return <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>;
}
