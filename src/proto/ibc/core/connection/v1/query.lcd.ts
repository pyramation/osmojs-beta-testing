import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, IdentifiedConnection } from "./connection";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import { LCDClient } from "@osmonauts/lcd";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Connection queries an IBC connection end. */
  async connection(params: QueryConnectionRequest): Promise<QueryConnectionResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.connectionId !== "undefined") {
      options.params.connection_id = params.connectionId;
    }

    const endpoint = `ibc/core/connection/v1/connections/${params.connection_id}`;
    return await this.request(endpoint, options);
  }

  /* Connections queries all the IBC connections of a chain. */
  async connections(params: QueryConnectionsRequest): Promise<QueryConnectionsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `ibc/core/connection/v1/connections/`;
    return await this.request(endpoint, options);
  }

  /* ClientConnections queries the connection paths associated with a client
  state. */
  async clientConnections(params: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.clientId !== "undefined") {
      options.params.client_id = params.clientId;
    }

    const endpoint = `ibc/core/connection/v1/client_connections/${params.client_id}`;
    return await this.request(endpoint, options);
  }

  /* ConnectionClientState queries the client state associated with the
  connection. */
  async connectionClientState(params: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.connectionId !== "undefined") {
      options.params.connection_id = params.connectionId;
    }

    const endpoint = `ibc/core/connection/v1/connections/${params.connection_id}/client_state`;
    return await this.request(endpoint, options);
  }

  /* ConnectionConsensusState queries the consensus state associated with the
  connection. */
  async connectionConsensusState(params: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.connectionId !== "undefined") {
      options.params.connection_id = params.connectionId;
    }

    if (typeof params?.revisionNumber !== "undefined") {
      options.params.revision_number = params.revisionNumber;
    }

    if (typeof params?.revisionHeight !== "undefined") {
      options.params.revision_height = params.revisionHeight;
    }

    const endpoint = `ibc/core/connection/v1/connections/${params.connection_id}/consensus_state/revision/${params.revision_number}height/${params.revision_height}`;
    return await this.request(endpoint, options);
  }

}