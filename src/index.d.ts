// https://stackoverflow.com/questions/65061146/declaration-d-ts-file-containing-declare-module-graphql-error-graphqlerror
declare module 'graphql/language/ast' {
  export type DocumentNode = any;
}
declare module 'graphql/error/GraphQLError' {
  export type GraphQLError = any;
}
