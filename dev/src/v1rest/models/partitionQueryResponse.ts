/* eslint-disable prettier/prettier */
/**
 * Cloud Firestore API
 * Accesses the NoSQL document database built for automatic scaling, high performance, and ease of application development. 
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Cursor } from './cursor';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * The response for Firestore.PartitionQuery.
 */
export class PartitionQueryResponse {
    /**
     * A page token that may be used to request an additional set of results, up to the number specified by `partition_count` in the PartitionQuery request. If blank, there are no more results.
     */
    nextPageToken?: string;
    /**
     * Partition results. Each partition is a split point that can be used by RunQuery as a starting or end point for the query results. The RunQuery requests must be made with the same query supplied to this PartitionQuery request. The partition cursors will be ordered according to same ordering as the results of the query supplied to PartitionQuery. For example, if a PartitionQuery request returns partition cursors A and B, running the following three queries will return the entire result set of the original query: * query, end_at A * query, start_at A, end_at B * query, start_at B An empty result may indicate that the query has too few results to be partitioned.
     */
    partitions?: Array<Cursor>;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.nextPageToken !== undefined) {
            this.nextPageToken = json.nextPageToken; //[Data format: ]
        }
        if (json.partitions !== undefined) {
            this.partitions = [];
            json.partitions.forEach((element: Cursor) => {
                this.partitions?.push(new Cursor(element));
            });
        }
  }
}
