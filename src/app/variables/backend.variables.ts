import { environment } from 'src/environments/environment';

export const backendEndpoints = {
  evaluateExpressionEndpoint: `${environment.backend}`,
};

export enum BackendResponseStatusCodes {
  InternalServerError = 500,
}

export enum BackendResponseErrorMessages {
  internalServerError = 'Our server is down',
  default = 'Something went wrong'
}
