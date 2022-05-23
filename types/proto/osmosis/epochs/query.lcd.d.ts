import { LCDClient } from "@osmonauts/lcd";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
export declare class QueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    epochInfos(params: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
    currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
