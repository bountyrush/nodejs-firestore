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
import { DocumentChange } from './documentChange';
import { DocumentDelete } from './documentDelete';
import { DocumentRemove } from './documentRemove';
import { ExistenceFilter } from './existenceFilter';
import { TargetChange } from './targetChange';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * The response for Firestore.Listen.
 */
export class ListenResponse {
    /**
     * A Document has changed.
     */
    documentChange?: DocumentChange;
    /**
     * A Document has been deleted.
     */
    documentDelete?: DocumentDelete;
    /**
     * A Document has been removed from a target (because it is no longer relevant to that target).
     */
    documentRemove?: DocumentRemove;
    /**
     * A filter to apply to the set of documents previously returned for the given target. Returned when documents may have been removed from the given target, but the exact documents are unknown.
     */
    filter?: ExistenceFilter;
    /**
     * Targets have changed.
     */
    targetChange?: TargetChange;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.documentChange !== undefined) {
            this.documentChange = new DocumentChange(json.documentChange);
        }
        if (json.documentDelete !== undefined) {
            this.documentDelete = new DocumentDelete(json.documentDelete);
        }
        if (json.documentRemove !== undefined) {
            this.documentRemove = new DocumentRemove(json.documentRemove);
        }
        if (json.filter !== undefined) {
            this.filter = new ExistenceFilter(json.filter);
        }
        if (json.targetChange !== undefined) {
            this.targetChange = new TargetChange(json.targetChange);
        }
  }
}
