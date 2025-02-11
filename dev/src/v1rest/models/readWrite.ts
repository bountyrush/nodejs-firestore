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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * Options for a transaction that can be used to read and write documents.
 */
export class ReadWrite {
    /**
     * An optional transaction to retry.
     */
    retryTransaction?: string;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.retryTransaction !== undefined) {
            this.retryTransaction = helpers.stringFromBufferJson(json.retryTransaction); //[Data format: byte]
        }
  }
}
