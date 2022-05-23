import { LCDClient } from "@osmonauts/lcd";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
export declare class QueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    feeTokens(params: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
    denomPoolId(params: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
    baseDenom(params: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
