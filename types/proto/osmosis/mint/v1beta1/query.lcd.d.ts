import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
export declare class QueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    params(params: QueryParamsRequest): Promise<QueryParamsResponse>;
    epochProvisions(params: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponse>;
}
