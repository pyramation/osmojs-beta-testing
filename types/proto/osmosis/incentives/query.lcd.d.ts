import { LCDClient } from "@osmonauts/lcd";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, ModuleDistributedCoinsRequest, ModuleDistributedCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
export declare class QueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    moduleToDistributeCoins(params: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
    moduleDistributedCoins(params: ModuleDistributedCoinsRequest): Promise<ModuleDistributedCoinsResponse>;
    gaugeByID(params: GaugeByIDRequest): Promise<GaugeByIDResponse>;
    gauges(params: GaugesRequest): Promise<GaugesResponse>;
    activeGauges(params: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
    activeGaugesPerDenom(params: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse>;
    upcomingGauges(params: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
    rewardsEst(params: RewardsEstRequest): Promise<RewardsEstResponse>;
    lockableDurations(params: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
}
