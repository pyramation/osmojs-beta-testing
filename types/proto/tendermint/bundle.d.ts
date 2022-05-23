import * as _214 from "./abci/types";
import * as _215 from "./crypto/keys";
import * as _216 from "./crypto/proof";
import * as _217 from "./libs/bits/types";
import * as _218 from "./p2p/types";
import * as _219 from "./types/block";
import * as _220 from "./types/evidence";
import * as _221 from "./types/params";
import * as _222 from "./types/types";
import * as _223 from "./types/validator";
import * as _224 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _214.CheckTxType;
        checkTxTypeToJSON(object: _214.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _214.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _214.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _214.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _214.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _214.EvidenceType;
        evidenceTypeToJSON(object: _214.EvidenceType): string;
        CheckTxType: typeof _214.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _214.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _214.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _214.EvidenceType;
        Request: {
            encode(message: _214.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Request;
            fromJSON(object: any): _214.Request;
            toJSON(message: _214.Request): unknown;
            fromPartial<I extends {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: any;
                    p2pVersion?: any;
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _214.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _214.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: any;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            } & {
                echo?: {
                    message?: string;
                } & {
                    message?: string;
                } & Record<Exclude<keyof I["echo"], "message">, never>;
                flush?: {} & {} & Record<Exclude<keyof I["flush"], never>, never>;
                info?: {
                    version?: string;
                    blockVersion?: any;
                    p2pVersion?: any;
                } & {
                    version?: string;
                    blockVersion?: any;
                    p2pVersion?: any;
                } & Record<Exclude<keyof I["info"], keyof _214.RequestInfo>, never>;
                setOption?: {
                    key?: string;
                    value?: string;
                } & {
                    key?: string;
                    value?: string;
                } & Record<Exclude<keyof I["setOption"], keyof _214.RequestSetOption>, never>;
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                } & {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    } & {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        } & {
                            maxBytes?: any;
                            maxGas?: any;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["block"], keyof _214.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["evidence"], keyof _221.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: any;
                        } & {
                            appVersion?: any;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I["initChain"]["consensusParams"], keyof _214.ConsensusParams>, never>;
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[] & ({
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    } & {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I["initChain"]["validators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                        power?: any;
                    } & Record<Exclude<keyof I["initChain"]["validators"][number], keyof _214.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["initChain"]["validators"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[]>, never>;
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                } & Record<Exclude<keyof I["initChain"], keyof _214.RequestInitChain>, never>;
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                } & {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                } & Record<Exclude<keyof I["query"], keyof _214.RequestQuery>, never>;
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _214.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[];
                } & {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & {
                        version?: {
                            block?: any;
                            app?: any;
                        } & {
                            block?: any;
                            app?: any;
                        } & Record<Exclude<keyof I["beginBlock"]["header"]["version"], keyof _224.Consensus>, never>;
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"], keyof _222.BlockID>, never>;
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & Record<Exclude<keyof I["beginBlock"]["header"], keyof _222.Header>, never>;
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    } & {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[] & ({
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        } & {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            } & {
                                address?: Uint8Array;
                                power?: any;
                            } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number]["validator"], keyof _214.Validator>, never>;
                            signedLastBlock?: boolean;
                        } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number], keyof _214.VoteInfo>, never>)[] & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"], keyof {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"], keyof _214.LastCommitInfo>, never>;
                    byzantineValidators?: {
                        type?: _214.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[] & ({
                        type?: _214.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    } & {
                        type?: _214.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        } & {
                            address?: Uint8Array;
                            power?: any;
                        } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number]["validator"], keyof _214.Validator>, never>;
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number], keyof _214.Evidence>, never>)[] & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"], keyof {
                        type?: _214.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I["beginBlock"], keyof _214.RequestBeginBlock>, never>;
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _214.CheckTxType;
                } & {
                    tx?: Uint8Array;
                    type?: _214.CheckTxType;
                } & Record<Exclude<keyof I["checkTx"], keyof _214.RequestCheckTx>, never>;
                deliverTx?: {
                    tx?: Uint8Array;
                } & {
                    tx?: Uint8Array;
                } & Record<Exclude<keyof I["deliverTx"], "tx">, never>;
                endBlock?: {
                    height?: any;
                } & {
                    height?: any;
                } & Record<Exclude<keyof I["endBlock"], "height">, never>;
                commit?: {} & {} & Record<Exclude<keyof I["commit"], never>, never>;
                listSnapshots?: {} & {} & Record<Exclude<keyof I["listSnapshots"], never>, never>;
                offerSnapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                } & {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & Record<Exclude<keyof I["offerSnapshot"]["snapshot"], keyof _214.Snapshot>, never>;
                    appHash?: Uint8Array;
                } & Record<Exclude<keyof I["offerSnapshot"], keyof _214.RequestOfferSnapshot>, never>;
                loadSnapshotChunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                } & {
                    height?: any;
                    format?: number;
                    chunk?: number;
                } & Record<Exclude<keyof I["loadSnapshotChunk"], keyof _214.RequestLoadSnapshotChunk>, never>;
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                } & {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                } & Record<Exclude<keyof I["applySnapshotChunk"], keyof _214.RequestApplySnapshotChunk>, never>;
            } & Record<Exclude<keyof I, keyof _214.Request>, never>>(object: I): _214.Request;
        };
        RequestEcho: {
            encode(message: _214.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestEcho;
            fromJSON(object: any): _214.RequestEcho;
            toJSON(message: _214.RequestEcho): unknown;
            fromPartial<I_1 extends {
                message?: string;
            } & {
                message?: string;
            } & Record<Exclude<keyof I_1, "message">, never>>(object: I_1): _214.RequestEcho;
        };
        RequestFlush: {
            encode(_: _214.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestFlush;
            fromJSON(_: any): _214.RequestFlush;
            toJSON(_: _214.RequestFlush): unknown;
            fromPartial<I_2 extends {} & {} & Record<Exclude<keyof I_2, never>, never>>(_: I_2): _214.RequestFlush;
        };
        RequestInfo: {
            encode(message: _214.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestInfo;
            fromJSON(object: any): _214.RequestInfo;
            toJSON(message: _214.RequestInfo): unknown;
            fromPartial<I_3 extends {
                version?: string;
                blockVersion?: any;
                p2pVersion?: any;
            } & {
                version?: string;
                blockVersion?: any;
                p2pVersion?: any;
            } & Record<Exclude<keyof I_3, keyof _214.RequestInfo>, never>>(object: I_3): _214.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _214.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestSetOption;
            fromJSON(object: any): _214.RequestSetOption;
            toJSON(message: _214.RequestSetOption): unknown;
            fromPartial<I_4 extends {
                key?: string;
                value?: string;
            } & {
                key?: string;
                value?: string;
            } & Record<Exclude<keyof I_4, keyof _214.RequestSetOption>, never>>(object: I_4): _214.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _214.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestInitChain;
            fromJSON(object: any): _214.RequestInitChain;
            toJSON(message: _214.RequestInitChain): unknown;
            fromPartial<I_5 extends {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: any;
            } & {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                } & {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    } & {
                        maxBytes?: any;
                        maxGas?: any;
                    } & Record<Exclude<keyof I_5["consensusParams"]["block"], keyof _214.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & Record<Exclude<keyof I_5["consensusParams"]["evidence"], keyof _221.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_5["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_5["consensusParams"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: any;
                    } & {
                        appVersion?: any;
                    } & Record<Exclude<keyof I_5["consensusParams"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_5["consensusParams"], keyof _214.ConsensusParams>, never>;
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[] & ({
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                } & {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_5["validators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                    power?: any;
                } & Record<Exclude<keyof I_5["validators"][number], keyof _214.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_5["validators"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[]>, never>;
                appStateBytes?: Uint8Array;
                initialHeight?: any;
            } & Record<Exclude<keyof I_5, keyof _214.RequestInitChain>, never>>(object: I_5): _214.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _214.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestQuery;
            fromJSON(object: any): _214.RequestQuery;
            toJSON(message: _214.RequestQuery): unknown;
            fromPartial<I_6 extends {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            } & {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            } & Record<Exclude<keyof I_6, keyof _214.RequestQuery>, never>>(object: I_6): _214.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _214.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestBeginBlock;
            fromJSON(object: any): _214.RequestBeginBlock;
            toJSON(message: _214.RequestBeginBlock): unknown;
            fromPartial<I_7 extends {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _214.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[];
            } & {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & {
                    version?: {
                        block?: any;
                        app?: any;
                    } & {
                        block?: any;
                        app?: any;
                    } & Record<Exclude<keyof I_7["header"]["version"], keyof _224.Consensus>, never>;
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_7["header"]["lastBlockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_7["header"]["lastBlockId"], keyof _222.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_7["header"], keyof _222.Header>, never>;
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[];
                } & {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[] & ({
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    } & {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        } & {
                            address?: Uint8Array;
                            power?: any;
                        } & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"][number]["validator"], keyof _214.Validator>, never>;
                        signedLastBlock?: boolean;
                    } & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"][number], keyof _214.VoteInfo>, never>)[] & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"], keyof {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_7["lastCommitInfo"], keyof _214.LastCommitInfo>, never>;
                byzantineValidators?: {
                    type?: _214.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[] & ({
                    type?: _214.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                } & {
                    type?: _214.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    } & {
                        address?: Uint8Array;
                        power?: any;
                    } & Record<Exclude<keyof I_7["byzantineValidators"][number]["validator"], keyof _214.Validator>, never>;
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                } & Record<Exclude<keyof I_7["byzantineValidators"][number], keyof _214.Evidence>, never>)[] & Record<Exclude<keyof I_7["byzantineValidators"], keyof {
                    type?: _214.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[]>, never>;
            } & Record<Exclude<keyof I_7, keyof _214.RequestBeginBlock>, never>>(object: I_7): _214.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _214.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestCheckTx;
            fromJSON(object: any): _214.RequestCheckTx;
            toJSON(message: _214.RequestCheckTx): unknown;
            fromPartial<I_8 extends {
                tx?: Uint8Array;
                type?: _214.CheckTxType;
            } & {
                tx?: Uint8Array;
                type?: _214.CheckTxType;
            } & Record<Exclude<keyof I_8, keyof _214.RequestCheckTx>, never>>(object: I_8): _214.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _214.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestDeliverTx;
            fromJSON(object: any): _214.RequestDeliverTx;
            toJSON(message: _214.RequestDeliverTx): unknown;
            fromPartial<I_9 extends {
                tx?: Uint8Array;
            } & {
                tx?: Uint8Array;
            } & Record<Exclude<keyof I_9, "tx">, never>>(object: I_9): _214.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _214.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestEndBlock;
            fromJSON(object: any): _214.RequestEndBlock;
            toJSON(message: _214.RequestEndBlock): unknown;
            fromPartial<I_10 extends {
                height?: any;
            } & {
                height?: any;
            } & Record<Exclude<keyof I_10, "height">, never>>(object: I_10): _214.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _214.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestCommit;
            fromJSON(_: any): _214.RequestCommit;
            toJSON(_: _214.RequestCommit): unknown;
            fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _214.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _214.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestListSnapshots;
            fromJSON(_: any): _214.RequestListSnapshots;
            toJSON(_: _214.RequestListSnapshots): unknown;
            fromPartial<I_12 extends {} & {} & Record<Exclude<keyof I_12, never>, never>>(_: I_12): _214.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _214.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestOfferSnapshot;
            fromJSON(object: any): _214.RequestOfferSnapshot;
            toJSON(message: _214.RequestOfferSnapshot): unknown;
            fromPartial<I_13 extends {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            } & {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & Record<Exclude<keyof I_13["snapshot"], keyof _214.Snapshot>, never>;
                appHash?: Uint8Array;
            } & Record<Exclude<keyof I_13, keyof _214.RequestOfferSnapshot>, never>>(object: I_13): _214.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _214.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestLoadSnapshotChunk;
            fromJSON(object: any): _214.RequestLoadSnapshotChunk;
            toJSON(message: _214.RequestLoadSnapshotChunk): unknown;
            fromPartial<I_14 extends {
                height?: any;
                format?: number;
                chunk?: number;
            } & {
                height?: any;
                format?: number;
                chunk?: number;
            } & Record<Exclude<keyof I_14, keyof _214.RequestLoadSnapshotChunk>, never>>(object: I_14): _214.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _214.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.RequestApplySnapshotChunk;
            fromJSON(object: any): _214.RequestApplySnapshotChunk;
            toJSON(message: _214.RequestApplySnapshotChunk): unknown;
            fromPartial<I_15 extends {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            } & {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            } & Record<Exclude<keyof I_15, keyof _214.RequestApplySnapshotChunk>, never>>(object: I_15): _214.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _214.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Response;
            fromJSON(object: any): _214.Response;
            toJSON(message: _214.Response): unknown;
            fromPartial<I_16 extends {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: any;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _214.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _214.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            } & {
                exception?: {
                    error?: string;
                } & {
                    error?: string;
                } & Record<Exclude<keyof I_16["exception"], "error">, never>;
                echo?: {
                    message?: string;
                } & {
                    message?: string;
                } & Record<Exclude<keyof I_16["echo"], "message">, never>;
                flush?: {} & {} & Record<Exclude<keyof I_16["flush"], never>, never>;
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                } & {
                    data?: string;
                    version?: string;
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                } & Record<Exclude<keyof I_16["info"], keyof _214.ResponseInfo>, never>;
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                } & {
                    code?: number;
                    log?: string;
                    info?: string;
                } & Record<Exclude<keyof I_16["setOption"], keyof _214.ResponseSetOption>, never>;
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appHash?: Uint8Array;
                } & {
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    } & {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        } & {
                            maxBytes?: any;
                            maxGas?: any;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["block"], keyof _214.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["evidence"], keyof _221.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: any;
                        } & {
                            appVersion?: any;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I_16["initChain"]["consensusParams"], keyof _214.ConsensusParams>, never>;
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[] & ({
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    } & {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_16["initChain"]["validators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                        power?: any;
                    } & Record<Exclude<keyof I_16["initChain"]["validators"][number], keyof _214.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_16["initChain"]["validators"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[]>, never>;
                    appHash?: Uint8Array;
                } & Record<Exclude<keyof I_16["initChain"], keyof _214.ResponseInitChain>, never>;
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                } & {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    } & {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[] & ({
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        } & {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_16["query"]["proofOps"]["ops"][number], keyof _216.ProofOp>, never>)[] & Record<Exclude<keyof I_16["query"]["proofOps"]["ops"], keyof {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["query"]["proofOps"], "ops">, never>;
                    height?: any;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["query"], keyof _214.ResponseQuery>, never>;
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                } & {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_16["beginBlock"]["events"][number]["attributes"][number], keyof _214.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["beginBlock"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["beginBlock"]["events"][number], keyof _214.Event>, never>)[] & Record<Exclude<keyof I_16["beginBlock"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["beginBlock"], "events">, never>;
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                } & {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_16["checkTx"]["events"][number]["attributes"][number], keyof _214.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["checkTx"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["checkTx"]["events"][number], keyof _214.Event>, never>)[] & Record<Exclude<keyof I_16["checkTx"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["checkTx"], keyof _214.ResponseCheckTx>, never>;
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                } & {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_16["deliverTx"]["events"][number]["attributes"][number], keyof _214.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["deliverTx"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["deliverTx"]["events"][number], keyof _214.Event>, never>)[] & Record<Exclude<keyof I_16["deliverTx"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["deliverTx"], keyof _214.ResponseDeliverTx>, never>;
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                } & {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[] & ({
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    } & {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"][number]["pubKey"], keyof _215.PublicKey>, never>;
                        power?: any;
                    } & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"][number], keyof _214.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[]>, never>;
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    } & {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        } & {
                            maxBytes?: any;
                            maxGas?: any;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["block"], keyof _214.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["evidence"], keyof _221.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: any;
                        } & {
                            appVersion?: any;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"], keyof _214.ConsensusParams>, never>;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_16["endBlock"]["events"][number]["attributes"][number], keyof _214.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["endBlock"]["events"][number], keyof _214.Event>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["endBlock"], keyof _214.ResponseEndBlock>, never>;
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: any;
                } & {
                    data?: Uint8Array;
                    retainHeight?: any;
                } & Record<Exclude<keyof I_16["commit"], keyof _214.ResponseCommit>, never>;
                listSnapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                } & {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[] & ({
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & Record<Exclude<keyof I_16["listSnapshots"]["snapshots"][number], keyof _214.Snapshot>, never>)[] & Record<Exclude<keyof I_16["listSnapshots"]["snapshots"], keyof {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["listSnapshots"], "snapshots">, never>;
                offerSnapshot?: {
                    result?: _214.ResponseOfferSnapshot_Result;
                } & {
                    result?: _214.ResponseOfferSnapshot_Result;
                } & Record<Exclude<keyof I_16["offerSnapshot"], "result">, never>;
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                } & {
                    chunk?: Uint8Array;
                } & Record<Exclude<keyof I_16["loadSnapshotChunk"], "chunk">, never>;
                applySnapshotChunk?: {
                    result?: _214.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                } & {
                    result?: _214.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[] & number[] & Record<Exclude<keyof I_16["applySnapshotChunk"]["refetchChunks"], keyof number[]>, never>;
                    rejectSenders?: string[] & string[] & Record<Exclude<keyof I_16["applySnapshotChunk"]["rejectSenders"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_16["applySnapshotChunk"], keyof _214.ResponseApplySnapshotChunk>, never>;
            } & Record<Exclude<keyof I_16, keyof _214.Response>, never>>(object: I_16): _214.Response;
        };
        ResponseException: {
            encode(message: _214.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseException;
            fromJSON(object: any): _214.ResponseException;
            toJSON(message: _214.ResponseException): unknown;
            fromPartial<I_17 extends {
                error?: string;
            } & {
                error?: string;
            } & Record<Exclude<keyof I_17, "error">, never>>(object: I_17): _214.ResponseException;
        };
        ResponseEcho: {
            encode(message: _214.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseEcho;
            fromJSON(object: any): _214.ResponseEcho;
            toJSON(message: _214.ResponseEcho): unknown;
            fromPartial<I_18 extends {
                message?: string;
            } & {
                message?: string;
            } & Record<Exclude<keyof I_18, "message">, never>>(object: I_18): _214.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _214.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseFlush;
            fromJSON(_: any): _214.ResponseFlush;
            toJSON(_: _214.ResponseFlush): unknown;
            fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _214.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _214.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseInfo;
            fromJSON(object: any): _214.ResponseInfo;
            toJSON(message: _214.ResponseInfo): unknown;
            fromPartial<I_20 extends {
                data?: string;
                version?: string;
                appVersion?: any;
                lastBlockHeight?: any;
                lastBlockAppHash?: Uint8Array;
            } & {
                data?: string;
                version?: string;
                appVersion?: any;
                lastBlockHeight?: any;
                lastBlockAppHash?: Uint8Array;
            } & Record<Exclude<keyof I_20, keyof _214.ResponseInfo>, never>>(object: I_20): _214.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _214.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseSetOption;
            fromJSON(object: any): _214.ResponseSetOption;
            toJSON(message: _214.ResponseSetOption): unknown;
            fromPartial<I_21 extends {
                code?: number;
                log?: string;
                info?: string;
            } & {
                code?: number;
                log?: string;
                info?: string;
            } & Record<Exclude<keyof I_21, keyof _214.ResponseSetOption>, never>>(object: I_21): _214.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _214.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseInitChain;
            fromJSON(object: any): _214.ResponseInitChain;
            toJSON(message: _214.ResponseInitChain): unknown;
            fromPartial<I_22 extends {
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appHash?: Uint8Array;
            } & {
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                } & {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    } & {
                        maxBytes?: any;
                        maxGas?: any;
                    } & Record<Exclude<keyof I_22["consensusParams"]["block"], keyof _214.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & Record<Exclude<keyof I_22["consensusParams"]["evidence"], keyof _221.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_22["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_22["consensusParams"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: any;
                    } & {
                        appVersion?: any;
                    } & Record<Exclude<keyof I_22["consensusParams"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_22["consensusParams"], keyof _214.ConsensusParams>, never>;
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[] & ({
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                } & {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_22["validators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                    power?: any;
                } & Record<Exclude<keyof I_22["validators"][number], keyof _214.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_22["validators"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[]>, never>;
                appHash?: Uint8Array;
            } & Record<Exclude<keyof I_22, keyof _214.ResponseInitChain>, never>>(object: I_22): _214.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _214.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseQuery;
            fromJSON(object: any): _214.ResponseQuery;
            toJSON(message: _214.ResponseQuery): unknown;
            fromPartial<I_23 extends {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: any;
                codespace?: string;
            } & {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                } & {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[] & ({
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    } & {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_23["proofOps"]["ops"][number], keyof _216.ProofOp>, never>)[] & Record<Exclude<keyof I_23["proofOps"]["ops"], keyof {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_23["proofOps"], "ops">, never>;
                height?: any;
                codespace?: string;
            } & Record<Exclude<keyof I_23, keyof _214.ResponseQuery>, never>>(object: I_23): _214.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _214.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseBeginBlock;
            fromJSON(object: any): _214.ResponseBeginBlock;
            toJSON(message: _214.ResponseBeginBlock): unknown;
            fromPartial<I_24 extends {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            } & {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[] & ({
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                } & {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & Record<Exclude<keyof I_24["events"][number]["attributes"][number], keyof _214.EventAttribute>, never>)[] & Record<Exclude<keyof I_24["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_24["events"][number], keyof _214.Event>, never>)[] & Record<Exclude<keyof I_24["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_24, "events">, never>>(object: I_24): _214.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _214.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseCheckTx;
            fromJSON(object: any): _214.ResponseCheckTx;
            toJSON(message: _214.ResponseCheckTx): unknown;
            fromPartial<I_25 extends {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            } & {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[] & ({
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                } & {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & Record<Exclude<keyof I_25["events"][number]["attributes"][number], keyof _214.EventAttribute>, never>)[] & Record<Exclude<keyof I_25["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_25["events"][number], keyof _214.Event>, never>)[] & Record<Exclude<keyof I_25["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
                codespace?: string;
            } & Record<Exclude<keyof I_25, keyof _214.ResponseCheckTx>, never>>(object: I_25): _214.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _214.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseDeliverTx;
            fromJSON(object: any): _214.ResponseDeliverTx;
            toJSON(message: _214.ResponseDeliverTx): unknown;
            fromPartial<I_26 extends {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            } & {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[] & ({
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                } & {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & Record<Exclude<keyof I_26["events"][number]["attributes"][number], keyof _214.EventAttribute>, never>)[] & Record<Exclude<keyof I_26["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["events"][number], keyof _214.Event>, never>)[] & Record<Exclude<keyof I_26["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
                codespace?: string;
            } & Record<Exclude<keyof I_26, keyof _214.ResponseDeliverTx>, never>>(object: I_26): _214.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _214.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseEndBlock;
            fromJSON(object: any): _214.ResponseEndBlock;
            toJSON(message: _214.ResponseEndBlock): unknown;
            fromPartial<I_27 extends {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            } & {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[] & ({
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                } & {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_27["validatorUpdates"][number]["pubKey"], keyof _215.PublicKey>, never>;
                    power?: any;
                } & Record<Exclude<keyof I_27["validatorUpdates"][number], keyof _214.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_27["validatorUpdates"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[]>, never>;
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                } & {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    } & {
                        maxBytes?: any;
                        maxGas?: any;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["block"], keyof _214.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["evidence"], keyof _221.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_27["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: any;
                    } & {
                        appVersion?: any;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_27["consensusParamUpdates"], keyof _214.ConsensusParams>, never>;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[] & ({
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                } & {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & Record<Exclude<keyof I_27["events"][number]["attributes"][number], keyof _214.EventAttribute>, never>)[] & Record<Exclude<keyof I_27["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_27["events"][number], keyof _214.Event>, never>)[] & Record<Exclude<keyof I_27["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_27, keyof _214.ResponseEndBlock>, never>>(object: I_27): _214.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _214.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseCommit;
            fromJSON(object: any): _214.ResponseCommit;
            toJSON(message: _214.ResponseCommit): unknown;
            fromPartial<I_28 extends {
                data?: Uint8Array;
                retainHeight?: any;
            } & {
                data?: Uint8Array;
                retainHeight?: any;
            } & Record<Exclude<keyof I_28, keyof _214.ResponseCommit>, never>>(object: I_28): _214.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _214.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseListSnapshots;
            fromJSON(object: any): _214.ResponseListSnapshots;
            toJSON(message: _214.ResponseListSnapshots): unknown;
            fromPartial<I_29 extends {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            } & {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[] & ({
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & Record<Exclude<keyof I_29["snapshots"][number], keyof _214.Snapshot>, never>)[] & Record<Exclude<keyof I_29["snapshots"], keyof {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_29, "snapshots">, never>>(object: I_29): _214.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _214.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseOfferSnapshot;
            fromJSON(object: any): _214.ResponseOfferSnapshot;
            toJSON(message: _214.ResponseOfferSnapshot): unknown;
            fromPartial<I_30 extends {
                result?: _214.ResponseOfferSnapshot_Result;
            } & {
                result?: _214.ResponseOfferSnapshot_Result;
            } & Record<Exclude<keyof I_30, "result">, never>>(object: I_30): _214.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _214.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _214.ResponseLoadSnapshotChunk;
            toJSON(message: _214.ResponseLoadSnapshotChunk): unknown;
            fromPartial<I_31 extends {
                chunk?: Uint8Array;
            } & {
                chunk?: Uint8Array;
            } & Record<Exclude<keyof I_31, "chunk">, never>>(object: I_31): _214.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _214.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ResponseApplySnapshotChunk;
            fromJSON(object: any): _214.ResponseApplySnapshotChunk;
            toJSON(message: _214.ResponseApplySnapshotChunk): unknown;
            fromPartial<I_32 extends {
                result?: _214.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            } & {
                result?: _214.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[] & number[] & Record<Exclude<keyof I_32["refetchChunks"], keyof number[]>, never>;
                rejectSenders?: string[] & string[] & Record<Exclude<keyof I_32["rejectSenders"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_32, keyof _214.ResponseApplySnapshotChunk>, never>>(object: I_32): _214.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _214.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ConsensusParams;
            fromJSON(object: any): _214.ConsensusParams;
            toJSON(message: _214.ConsensusParams): unknown;
            fromPartial<I_33 extends {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            } & {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                } & {
                    maxBytes?: any;
                    maxGas?: any;
                } & Record<Exclude<keyof I_33["block"], keyof _214.BlockParams>, never>;
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & Record<Exclude<keyof I_33["evidence"], keyof _221.EvidenceParams>, never>;
                validator?: {
                    pubKeyTypes?: string[];
                } & {
                    pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_33["validator"]["pubKeyTypes"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_33["validator"], "pubKeyTypes">, never>;
                version?: {
                    appVersion?: any;
                } & {
                    appVersion?: any;
                } & Record<Exclude<keyof I_33["version"], "appVersion">, never>;
            } & Record<Exclude<keyof I_33, keyof _214.ConsensusParams>, never>>(object: I_33): _214.ConsensusParams;
        };
        BlockParams: {
            encode(message: _214.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.BlockParams;
            fromJSON(object: any): _214.BlockParams;
            toJSON(message: _214.BlockParams): unknown;
            fromPartial<I_34 extends {
                maxBytes?: any;
                maxGas?: any;
            } & {
                maxBytes?: any;
                maxGas?: any;
            } & Record<Exclude<keyof I_34, keyof _214.BlockParams>, never>>(object: I_34): _214.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _214.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.LastCommitInfo;
            fromJSON(object: any): _214.LastCommitInfo;
            toJSON(message: _214.LastCommitInfo): unknown;
            fromPartial<I_35 extends {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[];
            } & {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[] & ({
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                } & {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    } & {
                        address?: Uint8Array;
                        power?: any;
                    } & Record<Exclude<keyof I_35["votes"][number]["validator"], keyof _214.Validator>, never>;
                    signedLastBlock?: boolean;
                } & Record<Exclude<keyof I_35["votes"][number], keyof _214.VoteInfo>, never>)[] & Record<Exclude<keyof I_35["votes"], keyof {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I_35, keyof _214.LastCommitInfo>, never>>(object: I_35): _214.LastCommitInfo;
        };
        Event: {
            encode(message: _214.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Event;
            fromJSON(object: any): _214.Event;
            toJSON(message: _214.Event): unknown;
            fromPartial<I_36 extends {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            } & {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[] & ({
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                } & Record<Exclude<keyof I_36["attributes"][number], keyof _214.EventAttribute>, never>)[] & Record<Exclude<keyof I_36["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I_36, keyof _214.Event>, never>>(object: I_36): _214.Event;
        };
        EventAttribute: {
            encode(message: _214.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.EventAttribute;
            fromJSON(object: any): _214.EventAttribute;
            toJSON(message: _214.EventAttribute): unknown;
            fromPartial<I_37 extends {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & Record<Exclude<keyof I_37, keyof _214.EventAttribute>, never>>(object: I_37): _214.EventAttribute;
        };
        TxResult: {
            encode(message: _214.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.TxResult;
            fromJSON(object: any): _214.TxResult;
            toJSON(message: _214.TxResult): unknown;
            fromPartial<I_38 extends {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            } & {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                } & {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_38["result"]["events"][number]["attributes"][number], keyof _214.EventAttribute>, never>)[] & Record<Exclude<keyof I_38["result"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_38["result"]["events"][number], keyof _214.Event>, never>)[] & Record<Exclude<keyof I_38["result"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_38["result"], keyof _214.ResponseDeliverTx>, never>;
            } & Record<Exclude<keyof I_38, keyof _214.TxResult>, never>>(object: I_38): _214.TxResult;
        };
        Validator: {
            encode(message: _214.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Validator;
            fromJSON(object: any): _214.Validator;
            toJSON(message: _214.Validator): unknown;
            fromPartial<I_39 extends {
                address?: Uint8Array;
                power?: any;
            } & {
                address?: Uint8Array;
                power?: any;
            } & Record<Exclude<keyof I_39, keyof _214.Validator>, never>>(object: I_39): _214.Validator;
        };
        ValidatorUpdate: {
            encode(message: _214.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ValidatorUpdate;
            fromJSON(object: any): _214.ValidatorUpdate;
            toJSON(message: _214.ValidatorUpdate): unknown;
            fromPartial<I_40 extends {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            } & {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I_40["pubKey"], keyof _215.PublicKey>, never>;
                power?: any;
            } & Record<Exclude<keyof I_40, keyof _214.ValidatorUpdate>, never>>(object: I_40): _214.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _214.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.VoteInfo;
            fromJSON(object: any): _214.VoteInfo;
            toJSON(message: _214.VoteInfo): unknown;
            fromPartial<I_41 extends {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signedLastBlock?: boolean;
            } & {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                } & {
                    address?: Uint8Array;
                    power?: any;
                } & Record<Exclude<keyof I_41["validator"], keyof _214.Validator>, never>;
                signedLastBlock?: boolean;
            } & Record<Exclude<keyof I_41, keyof _214.VoteInfo>, never>>(object: I_41): _214.VoteInfo;
        };
        Evidence: {
            encode(message: _214.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Evidence;
            fromJSON(object: any): _214.Evidence;
            toJSON(message: _214.Evidence): unknown;
            fromPartial<I_42 extends {
                type?: _214.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            } & {
                type?: _214.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                } & {
                    address?: Uint8Array;
                    power?: any;
                } & Record<Exclude<keyof I_42["validator"], keyof _214.Validator>, never>;
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            } & Record<Exclude<keyof I_42, keyof _214.Evidence>, never>>(object: I_42): _214.Evidence;
        };
        Snapshot: {
            encode(message: _214.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Snapshot;
            fromJSON(object: any): _214.Snapshot;
            toJSON(message: _214.Snapshot): unknown;
            fromPartial<I_43 extends {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            } & {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            } & Record<Exclude<keyof I_43, keyof _214.Snapshot>, never>>(object: I_43): _214.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _216.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.Proof;
            fromJSON(object: any): _216.Proof;
            toJSON(message: _216.Proof): unknown;
            fromPartial<I extends {
                total?: any;
                index?: any;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            } & {
                total?: any;
                index?: any;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["aunts"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I, keyof _216.Proof>, never>>(object: I): _216.Proof;
        };
        ValueOp: {
            encode(message: _216.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.ValueOp;
            fromJSON(object: any): _216.ValueOp;
            toJSON(message: _216.ValueOp): unknown;
            fromPartial<I_1 extends {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_1["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_1["proof"], keyof _216.Proof>, never>;
            } & Record<Exclude<keyof I_1, keyof _216.ValueOp>, never>>(object: I_1): _216.ValueOp;
        };
        DominoOp: {
            encode(message: _216.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.DominoOp;
            fromJSON(object: any): _216.DominoOp;
            toJSON(message: _216.DominoOp): unknown;
            fromPartial<I_2 extends {
                key?: string;
                input?: string;
                output?: string;
            } & {
                key?: string;
                input?: string;
                output?: string;
            } & Record<Exclude<keyof I_2, keyof _216.DominoOp>, never>>(object: I_2): _216.DominoOp;
        };
        ProofOp: {
            encode(message: _216.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.ProofOp;
            fromJSON(object: any): _216.ProofOp;
            toJSON(message: _216.ProofOp): unknown;
            fromPartial<I_3 extends {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            } & {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            } & Record<Exclude<keyof I_3, keyof _216.ProofOp>, never>>(object: I_3): _216.ProofOp;
        };
        ProofOps: {
            encode(message: _216.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.ProofOps;
            fromJSON(object: any): _216.ProofOps;
            toJSON(message: _216.ProofOps): unknown;
            fromPartial<I_4 extends {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            } & {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[] & ({
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                } & {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_4["ops"][number], keyof _216.ProofOp>, never>)[] & Record<Exclude<keyof I_4["ops"], keyof {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_4, "ops">, never>>(object: I_4): _216.ProofOps;
        };
        PublicKey: {
            encode(message: _215.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.PublicKey;
            fromJSON(object: any): _215.PublicKey;
            toJSON(message: _215.PublicKey): unknown;
            fromPartial<I_5 extends {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & Record<Exclude<keyof I_5, keyof _215.PublicKey>, never>>(object: I_5): _215.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _217.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.BitArray;
                fromJSON(object: any): _217.BitArray;
                toJSON(message: _217.BitArray): unknown;
                fromPartial<I extends {
                    bits?: any;
                    elems?: any[];
                } & {
                    bits?: any;
                    elems?: any[] & any[] & Record<Exclude<keyof I["elems"], keyof any[]>, never>;
                } & Record<Exclude<keyof I, keyof _217.BitArray>, never>>(object: I): _217.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _218.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.ProtocolVersion;
            fromJSON(object: any): _218.ProtocolVersion;
            toJSON(message: _218.ProtocolVersion): unknown;
            fromPartial<I extends {
                p2p?: any;
                block?: any;
                app?: any;
            } & {
                p2p?: any;
                block?: any;
                app?: any;
            } & Record<Exclude<keyof I, keyof _218.ProtocolVersion>, never>>(object: I): _218.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _218.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.NodeInfo;
            fromJSON(object: any): _218.NodeInfo;
            toJSON(message: _218.NodeInfo): unknown;
            fromPartial<I_1 extends {
                protocolVersion?: {
                    p2p?: any;
                    block?: any;
                    app?: any;
                };
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            } & {
                protocolVersion?: {
                    p2p?: any;
                    block?: any;
                    app?: any;
                } & {
                    p2p?: any;
                    block?: any;
                    app?: any;
                } & Record<Exclude<keyof I_1["protocolVersion"], keyof _218.ProtocolVersion>, never>;
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                } & {
                    txIndex?: string;
                    rpcAddress?: string;
                } & Record<Exclude<keyof I_1["other"], keyof _218.NodeInfoOther>, never>;
            } & Record<Exclude<keyof I_1, keyof _218.NodeInfo>, never>>(object: I_1): _218.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _218.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.NodeInfoOther;
            fromJSON(object: any): _218.NodeInfoOther;
            toJSON(message: _218.NodeInfoOther): unknown;
            fromPartial<I_2 extends {
                txIndex?: string;
                rpcAddress?: string;
            } & {
                txIndex?: string;
                rpcAddress?: string;
            } & Record<Exclude<keyof I_2, keyof _218.NodeInfoOther>, never>>(object: I_2): _218.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _218.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.PeerInfo;
            fromJSON(object: any): _218.PeerInfo;
            toJSON(message: _218.PeerInfo): unknown;
            fromPartial<I_3 extends {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[];
                lastConnected?: Date;
            } & {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[] & ({
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                } & {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                } & Record<Exclude<keyof I_3["addressInfo"][number], keyof _218.PeerAddressInfo>, never>)[] & Record<Exclude<keyof I_3["addressInfo"], keyof {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[]>, never>;
                lastConnected?: Date;
            } & Record<Exclude<keyof I_3, keyof _218.PeerInfo>, never>>(object: I_3): _218.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _218.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.PeerAddressInfo;
            fromJSON(object: any): _218.PeerAddressInfo;
            toJSON(message: _218.PeerAddressInfo): unknown;
            fromPartial<I_4 extends {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            } & {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            } & Record<Exclude<keyof I_4, keyof _218.PeerAddressInfo>, never>>(object: I_4): _218.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _223.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.ValidatorSet;
            fromJSON(object: any): _223.ValidatorSet;
            toJSON(message: _223.ValidatorSet): unknown;
            fromPartial<I extends {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                };
                totalVotingPower?: any;
            } & {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[] & ({
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["validators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                    votingPower?: any;
                    proposerPriority?: any;
                } & Record<Exclude<keyof I["validators"][number], keyof _223.Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[]>, never>;
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["proposer"]["pubKey"], keyof _215.PublicKey>, never>;
                    votingPower?: any;
                    proposerPriority?: any;
                } & Record<Exclude<keyof I["proposer"], keyof _223.Validator>, never>;
                totalVotingPower?: any;
            } & Record<Exclude<keyof I, keyof _223.ValidatorSet>, never>>(object: I): _223.ValidatorSet;
        };
        Validator: {
            encode(message: _223.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.Validator;
            fromJSON(object: any): _223.Validator;
            toJSON(message: _223.Validator): unknown;
            fromPartial<I_1 extends {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
                proposerPriority?: any;
            } & {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I_1["pubKey"], keyof _215.PublicKey>, never>;
                votingPower?: any;
                proposerPriority?: any;
            } & Record<Exclude<keyof I_1, keyof _223.Validator>, never>>(object: I_1): _223.Validator;
        };
        SimpleValidator: {
            encode(message: _223.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.SimpleValidator;
            fromJSON(object: any): _223.SimpleValidator;
            toJSON(message: _223.SimpleValidator): unknown;
            fromPartial<I_2 extends {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
            } & {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I_2["pubKey"], keyof _215.PublicKey>, never>;
                votingPower?: any;
            } & Record<Exclude<keyof I_2, keyof _223.SimpleValidator>, never>>(object: I_2): _223.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _222.BlockIDFlag;
        blockIDFlagToJSON(object: _222.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _222.SignedMsgType;
        signedMsgTypeToJSON(object: _222.SignedMsgType): string;
        BlockIDFlag: typeof _222.BlockIDFlag;
        SignedMsgType: typeof _222.SignedMsgType;
        PartSetHeader: {
            encode(message: _222.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.PartSetHeader;
            fromJSON(object: any): _222.PartSetHeader;
            toJSON(message: _222.PartSetHeader): unknown;
            fromPartial<I_3 extends {
                total?: number;
                hash?: Uint8Array;
            } & {
                total?: number;
                hash?: Uint8Array;
            } & Record<Exclude<keyof I_3, keyof _222.PartSetHeader>, never>>(object: I_3): _222.PartSetHeader;
        };
        Part: {
            encode(message: _222.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Part;
            fromJSON(object: any): _222.Part;
            toJSON(message: _222.Part): unknown;
            fromPartial<I_4 extends {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_4["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_4["proof"], keyof _216.Proof>, never>;
            } & Record<Exclude<keyof I_4, keyof _222.Part>, never>>(object: I_4): _222.Part;
        };
        BlockID: {
            encode(message: _222.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.BlockID;
            fromJSON(object: any): _222.BlockID;
            toJSON(message: _222.BlockID): unknown;
            fromPartial<I_5 extends {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            } & {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                } & {
                    total?: number;
                    hash?: Uint8Array;
                } & Record<Exclude<keyof I_5["partSetHeader"], keyof _222.PartSetHeader>, never>;
            } & Record<Exclude<keyof I_5, keyof _222.BlockID>, never>>(object: I_5): _222.BlockID;
        };
        Header: {
            encode(message: _222.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Header;
            fromJSON(object: any): _222.Header;
            toJSON(message: _222.Header): unknown;
            fromPartial<I_6 extends {
                version?: {
                    block?: any;
                    app?: any;
                };
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & {
                version?: {
                    block?: any;
                    app?: any;
                } & {
                    block?: any;
                    app?: any;
                } & Record<Exclude<keyof I_6["version"], keyof _224.Consensus>, never>;
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_6["lastBlockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_6["lastBlockId"], keyof _222.BlockID>, never>;
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & Record<Exclude<keyof I_6, keyof _222.Header>, never>>(object: I_6): _222.Header;
        };
        Data: {
            encode(message: _222.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Data;
            fromJSON(object: any): _222.Data;
            toJSON(message: _222.Data): unknown;
            fromPartial<I_7 extends {
                txs?: Uint8Array[];
            } & {
                txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_7["txs"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I_7, "txs">, never>>(object: I_7): _222.Data;
        };
        Vote: {
            encode(message: _222.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Vote;
            fromJSON(object: any): _222.Vote;
            toJSON(message: _222.Vote): unknown;
            fromPartial<I_8 extends {
                type?: _222.SignedMsgType;
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            } & {
                type?: _222.SignedMsgType;
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_8["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_8["blockId"], keyof _222.BlockID>, never>;
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_8, keyof _222.Vote>, never>>(object: I_8): _222.Vote;
        };
        Commit: {
            encode(message: _222.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Commit;
            fromJSON(object: any): _222.Commit;
            toJSON(message: _222.Commit): unknown;
            fromPartial<I_9 extends {
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: _222.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            } & {
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_9["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_9["blockId"], keyof _222.BlockID>, never>;
                signatures?: {
                    blockIdFlag?: _222.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[] & ({
                    blockIdFlag?: _222.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & {
                    blockIdFlag?: _222.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_9["signatures"][number], keyof _222.CommitSig>, never>)[] & Record<Exclude<keyof I_9["signatures"], keyof {
                    blockIdFlag?: _222.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_9, keyof _222.Commit>, never>>(object: I_9): _222.Commit;
        };
        CommitSig: {
            encode(message: _222.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.CommitSig;
            fromJSON(object: any): _222.CommitSig;
            toJSON(message: _222.CommitSig): unknown;
            fromPartial<I_10 extends {
                blockIdFlag?: _222.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            } & {
                blockIdFlag?: _222.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_10, keyof _222.CommitSig>, never>>(object: I_10): _222.CommitSig;
        };
        Proposal: {
            encode(message: _222.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Proposal;
            fromJSON(object: any): _222.Proposal;
            toJSON(message: _222.Proposal): unknown;
            fromPartial<I_11 extends {
                type?: _222.SignedMsgType;
                height?: any;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            } & {
                type?: _222.SignedMsgType;
                height?: any;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_11["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_11["blockId"], keyof _222.BlockID>, never>;
                timestamp?: Date;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_11, keyof _222.Proposal>, never>>(object: I_11): _222.Proposal;
        };
        SignedHeader: {
            encode(message: _222.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.SignedHeader;
            fromJSON(object: any): _222.SignedHeader;
            toJSON(message: _222.SignedHeader): unknown;
            fromPartial<I_12 extends {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _222.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            } & {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & {
                    version?: {
                        block?: any;
                        app?: any;
                    } & {
                        block?: any;
                        app?: any;
                    } & Record<Exclude<keyof I_12["header"]["version"], keyof _224.Consensus>, never>;
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_12["header"]["lastBlockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_12["header"]["lastBlockId"], keyof _222.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_12["header"], keyof _222.Header>, never>;
                commit?: {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _222.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                } & {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_12["commit"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_12["commit"]["blockId"], keyof _222.BlockID>, never>;
                    signatures?: {
                        blockIdFlag?: _222.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[] & ({
                        blockIdFlag?: _222.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & {
                        blockIdFlag?: _222.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_12["commit"]["signatures"][number], keyof _222.CommitSig>, never>)[] & Record<Exclude<keyof I_12["commit"]["signatures"], keyof {
                        blockIdFlag?: _222.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_12["commit"], keyof _222.Commit>, never>;
            } & Record<Exclude<keyof I_12, keyof _222.SignedHeader>, never>>(object: I_12): _222.SignedHeader;
        };
        LightBlock: {
            encode(message: _222.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.LightBlock;
            fromJSON(object: any): _222.LightBlock;
            toJSON(message: _222.LightBlock): unknown;
            fromPartial<I_13 extends {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    commit?: {
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _222.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    };
                    totalVotingPower?: any;
                };
            } & {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    commit?: {
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _222.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                } & {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & {
                        version?: {
                            block?: any;
                            app?: any;
                        } & {
                            block?: any;
                            app?: any;
                        } & Record<Exclude<keyof I_13["signedHeader"]["header"]["version"], keyof _224.Consensus>, never>;
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I_13["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_13["signedHeader"]["header"]["lastBlockId"], keyof _222.BlockID>, never>;
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & Record<Exclude<keyof I_13["signedHeader"]["header"], keyof _222.Header>, never>;
                    commit?: {
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _222.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    } & {
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["blockId"], keyof _222.BlockID>, never>;
                        signatures?: {
                            blockIdFlag?: _222.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[] & ({
                            blockIdFlag?: _222.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        } & {
                            blockIdFlag?: _222.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["signatures"][number], keyof _222.CommitSig>, never>)[] & Record<Exclude<keyof I_13["signedHeader"]["commit"]["signatures"], keyof {
                            blockIdFlag?: _222.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_13["signedHeader"]["commit"], keyof _222.Commit>, never>;
                } & Record<Exclude<keyof I_13["signedHeader"], keyof _222.SignedHeader>, never>;
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    };
                    totalVotingPower?: any;
                } & {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[] & ({
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    } & {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_13["validatorSet"]["validators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                        votingPower?: any;
                        proposerPriority?: any;
                    } & Record<Exclude<keyof I_13["validatorSet"]["validators"][number], keyof _223.Validator>, never>)[] & Record<Exclude<keyof I_13["validatorSet"]["validators"], keyof {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[]>, never>;
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    } & {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_13["validatorSet"]["proposer"]["pubKey"], keyof _215.PublicKey>, never>;
                        votingPower?: any;
                        proposerPriority?: any;
                    } & Record<Exclude<keyof I_13["validatorSet"]["proposer"], keyof _223.Validator>, never>;
                    totalVotingPower?: any;
                } & Record<Exclude<keyof I_13["validatorSet"], keyof _223.ValidatorSet>, never>;
            } & Record<Exclude<keyof I_13, keyof _222.LightBlock>, never>>(object: I_13): _222.LightBlock;
        };
        BlockMeta: {
            encode(message: _222.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.BlockMeta;
            fromJSON(object: any): _222.BlockMeta;
            toJSON(message: _222.BlockMeta): unknown;
            fromPartial<I_14 extends {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: any;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                numTxs?: any;
            } & {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_14["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_14["blockId"], keyof _222.BlockID>, never>;
                blockSize?: any;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & {
                    version?: {
                        block?: any;
                        app?: any;
                    } & {
                        block?: any;
                        app?: any;
                    } & Record<Exclude<keyof I_14["header"]["version"], keyof _224.Consensus>, never>;
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_14["header"]["lastBlockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_14["header"]["lastBlockId"], keyof _222.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_14["header"], keyof _222.Header>, never>;
                numTxs?: any;
            } & Record<Exclude<keyof I_14, keyof _222.BlockMeta>, never>>(object: I_14): _222.BlockMeta;
        };
        TxProof: {
            encode(message: _222.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.TxProof;
            fromJSON(object: any): _222.TxProof;
            toJSON(message: _222.TxProof): unknown;
            fromPartial<I_15 extends {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_15["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_15["proof"], keyof _216.Proof>, never>;
            } & Record<Exclude<keyof I_15, keyof _222.TxProof>, never>>(object: I_15): _222.TxProof;
        };
        ConsensusParams: {
            encode(message: _221.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ConsensusParams;
            fromJSON(object: any): _221.ConsensusParams;
            toJSON(message: _221.ConsensusParams): unknown;
            fromPartial<I_16 extends {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            } & {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                } & {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                } & Record<Exclude<keyof I_16["block"], keyof _221.BlockParams>, never>;
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & Record<Exclude<keyof I_16["evidence"], keyof _221.EvidenceParams>, never>;
                validator?: {
                    pubKeyTypes?: string[];
                } & {
                    pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["validator"]["pubKeyTypes"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_16["validator"], "pubKeyTypes">, never>;
                version?: {
                    appVersion?: any;
                } & {
                    appVersion?: any;
                } & Record<Exclude<keyof I_16["version"], "appVersion">, never>;
            } & Record<Exclude<keyof I_16, keyof _221.ConsensusParams>, never>>(object: I_16): _221.ConsensusParams;
        };
        BlockParams: {
            encode(message: _221.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.BlockParams;
            fromJSON(object: any): _221.BlockParams;
            toJSON(message: _221.BlockParams): unknown;
            fromPartial<I_17 extends {
                maxBytes?: any;
                maxGas?: any;
                timeIotaMs?: any;
            } & {
                maxBytes?: any;
                maxGas?: any;
                timeIotaMs?: any;
            } & Record<Exclude<keyof I_17, keyof _221.BlockParams>, never>>(object: I_17): _221.BlockParams;
        };
        EvidenceParams: {
            encode(message: _221.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.EvidenceParams;
            fromJSON(object: any): _221.EvidenceParams;
            toJSON(message: _221.EvidenceParams): unknown;
            fromPartial<I_18 extends {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & Record<Exclude<keyof I_18, keyof _221.EvidenceParams>, never>>(object: I_18): _221.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _221.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ValidatorParams;
            fromJSON(object: any): _221.ValidatorParams;
            toJSON(message: _221.ValidatorParams): unknown;
            fromPartial<I_19 extends {
                pubKeyTypes?: string[];
            } & {
                pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_19["pubKeyTypes"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_19, "pubKeyTypes">, never>>(object: I_19): _221.ValidatorParams;
        };
        VersionParams: {
            encode(message: _221.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.VersionParams;
            fromJSON(object: any): _221.VersionParams;
            toJSON(message: _221.VersionParams): unknown;
            fromPartial<I_20 extends {
                appVersion?: any;
            } & {
                appVersion?: any;
            } & Record<Exclude<keyof I_20, "appVersion">, never>>(object: I_20): _221.VersionParams;
        };
        HashedParams: {
            encode(message: _221.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.HashedParams;
            fromJSON(object: any): _221.HashedParams;
            toJSON(message: _221.HashedParams): unknown;
            fromPartial<I_21 extends {
                blockMaxBytes?: any;
                blockMaxGas?: any;
            } & {
                blockMaxBytes?: any;
                blockMaxGas?: any;
            } & Record<Exclude<keyof I_21, keyof _221.HashedParams>, never>>(object: I_21): _221.HashedParams;
        };
        Evidence: {
            encode(message: _220.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.Evidence;
            fromJSON(object: any): _220.Evidence;
            toJSON(message: _220.Evidence): unknown;
            fromPartial<I_22 extends {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _222.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _222.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: any;
                    validatorPower?: any;
                    timestamp?: Date;
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _222.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    };
                    commonHeight?: any;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[];
                    totalVotingPower?: any;
                    timestamp?: Date;
                };
            } & {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _222.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _222.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: any;
                    validatorPower?: any;
                    timestamp?: Date;
                } & {
                    voteA?: {
                        type?: _222.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & {
                        type?: _222.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _222.BlockID>, never>;
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"], keyof _222.Vote>, never>;
                    voteB?: {
                        type?: _222.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & {
                        type?: _222.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _222.BlockID>, never>;
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"], keyof _222.Vote>, never>;
                    totalVotingPower?: any;
                    validatorPower?: any;
                    timestamp?: Date;
                } & Record<Exclude<keyof I_22["duplicateVoteEvidence"], keyof _220.DuplicateVoteEvidence>, never>;
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _222.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    };
                    commonHeight?: any;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[];
                    totalVotingPower?: any;
                    timestamp?: Date;
                } & {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _222.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    } & {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _222.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        } & {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            } & {
                                version?: {
                                    block?: any;
                                    app?: any;
                                } & {
                                    block?: any;
                                    app?: any;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _224.Consensus>, never>;
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _222.BlockID>, never>;
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _222.Header>, never>;
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _222.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            } & {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _222.BlockID>, never>;
                                signatures?: {
                                    blockIdFlag?: _222.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[] & ({
                                    blockIdFlag?: _222.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & {
                                    blockIdFlag?: _222.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _222.CommitSig>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                    blockIdFlag?: _222.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _222.Commit>, never>;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _222.SignedHeader>, never>;
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        } & {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _223.Validator>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[]>, never>;
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _215.PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _223.Validator>, never>;
                            totalVotingPower?: any;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _223.ValidatorSet>, never>;
                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"], keyof _222.LightBlock>, never>;
                    commonHeight?: any;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[] & ({
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    } & {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                        votingPower?: any;
                        proposerPriority?: any;
                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _223.Validator>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[]>, never>;
                    totalVotingPower?: any;
                    timestamp?: Date;
                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"], keyof _220.LightClientAttackEvidence>, never>;
            } & Record<Exclude<keyof I_22, keyof _220.Evidence>, never>>(object: I_22): _220.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _220.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.DuplicateVoteEvidence;
            fromJSON(object: any): _220.DuplicateVoteEvidence;
            toJSON(message: _220.DuplicateVoteEvidence): unknown;
            fromPartial<I_23 extends {
                voteA?: {
                    type?: _222.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                voteB?: {
                    type?: _222.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                totalVotingPower?: any;
                validatorPower?: any;
                timestamp?: Date;
            } & {
                voteA?: {
                    type?: _222.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & {
                    type?: _222.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_23["voteA"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_23["voteA"]["blockId"], keyof _222.BlockID>, never>;
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_23["voteA"], keyof _222.Vote>, never>;
                voteB?: {
                    type?: _222.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & {
                    type?: _222.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_23["voteB"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_23["voteB"]["blockId"], keyof _222.BlockID>, never>;
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_23["voteB"], keyof _222.Vote>, never>;
                totalVotingPower?: any;
                validatorPower?: any;
                timestamp?: Date;
            } & Record<Exclude<keyof I_23, keyof _220.DuplicateVoteEvidence>, never>>(object: I_23): _220.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _220.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.LightClientAttackEvidence;
            fromJSON(object: any): _220.LightClientAttackEvidence;
            toJSON(message: _220.LightClientAttackEvidence): unknown;
            fromPartial<I_24 extends {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _222.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        };
                        totalVotingPower?: any;
                    };
                };
                commonHeight?: any;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[];
                totalVotingPower?: any;
                timestamp?: Date;
            } & {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _222.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        };
                        totalVotingPower?: any;
                    };
                } & {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _222.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    } & {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        } & {
                            version?: {
                                block?: any;
                                app?: any;
                            } & {
                                block?: any;
                                app?: any;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _224.Consensus>, never>;
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _222.BlockID>, never>;
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"], keyof _222.Header>, never>;
                        commit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _222.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        } & {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _222.BlockID>, never>;
                            signatures?: {
                                blockIdFlag?: _222.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[] & ({
                                blockIdFlag?: _222.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            } & {
                                blockIdFlag?: _222.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _222.CommitSig>, never>)[] & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                blockIdFlag?: _222.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"], keyof _222.Commit>, never>;
                    } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"], keyof _222.SignedHeader>, never>;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        };
                        totalVotingPower?: any;
                    } & {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[] & ({
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        } & {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                            votingPower?: any;
                            proposerPriority?: any;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"][number], keyof _223.Validator>, never>)[] & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"], keyof {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[]>, never>;
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        } & {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _215.PublicKey>, never>;
                            votingPower?: any;
                            proposerPriority?: any;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["proposer"], keyof _223.Validator>, never>;
                        totalVotingPower?: any;
                    } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"], keyof _223.ValidatorSet>, never>;
                } & Record<Exclude<keyof I_24["conflictingBlock"], keyof _222.LightBlock>, never>;
                commonHeight?: any;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[] & ({
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_24["byzantineValidators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                    votingPower?: any;
                    proposerPriority?: any;
                } & Record<Exclude<keyof I_24["byzantineValidators"][number], keyof _223.Validator>, never>)[] & Record<Exclude<keyof I_24["byzantineValidators"], keyof {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[]>, never>;
                totalVotingPower?: any;
                timestamp?: Date;
            } & Record<Exclude<keyof I_24, keyof _220.LightClientAttackEvidence>, never>>(object: I_24): _220.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _220.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.EvidenceList;
            fromJSON(object: any): _220.EvidenceList;
            toJSON(message: _220.EvidenceList): unknown;
            fromPartial<I_25 extends {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _222.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                }[];
            } & {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _222.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                }[] & ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _222.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                } & {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    } & {
                        voteA?: {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _222.BlockID>, never>;
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof _222.Vote>, never>;
                        voteB?: {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _222.BlockID>, never>;
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof _222.Vote>, never>;
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"], keyof _220.DuplicateVoteEvidence>, never>;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _222.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    } & {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _222.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        } & {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _222.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            } & {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    } & {
                                        block?: any;
                                        app?: any;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _224.Consensus>, never>;
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _222.BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _222.Header>, never>;
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _222.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                } & {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _222.BlockID>, never>;
                                    signatures?: {
                                        blockIdFlag?: _222.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[] & ({
                                        blockIdFlag?: _222.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & {
                                        blockIdFlag?: _222.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _222.CommitSig>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: _222.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _222.Commit>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _222.SignedHeader>, never>;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _223.Validator>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _215.PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _223.Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _223.ValidatorSet>, never>;
                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof _222.LightBlock>, never>;
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[] & ({
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        } & {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                            votingPower?: any;
                            proposerPriority?: any;
                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _223.Validator>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[]>, never>;
                        totalVotingPower?: any;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"], keyof _220.LightClientAttackEvidence>, never>;
                } & Record<Exclude<keyof I_25["evidence"][number], keyof _220.Evidence>, never>)[] & Record<Exclude<keyof I_25["evidence"], keyof {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _222.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _222.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I_25, "evidence">, never>>(object: I_25): _220.EvidenceList;
        };
        Block: {
            encode(message: _219.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.Block;
            fromJSON(object: any): _219.Block;
            toJSON(message: _219.Block): unknown;
            fromPartial<I_26 extends {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _222.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: Date;
                        };
                    }[];
                };
                lastCommit?: {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _222.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            } & {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & {
                    version?: {
                        block?: any;
                        app?: any;
                    } & {
                        block?: any;
                        app?: any;
                    } & Record<Exclude<keyof I_26["header"]["version"], keyof _224.Consensus>, never>;
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_26["header"]["lastBlockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_26["header"]["lastBlockId"], keyof _222.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_26["header"], keyof _222.Header>, never>;
                data?: {
                    txs?: Uint8Array[];
                } & {
                    txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_26["data"]["txs"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_26["data"], "txs">, never>;
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _222.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: Date;
                        };
                    }[];
                } & {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _222.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: Date;
                        };
                    }[] & ({
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _222.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: Date;
                        };
                    } & {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        } & {
                            voteA?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _222.BlockID>, never>;
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof _222.Vote>, never>;
                            voteB?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _222.BlockID>, never>;
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof _222.Vote>, never>;
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"], keyof _220.DuplicateVoteEvidence>, never>;
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _222.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: Date;
                        } & {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _222.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            } & {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _222.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                } & {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    } & {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        } & {
                                            block?: any;
                                            app?: any;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _224.Consensus>, never>;
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        } & {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            } & {
                                                total?: number;
                                                hash?: Uint8Array;
                                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _222.BlockID>, never>;
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _222.Header>, never>;
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _222.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    } & {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        } & {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            } & {
                                                total?: number;
                                                hash?: Uint8Array;
                                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _222.BlockID>, never>;
                                        signatures?: {
                                            blockIdFlag?: _222.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[] & ({
                                            blockIdFlag?: _222.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        } & {
                                            blockIdFlag?: _222.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _222.CommitSig>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                            blockIdFlag?: _222.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[]>, never>;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _222.Commit>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _222.SignedHeader>, never>;
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                } & {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[] & ({
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _223.Validator>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[]>, never>;
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _215.PublicKey>, never>;
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _223.Validator>, never>;
                                    totalVotingPower?: any;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _223.ValidatorSet>, never>;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof _222.LightBlock>, never>;
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _215.PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _223.Validator>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[]>, never>;
                            totalVotingPower?: any;
                            timestamp?: Date;
                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"], keyof _220.LightClientAttackEvidence>, never>;
                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number], keyof _220.Evidence>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"], keyof {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _222.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _222.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: Date;
                        };
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["evidence"], "evidence">, never>;
                lastCommit?: {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _222.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                } & {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_26["lastCommit"]["blockId"]["partSetHeader"], keyof _222.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_26["lastCommit"]["blockId"], keyof _222.BlockID>, never>;
                    signatures?: {
                        blockIdFlag?: _222.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[] & ({
                        blockIdFlag?: _222.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & {
                        blockIdFlag?: _222.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_26["lastCommit"]["signatures"][number], keyof _222.CommitSig>, never>)[] & Record<Exclude<keyof I_26["lastCommit"]["signatures"], keyof {
                        blockIdFlag?: _222.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["lastCommit"], keyof _222.Commit>, never>;
            } & Record<Exclude<keyof I_26, keyof _219.Block>, never>>(object: I_26): _219.Block;
        };
    };
    const version: {
        App: {
            encode(message: _224.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.App;
            fromJSON(object: any): _224.App;
            toJSON(message: _224.App): unknown;
            fromPartial<I extends {
                protocol?: any;
                software?: string;
            } & {
                protocol?: any;
                software?: string;
            } & Record<Exclude<keyof I, keyof _224.App>, never>>(object: I): _224.App;
        };
        Consensus: {
            encode(message: _224.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Consensus;
            fromJSON(object: any): _224.Consensus;
            toJSON(message: _224.Consensus): unknown;
            fromPartial<I_1 extends {
                block?: any;
                app?: any;
            } & {
                block?: any;
                app?: any;
            } & Record<Exclude<keyof I_1, keyof _224.Consensus>, never>>(object: I_1): _224.Consensus;
        };
    };
}
