export interface ITypedRequestBody<T> extends Express.Request {
  body: T
}